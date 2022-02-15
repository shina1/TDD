// we want to write a function called only strings
// input: array
// output: elements in the array that are strings



describe("onlyStrings", function(){
    it("returns an array", function(){
        expect(onlyStrings(["a","b","c"])).toEqual(["a","b","c"])
    })
    it("removes non-string primitive from an array", function(){
        expect(onlyStrings([1,"hi", null, "cool",undefined,"woah", false,"ok"])).toEqual(["hi","cool","woah","ok"])
    })
    it("removes refrence type from an array", function(){
        expect(onlyStrings([{},"a",[],"b",function(){},"c"])).toEqual(["a","b","c"])
    })
})

// green test case 
// function onlyStrings(arr){
//     let str = []
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "string") str.push(arr[i])
//     }
//     return str
// }

// Red test case
function onlyStrings(arr){
    arr.filter(el => {
        return typeof el === "string"
    })
}