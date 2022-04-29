const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let nArr=(n+'').split('');
  let nArr1=[];
  
  for(let i=0;i<nArr.length;i++){
    let newArr=[];
    for (let j=0;j<nArr.length;j++){
       if (j!=i){
         newArr.push(nArr[j])
       }
    }
  let ret=parseInt(newArr.join(''))

  nArr1.push(ret)
  console.log(nArr1)

  }
    return (Math.max(...nArr1))
  }

module.exports = {
  deleteDigit
};
