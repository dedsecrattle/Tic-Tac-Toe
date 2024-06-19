

const winningCombinations = [
  [0, 1, 2], // Horizontal top
  [3, 4, 5], // Horizontal middle
  [6, 7, 8], // Horizontal bottom
  [0, 3, 6], // Vertical left
  [1, 4, 7], // Vertical center
  [2, 5, 8], // Vertical right
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6]  // Diagonal top-right to bottom-left
];

export function checkWinner(board) {
  const flattenedBoard = board.flat();

  let isDraw = true;

  for (const [a, b, c] of winningCombinations) {
    if(flattenedBoard[a] === null || flattenedBoard[b] === null || flattenedBoard[c] === null){
        isDraw = false
    }
    if (
      flattenedBoard[a] &&
      flattenedBoard[a] === flattenedBoard[b] &&
      flattenedBoard[b] === flattenedBoard[c]
    ) {
      return flattenedBoard[a];
    }
  }

  return isDraw ? "draw" : null
}