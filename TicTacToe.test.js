const {isSolved} = require('./TicTacToe');

test('The board is not yet finished', () => {
  board = [
    [0,1,1],
    [1,2,2],
    [0,0,0]
  ]
  expect(isSolved(board)).toBe(-1);
});

test('X wins, horizontal win', () => {
  board = [
    [1,1,1],
    [1,0,2],
    [2,2,0]
  ]
  expect(isSolved(board)).toBe(1);
});

test('X wins, vertical win', () => {
  board = [
    [2,1,0],
    [1,1,2],
    [2,1,0]
  ]
  expect(isSolved(board)).toBe(1);
});

test('X wins, main diagonal win', () => {
  board = [
    [1,1,0],
    [2,1,2],
    [2,1,1]
  ]
  expect(isSolved(board)).toBe(1);
});

test('X wins, secondary diagonal win', () => {
  board = [
    [2,0,1],
    [2,1,2],
    [1,2,1]
  ]
  expect(isSolved(board)).toBe(1);
});

test('O wins, horizontal win', () => {
  board = [
    [2,2,2],
    [1,2,1],
    [1,1,0]
  ]
  expect(isSolved(board)).toBe(2);
});

test('O wins, vertical win', () => {
  board = [
    [1,1,2],
    [1,2,2],
    [0,1,2]
  ]
  expect(isSolved(board)).toBe(2);
});

test('O wins, main diagonal win', () => {
  board = [
    [2,1,1],
    [1,2,2],
    [2,1,2]
  ]
  expect(isSolved(board)).toBe(2);
});

test('O wins, secondary diagonal win', () => {
  board = [
    [1,1,2],
    [1,2,2],
    [2,0,1]
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