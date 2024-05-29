class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for l in set(ransomNote):  # remove duplicates
            if magazine.count(l) < ransomNote.count(l):
                return False
        return True
