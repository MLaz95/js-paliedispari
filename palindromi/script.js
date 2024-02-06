// function determines if a word is a palindrome or not and returns true or false
function isPalindrome(word) {
    // array to store the characters that make up word
    let charArray = [''];
    // variable to store word backward
    let backWord = '';

    // push each character of word into charArray
    for(i = 0; i < word.length; i++){
        charArray.push(word[i]);
    }
    
    // cycle through the characters in reverse order to make up our backWord
    for(i = charArray.length - 1; i >= 0; i--){
        backWord += charArray[i];
    }

    // compare backWord and original user input
    if (backWord.toLowerCase() == userInput.toLowerCase()){
        return true;
    }else{
        return false;
    }
}


const buttonElement = document.querySelector('#button')
let userInput

buttonElement.addEventListener('click', 
    function(){
        // making sure the user inputs a word
        do{
            userInput = prompt('Tell me a word');
            if(!isNaN(userInput)){
                alert('Please input a word')
            }
        } while (!isNaN(userInput))
        
        // print
        if(isPalindrome(userInput)){
            console.log('palindrome');
        } else{
            console.log('not a palindrome');
        }
    }
)
