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
