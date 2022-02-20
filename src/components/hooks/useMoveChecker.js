import { useState } from 'react';

const getEmptyBoard = (length) => {
  const obj = {};
  for (let i = 0; i < length; i += 1) {
    obj[i] = false;
  }
  return obj;
};

const useMoveChecker = (length) => {
  const [board, setBoard] = useState(getEmptyBoard(length));

  const getIndex = (index) => board[index];

  const updateIndex = (index) => {
    setBoard((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const resetBoard = () => {
    for (const key in board) {
      board[key] = false;
    }
  };

  return { getIndex, updateIndex, resetBoard };
};

export default useMoveChecker;
