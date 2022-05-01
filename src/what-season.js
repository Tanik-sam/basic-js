const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 function getSeason(date) {
  let season;
  let seasonsStr=['winter','Winter','WINTER','summer','Summer','SUMMER','autumn','Autumn','AUTUMN','spring','Spring','SPRING','fall','Fall','FALL']
  if (!date){
  return ('Unable to determine the time of year!');}
  for (let i=0;i<seasonsStr.length;i++){
    if (date===seasonsStr[i]){return date}
  }
  if (!Date.parse(date)){ 
    let newDate= date.toDateString();
    if (newDate.match(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/)){
      console.log(newDate)}
    throw new Error ("Invalid date!")
}
let month = date.getMonth()
switch(month) {
    case 12:
    case 1:
    case 2:
        season = 'winter';
    break;
    case 3:
    case 4:
    case 5:
        season = 'spring';
    break;
    case 6:
    case 7:
    case 8:
        season = 'summer';
    break;
    case 9:
    case 10:
    case 11:
        season = 'autumn';
    break;
    default: season = 'Unable to determine the time of year!';
}

}

module.exports = {
  getSeason
};
