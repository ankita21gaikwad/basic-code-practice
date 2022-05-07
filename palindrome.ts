// 3. Palindrome : A string that reads the same forward or backward

function isPalindrome(word: string): boolean {

    // length of the string
    let lengthOfWord: number = word.length;

    // reverse the string
    let reversedWord: string = reverseString(word, lengthOfWord);

    // compare the word and reversedWord
    if (word.toLocaleLowerCase() === reversedWord.toLocaleLowerCase()) {
        console.log(word + ' is Palindrome');
    } else {
        console.log(word + ' is not Palindrome');
    }
    return true;
}

function reverseString(word: string, lengthOfWord: number): any {
    let reversedWord: string = '';
    for (let i = 0; i < lengthOfWord; i++) {
        // extracts each character
        let character = word.charAt(i);
        //adds each character in front of the existing string    
        reversedWord = character + reversedWord;
    }
    console.log('Reversed word is ' + reversedWord);
    return reversedWord;

}

isPalindrome('ankita');
