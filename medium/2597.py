class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        n = len(nums)
        result = 0

        def backtrack(idx: int) -> None:
            nonlocal result
            # Base case
            if idx >= n:
                if visits:  # non-empty
                    result += 1
                return
            # Backtracking using visit counter method
            if nums[idx] - k not in visits and nums[idx] + k not in visits:
                visits[nums[idx]] += 1
                backtrack(idx+1)
                visits[nums[idx]] -= 1
                if visits[nums[idx]] == 0:
                    del visits[nums[idx]]
            backtrack(idx+1)

        visits = defaultdict(int)
        backtrack(0)

        return result
