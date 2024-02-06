// user chooses odds or evens
// user picks a number between 1 and 5
// computer generates a number in the same range
// sum the two values
// determine if the result is odd or even
// tell the user if they guessed right

// generates random number between min of b and max of a
function random (a,b){
    rnd = Math.floor(Math.random() * a + b);
    return rnd;
}

// determines if odd or even
function oddOrEven (x){
    if(x % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


const startButton = document.querySelector('#play');


startButton.addEventListener('click',
    function() {
        const userGuess = prompt('Choose odd or even');
        const userNumber = Number(prompt('Pick a number from 1 to 5'));
        const computerNumber = random(5,1);

        const total = userNumber + computerNumber;
        
        if(userGuess == oddOrEven(total)){
            console.log('congrats you won!')
        } else{
            console.log('you lost. better luck next time')
        }
    }


)