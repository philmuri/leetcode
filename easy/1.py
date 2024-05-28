class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        inverseMap = {}
        for i in range(len(nums)):
            inverse = target - nums[i]
            if nums[i] in inverseMap:
                return [inverseMap[nums[i]], i]
            else:
                inverseMap[inverse] = i
