const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  let SAMPLE_ACTIVITY=parseFloat(sampleActivity)

if ((!SAMPLE_ACTIVITY)||(typeof sampleActivity!=='string')){
  return false
}
  let MODERN_ACTIVITY=15;
  let HALF_LIFE_PERIOD=5730;
  let ln2=Math.log(2);
let k=ln2/HALF_LIFE_PERIOD;



let t=Math.ceil((Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY))/k)

return t>0?t:false;
}

module.exports = {
  dateSample
};
