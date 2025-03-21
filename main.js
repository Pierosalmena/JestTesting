function capitalize (letter){
const firstLetterCap = letter[0].toUpperCase() + letter.slice(1)
return firstLetterCap
};
function reverseString (string){
let newString = "";

for(let i = string.length - 1; i >= 0; i--){
    newString += string[i]
}
return newString;
};

const calculator = {
    add: function (a,b) {
        return a + b;
    },
    subtract: function (a,b) {
        return a - b;
    },
    divide: function (a,b) {
        return a / b;
    }, 
    multiply: function (a,b) {
        return a * b;
    }

};
function caesarCipher (string, num){
    let newString = "";
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
      ];
    for (let i = 0; i < string.length; i++){
        let letter = alphabet.indexOf(string[i]);
        let newIndex = letter + num;
        newString += alphabet[newIndex];
        
    }
    return newString
};

function analyzeArray (){

};

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};