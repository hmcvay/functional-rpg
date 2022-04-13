

// const itemBonus = (prop1, prop2, prop3) => {
//   return (value) => {
//     return (obj) => ({
//       ...obj,
//       [prop1] : (obj[prop1] || 0) + value,
//       [prop2] : (obj[prop2] || 0) + value,
//       [prop3] : (obj[prop3] || 0) + value,
//     })
//   }
// } 
// const powerSword = changeState("strength", "mana", "charisma")(15); 
// let warrior = {} 
// powerSword(warrior);
//  result: {strength: 15, mana: 15, charisma: 15}


// const changeAtts = (prop1, prop2, prop3) => {
//   return (value1, value2, value3) => {
//     return (obj) => ({
//       ...obj,
//       [prop1] : (obj[prop1] || 0) + value1,
//       [prop2] : (obj[prop2] || 0) + value2,
//       [prop3] : (obj[prop3] || 0) + value3,
//     })
//   }
// }  
// const wandOfDex = changeAtts("mana", "intelligence", "dexterity")(5, 10, 15);
// let cleric = {};
// wandOfDex(cleric);
//   result : {mana: 5, intelligence: 10, dexterity: 15}


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
};

const statRoll = function() {
  const dice1 = Math.floor(Math.random() * 6 ) + 1; 
  const dice2 = Math.floor(Math.random() * 6 ) + 1; 
  const dice3 = Math.floor(Math.random() * 6 ) + 1; 
  const dice4 = Math.floor(Math.random() * 6 ) + 1; 
  const stats = dice1 + dice2 + dice3 + dice4
  return stats
};


const baseCharStats = assignStats("intel", "dex", "str", "char", "wis", "cons")(statRoll(), statRoll(), statRoll(), statRoll(), statRoll(), statRoll());
let wizard = {};
baseCharStats(wizard);


// This function stores our state.

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

const rangerState = () => {
  let ranger = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(ranger);
    ranger = {...newState};
    return newState;
  };
};


const rangerControl = rangerState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     });
//   };
// };

// We create four functions using our function factory. We could easily create many more.

// const feed = changeState("soil")(1);
// const blueFood = changeState("soil")(5); 
// const redFood = changeState("soil")(8);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);


$('#roll1').click(function() {
  const getStats = rangerControl(baseCharStats);
  $('#char1').text(`Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
});

// $('#feedred').click(function() {
//   const changeState = stateControl(redFood);
//   $('#soil-value').text(`Soil: ${changeState.soil}`);
// });

// $('#water').click(function() {
//   const newState = stateControl(hydrate);
//   $('#water-value').text(`Water: ${newState.water}`);
// });

// $('#super-water').click(function() {
//   const newState = stateControl(superWater);
//   $('#water-value').text(`Water: ${newState.water}`);
// });
// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

$('#show-state').click(function() {
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = rangerControl();
  $('#output').text(`These are your current stats: ${currentState.intel}, ${currentState.dex}, ${currentState.str} ,${currentState.wis} ,${currentState.char} ,${currentState.cons}`);
});

// Classes:   const currentState = rangerControl();

// Ranger
// Sorcerer
// Rogue