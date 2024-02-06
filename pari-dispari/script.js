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
        let userGuess;
        let userNumber;

        // user chooses odd or even
        do{
            
            userGuess = prompt('Choose odd or even');
            if(userGuess != 'odd' && userGuess != "even"){
                alert('invalid input, try again')
            }
        } while(userGuess != 'odd' && userGuess != "even") // ensures user input valid data
        

        // user picks a number between 1 and 5
        do{
            userNumber = Number(prompt('Pick a number from 1 to 5'));
            if(Number.isNaN(userNumber) || userNumber > 5 || userNumber < 1){
                alert('invalid input, try again')
            }
        } while(Number.isNaN(userNumber) || userNumber > 5 || userNumber < 1) // ensures user input valid data
        
        // computer generates random number in the same range
        const computerNumber = random(5,1);

        // sum the two values
        const total = userNumber + computerNumber;

        // determine winner
        if(userGuess == oddOrEven(total)){
            console.log('congrats you won!')
        } else{
            console.log('you lost. better luck next time')
        }
    }


)