'use strict'
var board = [
  [1, 2, 2], 
  [1, 0, 1], 
  [1, 2, 1]
];

function isWin(array){
  let a = '1,1,1';
  let b = '2,2,2';
  array = array.toString();
  if (array == a){
    return 1;
  }
  if (array == b){
    return 2;
  }else{
    return false; 
  }
}

function getColumn(array, columnNumber) {
    return array.map(function(row) {
        return row[columnNumber];
    });
}

function getDiagonal(array){
  let i = 0;
  let j = 0;
  var diagonal = [];
  for (i; i<array.length; i++){
    diagonal.push(array[i][j]);
    j++;
  }
  return diagonal; 
}

function isCatsGame(array){
  if (array.includes(1) & array.includes(2)){
    return 0;
  }else{
    return -1;
  }
}

function isSolved(board){
  var i = 0;
  for (i; i<board.length; i++){
    let result = isWin(board[i]);
    if (result == 1 | result == 2){
      return result;
    }
  }
  i = 0;
  for (i; i<board.length; i++){
    let column = (getColumn(board, i));
    let result = isWin(column);
    if (result == 1 | result == 2){
      return result;
    }
  }
  var mainDiagonal = getDiagonal(board);
  var result = isWin(mainDiagonal);
  if (result == 1 | result == 2){
    return result;
  }
  board = board.reverse();
  var secondaryDiagonal = getDiagonal(board);
  result = isWin(secondaryDiagonal);
  if (result == 1 | result == 2){
    return result;
  }
  i = 0;
  result = [];
  for (i; i<board.length; i++){
    result.push(isCatsGame(board[i]));
  }
  if (result.includes(-1)){
    return -1;
  }else{
    return 0;
  }
}

console.log(isSolved(board));

module.exports = {isSolved}