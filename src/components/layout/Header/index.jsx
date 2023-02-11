import { Button, HStack } from "@chakra-ui/react";
import { Fragment } from "react"
import { Link } from "react-router-dom";

const Header = () => {

    const navLinkList = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "Exchanges",
            route: "/exchanges"
        },
        {
            name: "Coins",
            route: "/coins"
        }
    ]

    return (
        <Fragment>
            <header>
                <HStack p={"4"} shadow={"base"} bgColor={"blackAplha.900"}>
                    {
                        navLinkList.map((link) => (<Button key={link.name} variant={"unstyled"}>
                            <Link to={`${link.route}`}>{link.name}</Link>
                        </Button>))
                    }
                </HStack>
            </header>
        </Fragment>
    )
}

export default Header;