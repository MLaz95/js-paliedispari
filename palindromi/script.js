// function determines if a word is a palindrome or not and returns true or false
function isPalindrome(word) {
    // variable to store word backwards
    let backWord = '';
    
    // cycle through the characters of word in reverse order to make up our backWord
    for(i = word.length - 1; i >= 0; i--){
        backWord += word[i];
    }

    // compare backWord and original user input
    if (backWord.toLowerCase() == userInput.toLowerCase()){
        return true;
    }else{
        return false;
    }
}


const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');
let userInput;

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
            resultElement.innerHTML = `"${userInput}" is a palindrome!`
        } else{
            resultElement.innerHTML = `"${userInput}" is not a palindrome.`
        }

        resultElement.classList.remove('opacity-0');
    }
)
