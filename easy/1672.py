class Solution:
    def maximumWealth(self, a: List[List[int]]) -> int:
        m = 0
        for r in a:
            m = max(m, sum(r))
        return m
