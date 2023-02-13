import {
    Container, HStack,
} from "@chakra-ui/react"
import { Fragment, useEffect, useState } from "react"
import Loader from "../components/common/Loader"
import ExchangeCard from "../components/exchange/ExchangeCard"
import { fetchExchanges } from "../services/api"
import Error from "../components/common/Error"
import AlertDialog from "../components/common/Alert"

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
                <AlertDialog
                    status={"error"}
                    title={"Error"}
                    desc={"Error while fetching the data."}
                />
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
                            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
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