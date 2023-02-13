import {
    Container, HStack,
    Button,
    useToast,
    RadioGroup,
    Radio
} from "@chakra-ui/react"
import { Fragment, useEffect, useState } from "react"
import Loader from "../components/common/Loader"
import { fetchCoin } from "../services/api"
import Error from "../components/common/Error"
import AlertDialog from "../components/common/Alert"
import CoinCard from "../components/coin/CoinCard"

const Coin = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [currency, setCurrency] = useState("usd")

    const toast = useToast()

    const buttons = new Array(132).fill("x")

    // const currencySet = {
    //     inr:""
    // }



    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    useEffect(() => {
        fetchCoin(currency, page).then((res) => {
            toast({
                title: "Data Fetched",
                description: "Data Fetched Successfully",
                status: 'success',
                duration: 2000,
                position: "top",
                isClosable: true,
            })
            setCoins(res)
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
    }, [currency, page])


    if (error) {
        return (
            <Fragment>
                <AlertDialog
                    status={"error"}
                    title={"Error"}
                    desc={"Error while fetching the data."}
                />

                <Error message={"Error while fetching the data!!"} />
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Container maxW={"container.lg"}>
                {
                    loading ? <Loader /> :
                        <Fragment>
                            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                                <HStack spacing={"4"}>
                                    <Radio value={"inr"}>₹ INR</Radio>
                                    <Radio value={"eur"}>€ EURO</Radio>
                                    <Radio value={"usd"}>$ USD</Radio>
                                </HStack>
                            </RadioGroup>
                            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                                {
                                    coins.map((coin) => (
                                        <CoinCard
                                            key={coin.id}
                                            id={coin.id}
                                            name={coin.name}
                                            img={coin.image}
                                            url={coin.url}
                                            price={coin.current_price}
                                            symbol={coin.symbol}
                                            currencySymbol={currencySymbol}
                                        />
                                    ))
                                }
                            </HStack>
                            <HStack w={"full"} overflowX={"auto"} p={"8"}                           >
                                {
                                    buttons.map((_, index) => (<Button
                                        bgColor={"blackAlpha.900"}
                                        color={"white"}
                                        onClick={() => {
                                            setLoading(true)
                                            setPage(++index)
                                        }}
                                    >{++index}</Button>))
                                }
                            </HStack>
                        </Fragment>
                }
            </Container>
        </Fragment>
    )
}

export default Coin;