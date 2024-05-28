class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        alphabet = string.ascii_lowercase
        l_count = Counter(letters)
        max_score = 0

        def get_score(word: str) -> int:
            """
            Obtain score of word from letter-score mapping.
            """
            return sum(score[ord(l)-ord('a')] for l in word)

        def is_formable(word: str) -> bool:
            """
            Check if all letters are available in the letters list to form word.
            """
            wl_count = Counter(word)
            return all(l_count[l] >= count for l, count in wl_count.items())

        def backtrack(idx: int, curr_score: int) -> None:
            nonlocal max_score
            # Base case
            if idx >= len(words):
                max_score = max(max_score, curr_score)
                return
            # Backtracking
            backtrack(idx+1, curr_score)
            if is_formable(words[idx]):
                wl_count = Counter(words[idx])
                # Detract letter counts
                for l, count in wl_count.items():
                    l_count[l] -= count
                # Compute score
                curr_score += get_score(words[idx])
                backtrack(idx+1, curr_score)
                # Restore letter counts for new word subset
                for l, count in wl_count.items():
                    l_count[l] += count

        backtrack(0, 0)
        return max_score
