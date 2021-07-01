var board = [
  [2, 1, 1], 
  [2, 2, 0], 
  [2, 1, 2]
]

function isWin(row){
  a = '1,1,1'
  b = '2,2,2'
  row = row.toString();
  if (row == a){
    return 1
  }
  if (row == b){
    return 2
  }else{
    return false 
  }
}

function getColumn(anArray, columnNumber) {
    return anArray.map(function(row) {
        return row[columnNumber];
    });
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
}

isSolved(board)