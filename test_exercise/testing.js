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


