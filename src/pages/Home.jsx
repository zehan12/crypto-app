import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
// import btcSrc from "https://i.postimg.cc/fbRHr4yc/bitcoin-15518.png";
import { motion } from "framer-motion";
import CoinSvg from "../components/svg/CoinSvg";

const Home = () => {
    return (
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
            <motion.div
                style={{
                    height: "80vh",
                }}
                animate={{
                    translateY: "20px",
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >

                <CoinSvg />
            </motion.div>

            <Text
                fontSize={"6xl"}
                textAlign={"center"}
                fontWeight={"thin"}
                color={"whiteAlpha.700"}
                mt={"-20"}
            >
                Zcrypto
            </Text>
        </Box>
    );
};

export default Home;