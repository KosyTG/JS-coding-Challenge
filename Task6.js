// Task 6. Sort an array of strings in alph. order

function sortStringArray(stringArray) {
let newArr = [];
const sorted = stringArray.sort();
for (let i = 0; i < stringArray.length; i++) {
 newArr.push(stringArray[i].toLowerCase());
}
return newArr.sort().reverse();
 
// NB: You can combine sort and reverse to changer the order of sorting
}
 
 console.log(sortStringArray(["jan", "Feb", "march", "April", "May"]));
