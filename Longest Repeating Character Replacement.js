
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.


 */
var characterReplacement = function(s, k) {
    // sliding window
    let left = 0;
    let right = 0;
    let currMax = 0;
    const seen = {};
    while (right < s.length) {
        let current = s[right]
        seen[current] = seen[current] ? seen[current] + 1 : 1;
        if (seen[current] > currMax) {
            currMax = seen[current]
        }
        if (right - left + 1 - currMax > k) {
            seen[s[left]]--;
            left++;
        }
        right++;
    }
    return right - left;
};
