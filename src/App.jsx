import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { PlayerContext } from "./store/player-context";
import { useState } from "react";

function App() {
  const [isSmallScreen] = useMediaQuery("(max-width: 950px)");
  const [data, setData] = useState({
    players: ["Player 1", "Player 2"],
    scores: [0, 0],
  });

  function onClose() {
    setData((prevData) => {
      const updatedData = {
        ...prevData,
      };
      return updatedData;
    });
  }

  function handleX(newName) {
    setData((prevData) => {
      prevData.players[0] = newName;
      return prevData;
    });
  }

  function handleO(newName) {
    setData((prevData) => {
      prevData.players[1] = newName;
      return prevData;
    });
  }

  function handleScoreUpdate(symbol) {
    setData((prevData) => {
      if (symbol === "X") {
        prevData.scores[0] += 1;
      } else if (symbol === "O") {
        prevData.scores[1] += 1;
      }
      return prevData;
    });
  }

  const value = {
    players: data.players,
    scores: data.scores,
    updateX: handleX,
    updateO: handleO,
    updateScore: handleScoreUpdate,
    onClose: onClose,
  };

  return (
    <PlayerContext.Provider value={value}>
      <Box
        bgColor="teal"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width={isSmallScreen ? "100%" : "50%"}
        margin="auto"
        height={isSmallScreen ? "100%" : ""}
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
          <Player name={data.players[0]} symbol="X" />
          <Player name={data.players[1]} symbol="O" />
        </Flex>
        <GameBoard />
      </Box>
    </PlayerContext.Provider>
  );
}

export default App;
