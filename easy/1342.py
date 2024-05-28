class Solution:
    def numberOfSteps(self, num: int) -> int:
        counter = 0
        while num > 0:
            if num & 1:  # bitwise logical AND
                num -= 1
            else:
                num >>= 1  # bitwise right shift i.e. divide by 2
            counter += 1

        return counter
