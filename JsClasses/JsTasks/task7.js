/*
    -- Valid Palindrome 
    Given a string s,Create a function "isPalindrome(s)" that return true if it is a palindrome, otherwise return false.

    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    Example 1:
    Input: s = "Was it a car or a cat I saw?"
    Output: true
    Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

    Example 2:
    Input: s = "tab a cat"
    Output: false
    Explanation: "tabacat" is not a palindrome.
*/

function isAlphaNum(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
}

function isPalindrome(s){
   
    let str = '';
    for(let c of s){
        if(isAlphaNum(c)){
            str += c.toLowerCase();
        }
    }
    console.log(str)
    return str === str.split('').reverse().join('');
};

let s1 = "Was it a car or a cat I saw?"
let s2 = "tab a cat";

console.log(isPalindrome(s1))
console.log(isPalindrome(s2))

for (let i = '0'.charCodeAt(0); i <= '9'.charCodeAt(0); i++){
    console.log(i)
}