const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */




 function repeater(str, options) {
  let opt='';
  var result = '';
  if (typeof options.separator===Boolean) {options.separator+='';}
  if (typeof options.additionSeparator===Boolean){options.additionSeparator+=''}
  str+=''
  if (typeof options.addition===Boolean) {options.addition=String(options.addition)}
  if (!options.separator){options.separator="+"};
  if ((options.addition)&&(!options.additionSeparator)){options.additionSeparator="|"}
console.log (typeof options.addition)
    for (let i=0;i<(options.additionRepeatTimes||1); i++){
      if (typeof options.addition===Boolean){
      opt+=((String(options.addition)||'')+''+((i<options.additionRepeatTimes-1)?options.additionSeparator:''));
    }
  else
  opt+=((options.addition||'')+''+((i<options.additionRepeatTimes-1)?options.additionSeparator:''))}
  
  console.log (opt)
    for (let i=0;i<(options.repeatTimes||1); i++){
      result+=(str+opt+((i<options.repeatTimes-1)?options.separator:''));
      console.log (opt)
    
  }
  
 return result;
}

module.exports = {
  repeater
};
