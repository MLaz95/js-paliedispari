// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro,
// farà i suoi calcoli per capire se è palindroma o meno e ci restituirà
// true o false in base all'esito)

function isPalindrome(word) {
    let charArray = [''];
    let backWord = '';

    for(i = 0; i < word.length; i++){
        charArray.push(word[i]);
    }
    
    for(i = charArray.length - 1; i >= 0; i--){
        backWord += charArray[i];
    }

    if (backWord == userInput){
        return true;
    }else{
        return false;
    }
}


const userInput = 'test';

console.log(isPalindrome(userInput));

// if (isPalindrome(userInput)){
//     console.log('yes')
// } else{
//     console.log('no')
// }