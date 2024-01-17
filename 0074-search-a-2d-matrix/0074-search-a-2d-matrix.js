/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // do 2 binary search. One for the first column, one for the row
    let rows = matrix.length, cols = matrix[0].length;
    
    // search columns
    let top = 0, bot = rows - 1;
    while (top <= bot){
        // find the middle element
        let row = Math.floor((top + bot) / 2);
        // if target is bigger than mid, update the top pointer to middle
        if(target > matrix[row][cols-1]){
            top = row + 1;
        } // if target is smaller than mid, update the bottom pointer to middle
        else if (target < matrix[row][0]){
            bot = row -1;
        } else{
            break;
        }
    }
    if (top > bot){
        return false
    }
    
    // search rows
    row = Math.floor((top + bot) / 2);
    let l = 0, r = cols - 1
    while (l <= r){
        // find the middle element
        let m = Math.floor((l + r) / 2);
        // if target is bigger than mid, update the top pointer to middle
        if(target > matrix[row][m]){
            l = m + 1;
        } // if target is smaller than mid, update the bottom pointer to middle
        else if (target < matrix[row][m]){
            r = m -1;
        } else{
            return true;
        }
    }
    return false
    
};