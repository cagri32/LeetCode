/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let currMax = candies.reduce((max, current) => {
        return current > max ? current : max;
    }, candies[0]);
    
    let result = candies.map(c =>{
        return c+extraCandies >= currMax
    })
    return result
};