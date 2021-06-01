/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let counter = 0;
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    counter += climbStairs(n - 1);
    counter += climbStairs(n - 2);
    return counter;
};
