function guessNumber() {
    let randomNum = Math.floor(Math.random()* 51);

    console.log(randomNum);

    let guess;
    guess = prompt("Please enter a number between and 50");
    //console.log("Your guess is: " +guess)

    if (guess < randomNum) {
        window.alert("Your guess is too low")
    } else if (guess > randomNum) {
        window.alert("Your guess is too high")
    } else if (guess == randomNum) {
        window.alert("You guessed it, you won.")
    } else {
        window.alert("Error!!!")
    }
}