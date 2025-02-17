console.log(isPallendrome("racecar"));

function isPallendrome(str) {
    const revStr = str.split("").reverse().join("");
    return str === revStr;
}

// for online compiler

function isPallendrome(str) {
    const revStr = str.split("").reverse().join("");
    return str === revStr;
}
let reverseStd = prompt("Enter String: ");
console.log(isPallendrome(reverseStd));