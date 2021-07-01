var board = [
  [1, 2, 1], 
  [2, 1, 0], 
  [1, 2, 1]
]

function isWin(array){
  a = '1,1,1'
  b = '2,2,2'
  array = array.toString();
  if (array == a){
    return 1
  }
  if (array == b){
    return 2
  }else{
    return false 
  }
}

function getColumn(array, columnNumber) {
    return array.map(function(row) {
        return row[columnNumber];
    });
}

function getDiagonal(array){
  i = 0
  j = 0
  diagonal = []
  for (i; i<array.length; i++){
    diagonal.push(array[i][j])
    j++
  }
  return diagonal 
}

function isSolved(board){
  i = 0
  for (i; i<board.length; i++){
    result = isWin(board[i])
    if (result == 1 | result == 2){
      return result
    }
  }
  i = 0
  for (i; i<board.length; i++){
    column = (getColumn(board, i))
    result = isWin(column)
    if (result == 1 | result == 2){
      return result
    }
  }
  mainDiagonal = getDiagonal(board)
  result = isWin(mainDiagonal)
  if (result == 1 | result == 2){
    return result
  }
  board = board.reverse()
  secondaryDiagonal = getDiagonal(board)
  result = isWin(secondaryDiagonal)
  if (result == 1 | result == 2){
    return result
  }
}

isSolved(board)