/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function arrayToList(array){
    let list = new ListNode(0);
    let current = list;

    for(let num of array){
        current.next = new ListNode(num);
        current = current.next;
    }

    return list.next;
}

function listToArray(list){
    let array = [];
    let current = list;

    while(current !== null){
        array.push(current.val);
        current = current.next;
    }

    return array;
}

var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0);
    let current = list;
    let carry = 0;

    console.log("Lista1: ",l1)
    console.log("Lista2: ",l2)
    

};

let l1 = arrayToList([2,4,3]);
let l2 = arrayToList([5,6,4]);

console.log(addTwoNumbers(l1, l2))