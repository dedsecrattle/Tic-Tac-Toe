import { Button, Flex } from "@chakra-ui/react";

const initialBoard = [
  ["X", null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      marginTop="5rem"
      gap="4"
    >
      {initialBoard.map((row, rowIdx) => (
        <Flex direction="column" gap="4" key={rowIdx}>
          {row.map((col, colIdx) => (
            <Button size="lg" key={`${rowIdx}${colIdx}`}>
              {initialBoard[rowIdx][colIdx] == null
                ? ""
                : initialBoard[rowIdx][colIdx]}
            </Button>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
