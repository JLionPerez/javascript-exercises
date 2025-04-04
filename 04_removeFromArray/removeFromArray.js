const removeFromArray = function(arr, ...nums) {
    let copyArr = arr;
    let resultsArr = [];
    for(const num of nums) {
        for (let i = 0; i < copyArr.length; i++) {
            if (num != copyArr[i]) {
                resultsArr.push(copyArr[i])
            }
        }
    }
    return resultsArr;
};



// const index = arr.indexOf(num)
// if (num !== arr[index]) {
//     resultsArr.push(arr[index])
//     console.log(resultsArr)
//     // resultsArr.splice(index)
//     // console.log(resultsArr)
//     console.log("a: " + a++)
// }
// else {
//     resultsArr.splice(index)
//     console.log(resultsArr)
//     // resultsArr.push(arr[index])
//     // console.log(resultsArr)
//     console.log("b: " + b++)
// }

//takes in array, and rest param
// if num is in array remove element
// array.splice(index of num) --> removes values on and after the element
// save remaining array 
// if not save element into different array
// 

//takes in array, and rest param
// for each num in ...nums 
// we want to remove/ignore num
// and what's left over we want to add that to an empty array
// return that newly populated array

// console.log("answer: " + removeFromArray([1, 2, 2, 3], 2))

console.log("answer: " + removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
// module.exports = removeFromArray;
