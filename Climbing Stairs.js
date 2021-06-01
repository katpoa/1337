/**
 * @param {number} n
 * @return {number}
 */
// Recursive
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

// Iterative dp

var climbStairs = function(n) {
    let ways = [];
    ways[1] = 1;
    ways[2] = 2;
    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
};
