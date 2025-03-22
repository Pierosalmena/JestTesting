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

function caesarCipher (string, shift){
    let newString = "";
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
      ];


    for (let i = 0; i < string.length; i++){
        let letterIndex = alphabet.indexOf(string[i].toLowerCase());
        
        if (letterIndex == -1){
            newString += string[i];
        } else {

        const shiftIndex = (shift + letterIndex) % 26
        const shiftedChar = alphabet[shiftIndex];
        
        if (string[i] === string[i].toUpperCase()) {
            newString += shiftedChar.toUpperCase();
          } else {
            newString += shiftedChar;
          }
        }
        
    }
    return newString
};

function analyzeArray (array){
    const sortedArray = [...array].sort((a,b) => a-b);
    const length = sortedArray.length;
    const min = sortedArray[0];
    const max = sortedArray[length - 1];
    const average = max / 2

    // function median (){
    //     const middleIndex = Math.round(length / 2)
    //     return array[middleIndex]
    // }
    // const medianValue = median()
return {average, min, max, length}
};

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};