var expect = chai.expect;

// WRITE YOUR TESTS HERE!


// Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive

describe("replaceWith", function(){
    it("is case sensitive", function(){
        expect(replaceWith("WALE", "A", "N")).equal("WNLE")
        expect(replaceWith("WALE", "N")).equal("WALE")
        expect(replaceWith("WALE", "A")).equal("WLE")
    })
})

// digital ocean


//  The function to be tested.
function replaceWith(string, replaceChar = undefined, replaceWithChar = ''){
    // turn the string into an array so as to be able to loop through it
    const strArr = [...string];
// itterate through the array 
    for(let i = 0; i < strArr.length; i++){
        // check if any of the element of the array is same as the character to replace.
        if(strArr[i] == replaceChar){
            // if the condition pass, replace the character with another character
            strArr[i] = replaceWithChar
        }
    }
    // turn the array of strings back into a single string with the replacement 
    return strArr.join('') 
}


replaceWith("awesome", "E", "z") // awzsomz

