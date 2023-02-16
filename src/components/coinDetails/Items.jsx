import { HStack, Text } from "@chakra-ui/react"

const Items = (
    { title, value }
) => {
    return (
        <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
            <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
            <Text>{value}</Text>
        </HStack>
    )
}

export default Items;