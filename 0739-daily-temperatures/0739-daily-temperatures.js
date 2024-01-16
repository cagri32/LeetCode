/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
}    

// I DONT KNOW WHY THIS DIDNT WORK WITH AN ARRAY [99,99,99...100]. IT KINDA BECAME N^2
//     // create a new array
//     // sliding window
//     let left = 0;
//     let right = 0;
//     let result = []
    
//     while (left < temperatures.length){
//         if(right === temperatures.length){
//             result.push(0);
//             left += 1;
//             right = left;
//         } else if(temperatures[left] < temperatures[right]){
//             result.push(right - left);
//             left += 1;
//             right = left;
//         } else {
//             right += 1;
//         } 
//     }
//     return result
        
// };