import { Flex, Heading } from "@chakra-ui/react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div style={{backgroundColor: 'teal', height: '100vh'}}>
      <Heading
        textAlign="center"
        paddingTop='3rem'
        marginBottom="3rem"
        color="white"
      >
        Tic Tac Toe
      </Heading>
      <Flex
        direction="row"
        justifyContent="center"
        gap="15%"
        backgroundColor="teal"
        alignContent="center"
        marginX="25%"
        paddingY='2rem'
      >
        <Player name="Player 1" />
        <Player name="Player 2" />
      </Flex>
      <GameBoard></GameBoard>
    </div>
  );
}

export default App;
