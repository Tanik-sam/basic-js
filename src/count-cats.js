const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let summ=0;
  for (let i=0;i<matrix.length; i++){
    if (Array.isArray(matrix[i])){
      let n=matrix[i].length
         for (let j=0;j<n;j++){
              if (matrix[i][j]==='^^'){
                summ++;
              }
         }
    }  
    else {
      if(matrix[i][j]==='^^'){
        summ++;
      }
    }
  }
    return summ;
  }

module.exports = {
  countCats
};
