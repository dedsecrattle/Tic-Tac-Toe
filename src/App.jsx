import { Box, Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { PlayerContext } from "./store/player-context";
import { useState } from "react";

function App() {
  const [isSmallScreen] = useMediaQuery("(max-width: 950px)");
  const [data, setData] = useState({
    players: [
      localStorage.getItem("p1") || "Player 1",
      localStorage.getItem("p2") || "Player 2",
    ],
    scores: [localStorage.getItem("s1") || 0, localStorage.getItem("s2") || 0],
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
    localStorage.setItem("p1", newName);
  }

  function handleO(newName) {
    setData((prevData) => {
      prevData.players[1] = newName;
      return prevData;
    });
    localStorage.setItem("p2", newName);
  }

  function handleResetScore() {
    setData((prevData) => {
      const updatedData = { ...prevData, scores: [0, 0] };
      return updatedData;
    });
  }

  function handleScoreUpdate(symbol) {
    setData((prevData) => {
      if (symbol === "X") {
        prevData.scores[0] += 1;
        localStorage.setItem("s1", prevData.scores[0]);
      } else if (symbol === "O") {
        prevData.scores[1] += 1;
        localStorage.setItem("s2", prevData.scores[1]);
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
        minHeight={isSmallScreen ? "100vh" : ""}
        marginTop={isSmallScreen ? "0" : "4.5rem"}
        borderRadius={isSmallScreen ? "0" : "20px"}
        boxShadow="10px 10px 5px lightblue"
        gap="1.5rem"
      >
        <Heading textAlign="center" paddingTop="2rem" color="white" size="3xl">
          Tic Tac Toe
        </Heading>
        <Button color="teal" onClick={handleResetScore}>
          Reset Scores
        </Button>
        <Flex
          direction="row"
          justifyContent="center"
          gap={isSmallScreen ? "2rem" : "5rem"}
          alignItems="center"
          paddingY="1rem"
          paddingX="1rem"
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
