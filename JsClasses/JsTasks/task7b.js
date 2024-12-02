

function isAlphaNum(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
}

function isPalindrome(s){
    let start = 0;
    let end = s.length - 1;

    while(start < end){
        while(start < end && isAlphaNum(s[start])){
            start++;
        };
        while(end > start && isAlphaNum(s[end])){
            end--;
        };
        if (s[start].toLowerCase() !== s[end].toLowerCase()){
            return false;
        };
        start++; end--;
    };
    return true
};

let s1 = "Was it a car or a cat I saw?"
let s2 = "tab a cat";

console.log(isPalindrome(s1))
console.log(isPalindrome(s2))