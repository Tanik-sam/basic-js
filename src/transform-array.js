const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let arrNew=[];
  let i=0;
  if (!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  while (i<arr.length){
if (typeof arr[i]==='number'){ 
  
  arrNew.push(arr[i])
  i++;
}
else{
   switch (arr[i]){
   case '--discard-next':
      i+=2;
      break;
   case '--discard-prev':
      arrNew.pop()
      i++;
      break;
  case '--double-next':
      arrNew.push(arr[i+1]);
      i++;
      break;
  case '--double-prev':
      arrNew.push(arr[i-1]);
      i++;
      break;
}
}
  }
return(arrNew)}
module.exports = {
  transform
};
