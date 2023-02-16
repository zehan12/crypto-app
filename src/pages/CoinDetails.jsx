import { Box, Container, Button, VStack, HStack, useToast, RadioGroup, Radio, Text, Img, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge } from "@chakra-ui/react";
import { Fragment, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Chart from "../components/coinDetails/Chart";
import CustomBar from "../components/coinDetails/CustomBar";
import Items from "../components/coinDetails/Items";
import Loader from "../components/common/Loader";
import { fetchChartData, fetchCoinDetails } from "../services/api";

const CoinDetails = () => {
    const param = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [coin, setCoins] = useState([])
    const [currency, setCurrency] = useState("usd")
    const [days, setDays] = useState("24h");
    const [chartArray, setChartArray] = useState([])

    const toast = useToast()
    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

    const switchChartStats = (key) => {
        switch (key) {
            case "24h":
                setDays("24h");
                setLoading(true);
                break;
            case "7d":
                setDays("7d");
                setLoading(true);
                break;
            case "14d":
                setDays("14d");
                setLoading(true);
                break;
            case "30d":
                setDays("30d");
                setLoading(true);
                break;
            case "60d":
                setDays("60d");
                setLoading(true);
                break;
            case "200d":
                setDays("200d");
                setLoading(true);
                break;
            case "1y":
                setDays("365d");
                setLoading(true);
                break;
            case "max":
                setDays("max");
                setLoading(true);
                break;

            default:
                setDays("24h");
                setLoading(true);
                break;
        }
    };

    useEffect(() => {
        Promise.all([fetchCoinDetails(param.id), fetchChartData(param.id, currency, days)]).then((data) => {
            toast({
                title: "Data Fetched",
                description: "Data Fetched Successfully",
                status: 'success',
                duration: 2000,
                position: "top",
                isClosable: true,
            })
            setCoins(data[0])
            setChartArray(data[1].prices)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            toast({
                title: err.code,
                description: err.message,
                status: 'error',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
            setLoading(false)
            setError(true)
        })
    }, [currency, param.id, days])

    return (
        <Fragment>
            <Container maxW={"container.xl"}>
                {
                    loading ? (<Loader />) : (
                        <Fragment>
                            <Box width={"full"} borderWidth={1}>
                                <Chart arr={chartArray} currency={currencySymbol} days={days} />
                            </Box>
                            <HStack p="4" overflowX={"auto"}>
                                {btns.map((i) => (
                                    <Button
                                        disabled={days === i}
                                        key={i}
                                        onClick={() => switchChartStats(i)}
                                    >
                                        {i}
                                    </Button>
                                ))}
                            </HStack>
                            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                                <HStack spacing={"4"}>
                                    <Radio value={"inr"}>₹ INR</Radio>
                                    <Radio value={"eur"}>€ EURO</Radio>
                                    <Radio value={"usd"}>$ USD</Radio>
                                </HStack>
                            </RadioGroup>
                            <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
                                <Text fontSize={"small"} alignSelf={"center"} opacity={0.7} >
                                    Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
                                </Text>
                                <Img src={coin.image.large} w="16" h="16" objectFit={"contain"} />
                            </VStack>
                            <Stat>
                                <StatLabel>
                                    {coin.name}
                                </StatLabel>
                                <StatNumber>
                                    {currencySymbol}
                                    {coin.market_data?.current_price[currency]}
                                </StatNumber>
                                <StatHelpText>
                                    <StatArrow
                                        type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"}
                                    />
                                    {coin.market_data.price_change_percentage_24h}%
                                </StatHelpText>
                            </Stat>
                            <Badge
                                fontSize={"2xl"}
                                bgColor={"blackAlpha.900"}
                                color={"white"}>
                                {`#${coin.market_cap_rank}`}
                            </Badge>
                            <CustomBar
                                high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                                low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
                            />
                            <Items title={"Max Supply"} value={coin.market_data.max_supply} />
                            <Items title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
                            <Items title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
                            <Items title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
                            <Items title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />


                        </Fragment>
                    )
                }
            </Container>
        </Fragment>
    )
}

export default CoinDetails;