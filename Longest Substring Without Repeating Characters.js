/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
//     multiple pointers problem
    if (s === '') {
        return 0;
    }
    let max = 1;
    let left = 0;
    let right = 1;
    let length = 1;
    let chars = { [s[0]]: left };
    while (right < s.length) {
        if (s[right] in chars) {
            left++;
            chars = { [s[left]]: left };
            right = left + 1;
            length = 1;
        } else {
        // if (!(s[right] in chars)) {
            chars[s[right]] = right;
            right++;
            length++;
            max = Math.max(max, length);
        }
    }   
    return max;
//     keep track of the characters using a DS
//     Loop through s, move right pointer forward and add to length
//     if repeat, reset left pointer to right, length to 1, and continue
};

// sliding window solution
var lengthOfLongestSubstring = function(s) {
//     sliding window pattern problem
    if (s.length === 0) {
        return 0;
    }
    let arr = s.split('');
    let max = 1;
    for (let i = 0; i < arr.length; i++) {
        let length = 1;
        let unique = { [arr[i]]: i };
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] in unique) {
                break;
            }
            unique[arr[j]] = j;
            length++;
            if (length > max) {
                max = length;
            }
        }
    }
    return max;
};


// FASTER - 2x above solution
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let unique = new Set();
    let max = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        while (unique.has(s[i])) {
            unique.delete(s[left]);
            left++;
        }
        unique.add(s[i]);
        max = Math.max(i - left + 1, max);
    }
    return max;
}
