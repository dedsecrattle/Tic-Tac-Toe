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
      const updatedBoard = [...gameBoard.map((item) => [...item])];
      updatedBoard[rowIdx][colIdx] = "X";
      return updatedBoard;
    });
  }

  const [gameBoard, setGameBoard] = useState([
    ...initialBoard.map((item) => [...item]),
  ]);
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      gap="4"
      direction="column"
      paddingY="3rem"
    >
      {gameBoard.map((row, rowIdx) => (
        <Flex gap="4" key={rowIdx} justifyContent="center">
          {row.map((col, colIdx) => (
            <Button
              style={{
                height: "100px",
                width: "100px",
                padding: "0 24px",
              }}
              fontSize="35px"
              fontWeight="bold"
              color="teal"
              fontFamily="fantasy"
              boxShadow="5px 5px 3px #3d3d3d"
              bgColor="whitesmoke"
              key={`${rowIdx}${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx)}
            >
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
