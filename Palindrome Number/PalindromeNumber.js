/**
 * Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    let array = x.toString().split("");

    if (array.length == 1) {
        return true;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[array.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(1331));
