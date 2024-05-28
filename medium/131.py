class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        stack = []
        n = len(s)

        def isPalindrome(s: str) -> bool:
            return s == s[::-1]

        def recursive(idx_start: int, stack: List[str]) -> None:
            if idx_start >= n:
                result.append(stack.copy())
                return

            for idx_end in range(idx_start, n):
                substr = s[idx_start:idx_end+1]
                if isPalindrome(substr):
                    stack.append(substr)
                    recursive(idx_end+1, stack)
                    stack.pop()  # clear stack after recursion ended

        recursive(0, stack)
        return result
