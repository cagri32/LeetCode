/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelArr = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const chars = s.split(''); // Convert string to array for efficient manipulation

    let left = 0, right = s.length - 1;

    while (left < right) {
        const leftCh = chars[left];
        const rightCh = chars[right];

        if (!vowelArr.has(leftCh)) {
            left += 1;
        }

        if (!vowelArr.has(rightCh)) {
            right -= 1;
        }

        if (vowelArr.has(rightCh) && vowelArr.has(leftCh)) {
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