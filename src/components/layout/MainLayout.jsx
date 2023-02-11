import { Fragment } from "react"
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    // console.log(props)
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default MainLayout;