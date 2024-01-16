/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // create a tree of possible strings
    // n=2 means there will be 2^2 chars
    
    const stack = []
    const result = []
    const dfs = (oCount, cCount) => {

        // base case
        if(oCount === cCount && oCount === n){
            result.push(stack.join(''));
            return;
        }
        
        // dfs recursive case
        
        // add (
        if(oCount < n){
            stack.push('(')
            dfs(oCount+1, cCount)
            stack.pop()
        }
        
        // add )
        if(cCount < oCount){
            stack.push(')')
            dfs(oCount, cCount+1)
            stack.pop()
        }
    }
    
    dfs(0,0)
    return result;
    
};