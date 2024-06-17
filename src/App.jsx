import { Flex, Heading } from "@chakra-ui/react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div style={{backgroundColor: 'teal', display: Flex, justifyContent:"center", alignContent:'center', paddingRight:'1rem', paddingLeft:'1rem', margin: 'auto', marginTop: '5rem', borderRadius: '25px', boxShadow: '20px 20px 10px lightblue', paddingBottom:'2rem', maxWidth:'50%'}}>
      <Heading
        textAlign="center"
        paddingTop='3rem'
        color="white"
        size='3xl'
      >
        Tic Tac Toe
      </Heading>
      <Flex
        direction="row"
        justifyContent="center"
        gap="5rem"
        backgroundColor="teal"
        alignContent="center"
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
