/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // create a tree of possible strings
    // n=2 means there will be 2^2 chars
    
    const result = []
    const dfs = (i, n, slate, oCount, cCount) => {
        // backtracking case
        if(oCount > n) return;
        if(cCount > oCount) return;
        
        // base case
        if(i === n*2){
            result.push(slate.join(''))
            return;
        }
        
        // dfs recursive case
        
        // add (
        slate.push('(')
        dfs(i+1, n, slate, oCount+1, cCount)
        slate.pop()
        
        // add )
        slate.push(')')
        dfs(i+1, n, slate, oCount, cCount+1)
        slate.pop()
    }
    
    dfs(0,n,[],0,0)
    return result;
    
};