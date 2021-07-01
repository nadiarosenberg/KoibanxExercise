var broad = [
  [1, 1, 1], 
  [0, 0, 0], 
  [2, 2, 2]
]

function isHorizontalWin(row){
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

function isSolved(broad){
  i = 0
  for (i; i<3; i++){
    result = isHorizontalWin(broad[i])
    if (result == 1 | result == 2){
      return result
    }
  }
}

isSolved(broad)