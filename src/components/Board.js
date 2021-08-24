import Button from "./Button";
import { useState } from "react";
import calculateWinner from "../helpers";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [squareValue, setSquareValue] = useState("X");
  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Next is ${squareValue}`;
  const buttonHandleClick = (clickedIndex) => {
    if (board[clickedIndex] || winner) {
      return;
    }
    setBoard((previousState) => {
      return previousState.map((square, index) => {
        if (index === clickedIndex && !square) {
          return squareValue;
        } else {
          return square;
        }
      });
    });
    setSquareValue((previousState) => {
      return previousState === "X" ? "O" : "X";
    });
  };

  return (
    <div className="board">
      <h2 className="board-message">{message}</h2>

      <div className="board-row">
        <Button value={board[0]} onClick={buttonHandleClick} index={0} />
        <Button value={board[1]} onClick={buttonHandleClick} index={1} />
        <Button value={board[2]} onClick={buttonHandleClick} index={2} />
      </div>
      <div className="board-row">
        <Button value={board[3]} onClick={buttonHandleClick} index={3} />
        <Button value={board[4]} onClick={buttonHandleClick} index={4} />
        <Button value={board[5]} onClick={buttonHandleClick} index={5} />
      </div>
      <div className="board-row">
        <Button value={board[6]} onClick={buttonHandleClick} index={6} />
        <Button value={board[7]} onClick={buttonHandleClick} index={7} />
        <Button value={board[8]} onClick={buttonHandleClick} index={8} />
      </div>
    </div>
  );
}

export default Board;
