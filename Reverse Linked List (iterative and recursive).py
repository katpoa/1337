/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};

// recursive

var reverseList = function(head) {
    const helper = (curr, prev) => {
        if (curr === null) { return prev; }
        let next = curr.next;
        curr.next = prev;
        return helper(next, curr)
    }
    return helper(head, null);
};

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        curr = head
        prev = None
        while curr:
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        return prev
        
# recursive
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        return self.helper(head, None)
    
    def helper(self, curr, prev):
        if not curr:
            return prev
        next = curr.next
        curr.next = prev
        return self.helper(next, curr)
