import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Coin from "../pages/Coin"
import CoinDetails from "../pages/CoinDetails"
import Exchanges from "../pages/Exchanges"
import Home from "../pages/Home"

const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coins" element={<Coin />}>
                    <Route path="/coins/:id" element={<CoinDetails />} />
                </Route>
                <Route path="/exchanges" element={<Exchanges />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;