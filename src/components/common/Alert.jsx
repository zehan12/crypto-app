import { Fragment } from "react"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"

const AlertDialog = ({ status, title, desc }) => {
    return (
        <Fragment>
            <Alert status={status}>
                <AlertIcon />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{desc}</AlertDescription>
            </Alert>
        </Fragment>
    )
}

export default AlertDialog;