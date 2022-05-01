const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator{
  constructor(arr){
    this.arr=arr;
    this.depth=0;
    this.summ=[];
  }
  calculateDepth(arr){
      let that=this;
      if (Array.isArray(arr)&&arr.length){ 
         for(let i=0;i<arr.length;i++){
            that.calculateDepth(arr[i]);
            if (i===arr.length-1){
              that.summ.push(that.depth)
              
            }
            if (arr[i].length){
              that.depth--;}
         }
         that.depth++;
         return Math.max(...that.summ)+1;
      }
      else if (Array.isArray(arr)&&!arr.length){
         that.depth++;
         return that.depth;
      };
      return that.depth;
      }
    }
  
      const depthCalc=new DepthCalculator();

module.exports = {
  DepthCalculator
};
