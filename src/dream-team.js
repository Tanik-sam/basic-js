const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let members1=[];
  if (!members) {return false};
  if (!Array.isArray(members)){return false};
  for (let i=0;i<members.length;i++){
    if(typeof members[i]==='string'){
      members1[i]=members[i].toUpperCase().trim().slice(0,1);
      console.log(members1[i])
    }
  }
  members1.sort();
  let dreamTeam=members1.join('');
  if (!dreamTeam) {return false};
  return dreamTeam;
  }

module.exports = {
  createDreamTeam
};
