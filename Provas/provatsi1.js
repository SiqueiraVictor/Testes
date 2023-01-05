function torf(array){
  let soma = 0;
    for( let i = 0; i < array.length; i++){
      for(let j = 0; j < array[i].length; j++){
      soma = soma + array[i][j]
      }
    } if(soma % 2 != 0){
      return true
      }else{
      return false
      }
}



function low(array){
  let soma = 0; let cont = 0; let quantidade = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array[i].length; j++){
        soma = array[i][j] + soma
        cont++
      }
    }
  
  media = soma / cont

    for(let l = 0; l < array.length; l++){
      for(let m = 0; m < array[l].length; m++){
        if(array[l][m] < media){
          quantidade++
        }
      }
    }
    return quantidade
  
}

array = [[10,10,10,1],
        [10,10,10,1]]

console.log(torf(array))
console.log(low(array))
