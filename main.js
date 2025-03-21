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
function caesarCipher (){

};

function analyzeArray (){

};

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};