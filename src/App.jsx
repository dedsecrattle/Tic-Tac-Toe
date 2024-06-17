import { Flex, Heading } from "@chakra-ui/react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <Heading
        textAlign="center"
        marginTop="10rem"
        marginBottom="10rem"
        color="brown"
      >
        Tic Tac Toe
      </Heading>
      <Flex
        direction="row"
        justifyContent="center"
        gap="15%"
        backgroundColor="ghostwhite"
        alignContent="center"
        marginX="25%"
      >
        <Player name="Player 1" />
        <Player name="Player 2" />
      </Flex>
      <GameBoard></GameBoard>
    </>
  );
}

export default App;
