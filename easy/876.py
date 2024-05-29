class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        middle = head
        traverse = head
        while traverse and traverse.next:
            middle = middle.next
            traverse = traverse.next.next
        return middle
