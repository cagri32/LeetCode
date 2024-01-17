/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ""
    
    let remainderStr = ""
    if (word1.length < word2.length){
        remainderStr = word2.substring(word1.length,word2.length)
    }else if (word2.length < word1.length){
        remainderStr = word1.substring(word2.length,word1.length)
    }
    for (let i = 0; i < Math.min(word1.length, word2.length); i++){
        result += word1.charAt(i);
        result += word2.charAt(i);
    }
    result += remainderStr;
    return result;
};