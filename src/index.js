












const changeState = (prop) => {
  return (value) => {
    return (obj) => ({
      ...obj,
      [prop] : (obj[prop] || 0) + value
    })
  }
} 

const orb = changeState("power")(50); 

// let wizard = { power: 0, fortitude: 0, wisdom: 0 } 
orb(wizard);
  result: {power: 50, fortitude: 0, wisdom: 0}
 
 
  const changeState2 = (prop1, prop2, prop3) => {
  return (value) => {
    return (obj) => ({
      ...obj,
      [prop1] : (obj[prop1] || 0) + value,
      [prop2] : (obj[prop2] || 0) + value,
      [prop3] : (obj[prop3] || 0) + value,
    })
  }
} 
const powerSword = changeState("strength", "mana", "charisma")(15); 
let warrior = {} 
powerSword(warrior);
 result {strength: 15, mana: 15, charisma: 15}


const changeAtts = (prop1, prop2, prop3) => {
  return (value1, value2, value3) => {
    return (obj) => ({
      ...obj,
      [prop1] : (obj[prop1] || 0) + value1,
      [prop2] : (obj[prop2] || 0) + value2,
      [prop3] : (obj[prop3] || 0) + value3,
    })
  }
}  
const wandOfDex = changeAtts("mana", "intelligence", "dexterity")(5, 10, 15);
let cleric = {};
wandOfDex(cleric);
{mana: 5, intelligence: 10, dexterity: 15}


const assignStats = (intel, dex, str, char, wis, cons) => {
  return (val1, val2, val3, val4, val5, val6) => {
    return (obj) => ({
      ...obj,
      [intel] : (obj[intel] || 0) + val1,
      [dex] : (obj[dex] || 0) + val2,
      [str] : (obj[str] || 0) + val3,
      [char] : (obj[char] || 0) + val4,
      [wis] : (obj[wis] || 0) + val5,
      [cons] : (obj[cons] || 0) + val6,
    })
  }
} 

statRoll = function() {
  dice1 = Math.floor(Math.random() * 6 ) + 1; 
  dice2 = Math.floor(Math.random() * 6 ) + 1; 
  dice3 = Math.floor(Math.random() * 6 ) + 1; 
  dice4 = Math.floor(Math.random() * 6 ) + 1; 
  stats = dice1 + dice2 + dice3 + dice4
  return stats
}


const baseCharStats = assignStats("intel", "dex", "str", "char", "wis", "cons")(statRoll(), statRoll(), statRoll(), statRoll(), statRoll(), statRoll());
let wizard = {};
baseWiz(wizard);