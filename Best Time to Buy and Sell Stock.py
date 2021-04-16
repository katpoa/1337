class Solution:
    def maxProfit(self, prices: List[int]) -> int:
#         maxprof = 0
#         for i in range(len(prices)):
#             for j in range(i + 1, len(prices)):
#                 profit = prices[j] - prices[i]
#                 if profit > maxprof:
#                     maxprof = profit
#         return maxprof
    
        if len(prices) == 0:
            return 0
        buy = prices[0]
        maxprof = 0
        for i in range(len(prices)):
            if prices[i] < buy:
                buy = prices[i]
            elif prices[i] - buy > maxprof:
                maxprof = prices[i] - buy
        return maxprof

    // Javascript
var maxProfit = function(prices) {
    let minBuy = prices[0];
    let maxProf = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minBuy) {
            minBuy = prices[i];
        } else if (prices[i] - minBuy > maxProf) {
            maxProf = prices[i] - minBuy;
        }
    }
    return maxProf;
};

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
console.log(maxProfit([7,1,5,3,6,4]) === 5);

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
console.log(maxProfit([7,6,4,3,1]) === 0);
