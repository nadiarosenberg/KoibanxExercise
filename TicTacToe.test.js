const {isSolved} = require('./TicTacToe');

test('The board is not yet finished', () => {
  board = [
    [0,1,1],
    [1,2,2],
    [0,0,0]
  ]
  expect(isSolved(board)).toBe(-1);
});

test('X wins', () => {
  board = [
    [1,1,1],
    [1,0,2],
    [2,2,0]
  ]
  expect(isSolved(board)).toBe(1);
});

test('O wins', () => {
  board = [
    [2,1,1],
    [1,2,2],
    [2,1,2]
  ]
  expect(isSolved(board)).toBe(2);
});

test('Cats game', () => {
  board = [
    [2,1,0],
    [1,1,2],
    [1,2,0]
  ]
  expect(isSolved(board)).toBe(0);
});