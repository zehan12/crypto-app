import { Container, HStack,, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, } from "@chakra-ui/react"
import { Fragment, useEffect, useState } from "react"
import Loader from "../components/common/Loader"
import ExchangeCard from "../components/exchange/ExchangeCard"
import { fetchExchanges } from "../services/api"
import Error from "../components/common/Error"

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchExchanges().then((res) => {
            setExchanges(res)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            setError(true)
        })
    }, [])


    if (error) {
        return (
            <Fragment>
                <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
</Alert>
                <Error message={"Error while fetching the data!!"} />

                </Fragment>
        )
    }

    console.log(exchanges, "stat")
    return (
        <Fragment>
            <Container maxW={"container.lg"}>
                {
                    loading ? <Loader /> :
                        <Fragment>
                            <HStack wrap={"wrap"}>
                                {
                                    exchanges.map((exchange) => (
                                        <ExchangeCard
                                            name={exchange.name}
                                            img={exchange.image}
                                            url={exchange.url}
                                            rank={exchange.trust_score_rank}
                                        />
                                    ))
                                }
                            </HStack>
                        </Fragment>
                }
            </Container>
        </Fragment>
    )
}

export default Exchanges;