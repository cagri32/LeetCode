/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // create a dummy head for handling edge cases of removing the first node
    let dummyHead = new ListNode(-1);
    // point the dummy.next to head
    // in the end, we will return the dummyHead.next 
    dummyHead.next = head;
    
    // Create a tail pointer to move n steps ahead of other pointers
    // this will help us find the pointers nth from the last
    let tail = head;
    
    // Quick loop to move tail n step further
    let count = 0;
    while(count < n){
        count++;
        tail = tail.next
    }
    
    // create 2 pointers. 
    // Pointer to the node we will remove and the one before it 
    let removeNode = head;
    let prev = dummyHead;
    
    // start iterating using tail so that it can reach the end of the list
    while(tail){
        tail = tail.next
        // increment other 2 pointers so that they can point to the node we want to remove and one before
        removeNode = removeNode.next;
        prev = prev.next;
    }
    // after getting to the end with the above loop, remove the next pointer of previous node and point it to 2 nodes after
    prev.next = removeNode.next;
    
    // after making all changes, return dummyHead.next
    return dummyHead.next
    
};