import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { checkWinner } from "../utils/utils";
import GameOverModal from "./GameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  function handleClick(rowIdx, colIdx) {
    const updatedBoard = [...gameBoard.map((item) => [...item])];
    updatedBoard[rowIdx][colIdx] = isX ? "X" : "O";
    setGameBoard(() => {
      setIsX(() => !isX);
      return updatedBoard;
    });

    setWinner(() => {
      const winSymbol = checkWinner(updatedBoard);
      return winSymbol;
    });
  }

  function handleClose() {
    setGameBoard(() => [...initialBoard.map((item) => [...item])]);
    setWinner(null);
    setIsX(true);
  }

  const [gameBoard, setGameBoard] = useState([
    ...initialBoard.map((item) => [...item]),
  ]);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);

  const isWin = winner === "X" || winner === "O";
  const isDraw = winner === "draw";

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
              fontFamily="sans-serif"
              boxShadow="5px 5px 3px #3d3d3d"
              bgColor="whitesmoke"
              key={`${rowIdx}${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx)}
              isDisabled={gameBoard[rowIdx][colIdx] != null}
            >
              {gameBoard[rowIdx][colIdx] == null
                ? ""
                : gameBoard[rowIdx][colIdx]}
            </Button>
          ))}
        </Flex>
      ))}
      <GameOverModal
        isOpen={isWin || isDraw}
        onClose={handleClose}
        winner={winner}
      />
    </Flex>
  );
}
