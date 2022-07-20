// function specialWord(word = ""){
//     if(word.length === 0) return null;
//     let firstChar = word.toLowerCase().charAt(0).toUpperCase();
//     let othersChar = word.slice(1).toLowerCase();
//     return `${firstChar}${othersChar}`   
// }
// console.log(specialWord("KHOa"))

// function compare(a = 0, b = 0){
//     if(typeof a !== "number" || typeof b !== "number" ){ 
//         console.log("undefined")
//         return 0
    
//     }
//     return Math.max(a, b)
// }

// function callBackMain(a, b, callBack){
//     let max = compare(a, b)
//     callBack(max)
// }

// function printMaxValue(number){
//     console.log(`Value max is: ${number}`)
// }
// console.log(callBackMain(100, 9999, printMaxValue))

