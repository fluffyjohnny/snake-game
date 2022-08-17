import { useState } from "react";

import "./Board.css";

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    const node = new LinkedListNode(value);
    this.head = node;
    this.tail = node;
  }
}

const Direction = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

const BOARD_SIZE = 10;

const getStartingSnakeLLValue = board => {
  const rowSize = board.length; 
  const colSize = board[0].length;
  const startingRow = Math.round(rowSize / 3);
  const startingCol = Math.round(colSize / 3);
  const startingCell = board[startingRow][startingCol];
  return {
    row: startingRow,
    col: startingCol,
    cell: startingCell,
  }
}

const Board = () => {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE));
  const [snakeCells, setSnakeCells] = useState(new Set([44]));
  const [snake, setSnake] = useState(new SinglyLinkedList(44));
  const [direction, setDirection] = useState(Direction.RIGHT);

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((cell, cellIdx) => (
            <div
              key={cellIdx}
              className={`cell ${snakeCells.has(cell) ? "snake-cell" : ""}`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const createBoard = (boardSize) => {
  let counter = 1;
  const board = [];
  for (let row = 0; row < boardSize; row++) {
    const currentRow = [];
    for (let col = 0; col < boardSize; col++) {
      currentRow.push(counter++);
    }
    board.push(currentRow);
  }
  return board;
};

const getDirectionFromKey = (key) => {
  if (key === "ArrowUp") return Direction.UP;
  if (key === "ArrowDown") return Direction.DOWN;
  if (key === "ArrowLeft") return Direction.LEFT;
  if (key === "ArrowRight") return Direction.RIGHT;
  return "";
};

export default Board;
