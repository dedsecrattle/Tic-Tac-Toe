import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {

  function handleClick(rowIdx, colIdx) {
    setGameBoard(() => {
      const updatedBoard = [...gameBoard.map((item) => [...item])]
      updatedBoard[rowIdx][colIdx] = 'X'
      return updatedBoard
    })
  }

  const [gameBoard, setGameBoard] = useState([...initialBoard.map((item) => [...item])])
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      gap="4"
      direction="column"
      marginX='25%'
      backgroundColor='teal'
      paddingY='3rem'
    >
      {gameBoard.map((row, rowIdx) => (
        <Flex gap="4" key={rowIdx} justifyContent='center'>
          {row.map((col, colIdx) => (
            <Button     style={{
              height: "100px",
              width: "100px",
              padding: "0 24px",
            }} fontSize='30px' key={`${rowIdx}${colIdx}`} colorScheme="red" onClick={() => handleClick(rowIdx, colIdx)}>
              {gameBoard[rowIdx][colIdx] == null
                ? ""
                : gameBoard[rowIdx][colIdx]}
            </Button>
          ))}
        </Flex>
      ))}
    </Flex>
  );


}
