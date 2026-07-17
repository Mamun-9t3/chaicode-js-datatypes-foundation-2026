/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *  
 * 
 * 
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */

//  1. createPaanOrder(basePaan, customizations)
//  *      - Object.assign({}, basePaan, customizations) se NEW order object banao
//  *      - Original basePaan ko mutate MAT karo!
//  *      - Agar basePaan object nahi hai ya null hai, return {}
//  *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
//  *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
//  *                 => {type:"meetha", price:50, extra:"gulkand"}
//  *

export function createPaanOrder(basePaan, customizations) {
  // Your code here
  if(typeof basePaan !== "object" || basePaan === null || Array.isArray(basePaan))return {};
  const baseClone = {...basePaan}
  if(typeof customizations !== "object" || customizations === null || Array.isArray(customizations))return baseClone;
  
  const Paan = Object.assign({}, basePaan, customizations)//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
  return Paan;

}

//   2. freezeMenu(menu)
//  *      - Object.freeze() se menu ko immutable banao
//  *      - Return: frozen object
//  *      - Agar menu object nahi hai ya null hai, return {}
//  *      - Frozen ke baad koi modification kaam nahi karegi!
//  *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
//  *

export function freezeMenu(menu) {
  // Your code here
if(typeof menu !== "object" || menu === null || Array.isArray(menu))return {};

Object.freeze(menu);
menu : {"fish", "appple", "daal"}
return menu;

}

//   3. updatePrices(menu, increase)
//  *      - Object.entries() se [key, value] pairs lo
//  *      - Har price mein increase add karo
//  *      - Object.fromEntries() se wapas object banao
//  *      - Return: NEW object (original mat badlo!)
//  *      - Agar menu object nahi hai ya increase number nahi hai, return {}
//  *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
//  *


export function updatePrices(menu, increase) {
  // Your code here
  if(typeof menu !== "object" || menu === null || Array.isArray(menu))return {};
  if(Number.isNaN(increase) || !Number.isInteger(increase))return {};

  const keyValue = Object.entries(menu);
  const values = keyValue.map(([keys, values]) => { 
   
    return [keys, values + increase];

  })
  const increasedPrice = Object.fromEntries(values)
  return increasedPrice;
}

// *   4. mergeDailySpecials(regularMenu, specialsMenu)
//  *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
//  *      - specialsMenu ki values override karengi agar same key ho
//  *      - Return: NEW merged object
//  *      - Agar koi bhi object nahi hai, usse empty {} maan lo
//  *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
//  *                 => {meetha:40, chocolate:60}
//  *

export function mergeDailySpecials(regularMenu, specialsMenu) {
  // Your code here
  const safeRegular = ((typeof regularMenu === "object" && regularMenu !== null && !Array.isArray(regularMenu)  ) ? regularMenu : {});
  const safeRegular2 = ((typeof specialsMenu === "object" && specialsMenu !== null && !Array.isArray(specialsMenu) ) ? specialsMenu : {});
  
  const clone = {...safeRegular, ...safeRegular2}    
  return clone;
}
