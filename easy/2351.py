# Approach 1: Array
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        seen = set()
        for c in s:
            if c in seen:
                return c
            seen.add(c)


# Approach 2: Hash set
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        seen = set()
        for c in s:
            if c in seen:
                return c
            seen.add(c)


# Approach 3: Bitmasking
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        bitmask = 0
        for c in s:
            bitpos = ord(c) - ord('a')
            if bitmask & (1 << bitpos) != 0:
                return c
            bitmask |= (1 << bitpos)
