/**
 * 📮 Dak Ghar Parcel Service - JSON & Type Conversion
 *
 * Dak Ghar (Post Office) mein parcels ka data manage karna hai.
 * Kabhi JSON mein convert karna padta hai, kabhi JSON se wapas laana
 * padta hai, kabhi ek type se doosre mein. Type conversion ka journey!
 *
 * Methods to explore: JSON.stringify(), JSON.parse(),
 *   String(), Number(), Array.from()
 *
 * Functions:
 *
 * 
 *
 *  
 *  
 *   4. convertToNumber(value)
 *      - Number() se value ko number mein convert karo
 *      - Agar result NaN hai, toh NaN hi return karo (caller handle karega)
 *      - Example: convertToNumber("42.5") => 42.5
 *      - Example: convertToNumber(true) => 1
 *      - Example: convertToNumber("hello") => NaN
 *      - Example: convertToNumber("") => 0
 *
 *   5. stringToChars(str)
 *      - Array.from() se string ko characters ki array mein convert karo
 *      - Agar str string nahi hai, return []
 *      - Example: stringToChars("Dak") => ["D", "a", "k"]
 *      - Example: stringToChars("") => []
 *
 * @example
 *   parcelToJSON({id:"P001"})            // => '{"id":"P001"}'
 *   jsonToParcel('{"id":"P001"}')        // => {id:"P001"}
 *   convertToString(42)                   // => "42"
 *   stringToChars("Dak")                  // => ["D", "a", "k"]
 */

//   1. parcelToJSON(parcel)
//  *      - JSON.stringify() se parcel object ko JSON string mein convert karo
//  *      - try-catch use karo (circular references ke liye)
//  *      - Agar parcel undefined hai ya error aaye, return ""
//  *      - Example: parcelToJSON({id:"P001", weight:2.5})
//  *                 => '{"id":"P001","weight":2.5}'
export function parcelToJSON(parcel) {
  // Your code here
  if(parcel === undefined)return "";
  try{const jsonParcel = JSON.stringify(parcel);
    return jsonParcel;
  }catch(err){return null;}
}

//  2. jsonToParcel(jsonString)
//  *      - JSON.parse() se JSON string ko wapas object mein convert karo
//  *      - try-catch use karo (invalid JSON ke liye)
//  *      - Agar jsonString string nahi hai ya invalid JSON hai, return null
//  *      - Example: jsonToParcel('{"id":"P001","weight":2.5}')
//  *                 => {id:"P001", weight:2.5}
//  *

export function jsonToParcel(jsonString) {
  // Your code here
  if(typeof jsonString !== "string" || jsonString.length === 0)return null;

  try{const parcelJson = JSON.parse(jsonString);
    return parcelJson;
}catch(err){return null;}
}

//  3. convertToString(value)
//  *      - String() se kisi bhi value ko string mein convert karo
//  *      - Example: convertToString(42) => "42"
//  *      - Example: convertToString(true) => "true"
//  *      - Example: convertToString(null) => "null"
//  *      - Example: convertToString(undefined) => "undefined"
//  *

export function convertToString(value) {
  // Your code here
  const newString = String(value);
  return newString;
  
}

export function convertToNumber(value) {
  // Your code here
if(Number.isNaN(value))return NaN;
const newNumber = Number(value)
return newNumber;
}

export function stringToChars(str) {
  // Your code here
  if(typeof str !== "string")return []
  const newArray = Array.from(str);
return newArray;
}
