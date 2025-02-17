
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let input = prompt("Enter somthing: ");
// console.log(findLongestWord("I love javaScript"));
let longWord = findLongestWord(input);
console.log(longWord);

