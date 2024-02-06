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

