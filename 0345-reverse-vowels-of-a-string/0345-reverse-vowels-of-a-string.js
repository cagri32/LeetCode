/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let result = s;
    let left = 0, right = s.length
    let vowelArr = ['a','e','i','o','u','A','E','I','O','U']
    
    while (left < right){
        let leftCh = s.charAt(left), rightCh = s.charAt(right);
        if(!vowelArr.includes(leftCh)){
            left += 1
        }
        
        if(!vowelArr.includes(rightCh)){
            right -= 1
        }
        if (vowelArr.includes(rightCh) && vowelArr.includes(leftCh)){
            result = result.substring(0, left) + rightCh + result.substring(left+1,right)+ leftCh + result.substring(right + 1);
            // Move the pointers after swapping
            left += 1;
            right -= 1;
        }
    }
    return result;
        
};