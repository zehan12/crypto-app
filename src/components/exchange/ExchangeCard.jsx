import { Heading, Image, VStack, Text } from "@chakra-ui/react"

const ExchangeCard = ({ mame, img, rank, url }) => {
    return (
        <a href={url} target={"blank"}>
            <VStack w={"32"}
                shadow={"lg"}
                p={"8"}
                borderRadius={"lg"}
                transition={"all 0.3s"}
                m={"4"}
                css={{
                    "&:hover": {
                        transform: "scale()"
                    }
                }}
            >
                <Image src={img}
                    w={"10"}
                    h={"10"}
                    objectFit={"contain"}
                    alt="Exchange"
                />
                <Heading size={"md"} noOfLines={1}>
                    {rank}
                </Heading>
                <Text noOfLines={1}>{name}</Text>
            </VStack>
        </a>
    )
}

export default ExchangeCard;