/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0, right = s.length - 1;
    const chars = s.split(''); // Convert string to array for efficient manipulation
    const vowelArr = new Set(['a','e','i','o','u','A','E','I','O','U']);

    while (left < right) {
        if (!vowelArr.has(chars[left])) {left++}
        else if (!vowelArr.has(chars[right])) {right--}
        else {
            // Swap vowels in the array directly
            [chars[left], chars[right]] = [chars[right], chars[left]];
            // Move the pointers after swapping
            left += 1;
            right -= 1;
        }
    }

    // Join the array of characters to form the final result
    return chars.join('');
        
};