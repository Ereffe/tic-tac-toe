const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function Gameboard() {
  return (
    <ol id="game-board">
      {initalGameBoard.map((row, rowIndex) => {
        <li key={rowIndex}></li>;
      })}
    </ol>
  );
}
