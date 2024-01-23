/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // while loop will start from length 3
    let possible = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0 // check if current spot is empty
           && (i == 0 || flowerbed[i-1] === 0) // check if previous spot is empty or null
           && (i === flowerbed.length-1 || flowerbed[i+1] === 0) // check if previous spot is empty or null
          ){ // then put a flower, 
            possible++; 
            i++
        } 
        if( possible >= n) return true
    }
    
    return false;
};