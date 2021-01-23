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
