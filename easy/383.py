class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        letters = Counter(magazine)
        for l in ransomNote:
            if l not in letters or letters[l] == 0:
                return False
            else:
                letters[l] -= 1
        return True
