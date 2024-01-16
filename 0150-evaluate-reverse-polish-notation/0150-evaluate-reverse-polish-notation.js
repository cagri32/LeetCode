/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // create a stack
    const stack = []
    const operators = {
        '+': (num1,num2)=> num1+num2,
        '-': (num1,num2)=> num1-num2,
        '*': (num1,num2)=> num1*num2,
        '/': (num1,num2)=> Math.trunc(num1/num2),
    }
    // iterate over tokens
    for(let token of tokens){
        // if the token is in operator dict, perform the operation
        if(operators[token]){
            // pop the last 2 numbers in the stack
            let num2 = stack.pop()
            let num1 = stack.pop()
            // do the operation and push the result into the stack
            stack.push(operators[token](num1,num2))
        } else { // if the token is not operand but a number
            // push into stack making it an integer
            stack.push(parseInt(token))
        }
    }
    return stack.pop()
};