const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str ) {
  let strArr=str.split('').reverse()
  
  let newStrArr=[];
 
 
let j=1;
  for (let i=0;i<strArr.length;i++){
  if ((strArr[i])!==strArr[i+1]){
 
    newStrArr.push(strArr[i])
  
    if(j!==1){newStrArr.push(j)}
    j=1;}
    else{j++;}

  }
  let newStr=newStrArr.reverse().join('');
  
  return(newStr)
}


module.exports = {
  encodeLine
};
