const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain:'',
  chainArr:[],
  getLength() {
  return this.chainArr.length
  },
  addLink(value) {
    
    if (value===undefined) {value=''}
    let link=`( ${value+''} )~~`;
    this.chainArr.push(link);
    this.chain=this.chainArr.join('');
    return this;
  },
  removeLink(position) {
    if ((position>this.chainArr.length)||(position<=0)||(typeof position!=='number'))
    
    {this.chainArr=[]; throw new Error ('You can\'t remove incorrect link!')}
   this.chainArr.splice(position-1,1)
   this.chain=this.chainArr.join('');
  return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    this.chain=this.chainArr.join('');
    return this;
 },
finishChain() {
  const str2 = this.chain.slice(0, -2);
  this.chain=str2
  this.chainArr=[];
  return this.chain
 }
};


module.exports = {
  chainMaker
};
