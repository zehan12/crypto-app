import { Fragment } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AllRoutes from "../routes/AllRoutes";


const Main = () => {
    return (
        <Fragment>
            <ChakraProvider theme={theme}>
                <Router>
                    <MainLayout>
                        <main>
                            <AllRoutes />
                        </main>
                    </MainLayout>
                </Router>
            </ChakraProvider>
        </Fragment>
    )
}

export default Main;