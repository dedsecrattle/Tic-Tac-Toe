import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [isSmallScreen] = useMediaQuery("(max-width: 950px)");
  return (
    <Box
      bgColor="teal"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width={isSmallScreen ? "100%" : "50%"}
      margin="auto"
      height={isSmallScreen ? "100vh" : ""}
      marginTop={isSmallScreen ? "0" : "6rem"}
      borderRadius={isSmallScreen ? "0" : "20px"}
      boxShadow="10px 10px 5px lightblue"
      gap="3rem"
    >
      <Heading textAlign="center" paddingTop="3rem" color="white" size="3xl">
        Tic Tac Toe
      </Heading>
      <Flex
        direction="row"
        justifyContent="center"
        gap={isSmallScreen ? "2rem" : "5rem"}
        alignContent="center"
        paddingY="1rem"
      >
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </Flex>
      <GameBoard />
    </Box>
  );
}

export default App;
