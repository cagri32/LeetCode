/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // divide list into to and merge 
    // O(n) space
    
    let slow = head, fast = head;
    while (fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    // break the linked list
    let second = slow.next
    slow.next = null
    
    // reverse the second half linked list
    let prev = null
    while (second){
        let temp = second.next
        second.next = prev
        prev = second
        second = temp
    }
    
    // merge 2 halves
    let h1 = head
    let h2 = prev
    while(h2){
        let temp = h1.next;
        h1.next = h2
        h1 = h2
        h2 = temp
    }
};