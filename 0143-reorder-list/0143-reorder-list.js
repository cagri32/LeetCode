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
    
    // break the linked list, second will be the HEAD the other half
    // point the end of first to null
    let second = slow.next
    slow.next = null
    
    // reverse the second half linked list
    let prev = null
    while (second) {
        let temp = second.next;  // Store the next node in the original order
        second.next = prev;      // Reverse the link to the previous node
        prev = second;           // Move the previous pointer forward
        second = temp;           // Move the second pointer forward
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