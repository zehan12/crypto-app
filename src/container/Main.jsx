import { Fragment } from "react";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";
import ColorModeSwitcher from '../components/provider/ColorModeSwitcher';
import { BrowserRouter as Router, RouterProvider, } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AllRoutes from "../routes/AllRoutes";


const Main = () => {
    return (
        <Fragment>
            <ColorModeScript />
            <ChakraProvider theme={theme}>
                <ColorModeSwitcher />
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