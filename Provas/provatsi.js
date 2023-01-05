// [Arrays] Implemente funções capazes de realizar as seguintes operações:
// (1.0) Dado um array, retorna true se a soma de seus elementos é ímpar, ou false caso contrário;
// (1.0) Dado um array, retorna quantos elementos abaixo da média ele possui.

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
  let soma = 0; let cont1 = 0; let cont2 = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array[i].length; j++){
        soma = soma + array[i][j]
        cont1++
      }
    }
    for(let i = 0; i < array.length; i++){
      for( let j = 0; j < array[i].length; j++){
        if((soma/cont1) < (array[i][j])){
          cont2++
        }
      }
      return cont2
    }
}

array = [[10,10,10,10],
        [10,10,10,10]]

console.log(torf(array))
console.log(low(array))

