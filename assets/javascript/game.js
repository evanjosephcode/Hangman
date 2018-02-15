
  //lists out all the options

  var computerWords = ["doggies", "kittens", "programming", "saturday", "bagels", "pneumonia", "cookies", "palindrome"];
  var triesRemaining = 8;
  var maskedWord = [];
  var userChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]; 
  var letterFail = [];

  var computerGuess = computerWords[Math.floor(Math.random() * computerWords.length)];
  for (var i = 0; i < computerGuess.length; i++) {
      // console.log(computerGuess.charAt(i));
      maskedWord.push('_ ');
      maskedWord = maskedWord.slice(0, computerGuess.length);
    }
      console.log(maskedWord);
      document.querySelector("#maskedWord").innerHTML = (maskedWord.join(" "));
      
  console.log(computerGuess);
      

  document.querySelector("#tries").innerHTML = "Tries Remaining (may the odds be forever in your favor): "+ triesRemaining;

  document.onkeyup = function(event) {
    // determines whcih key was pressed
    var userLetter = event.key.toLowerCase();
    console.log(userLetter);
 
    for (var i = 0; i < computerGuess.length; i++) {
      // console.log(computerGuess.charAt(i));
      maskedWord.push('_ ');
      maskedWord = maskedWord.slice(0, computerGuess.length);
    }
      console.log(maskedWord);
      
      //Guessed Correctly
    if (computerGuess.indexOf(userLetter) !== -1) {
      console.log("It's a match!");
      document.querySelector("#resultStatus").innerHTML = "It's a match (why am I happy about this)!";
        for (var i = 0; i < computerGuess.length; i++) {
          if (userLetter == computerGuess[i]) {
            (maskedWord[i]) = userLetter;
          }
        }
      console.log(maskedWord);
      // reveal character, in maskedWord and find the index# it pertains to
      
    }  
      document.querySelector("#maskedWord").innerHTML = (maskedWord.join(" "));
    
    //Incorrect Answer
    if (computerGuess.indexOf(userLetter) === -1) {
      if (letterFail.indexOf(userLetter) !== -1) {
        alert("You already tried that letter... I pity a fool with a bad memory");
      } 
        else if (userChoices.indexOf(userLetter) === -1) {
        alert("Clearly, you didn't read the VERY CLEAR instructions (..or you ctrl+R'd ☹)")
      } 
        else {
        letterFail.push(userLetter)
        document.querySelector("#failedLetters").innerHTML = (letterFail.join(" "));
        triesRemaining = triesRemaining - 1;
        document.querySelector("#tries").innerHTML = "Tries Remaining: "+ triesRemaining;
        document.querySelector("#resultStatus").innerHTML = "";
          if (triesRemaining === 0) {
            alert("You suck");
            location.reload();
          }
      } 
    }

    if (maskedWord.indexOf("_ ") === -1) {
      alert("you win! and I... lose?");
      location.reload();
    }

    
    /* pseudo coding -- wats left 
      COMPLETE -- pick word and stay with word, instead of cycling with every onkeyup event
      ALMOST complete -- display wrong chars in array using innerHTML -- almost complete minus 'meta' showing up before that
      COMPLETE -- reveal correct chars filled in maskedWord 
      COMPLETE -- attempts count down from 8, 
      stop game at 0 
      if all chars filled in, alert(win)
      KINDA COMPLETE -- if its not a match in chars, want the "its a match" to go away
      questions - 
      handle duplicate letters that are correct to take it in the maskedWord
      get rid of meta
      not take the same wrong letter twice to count against you 
      make a win screen 
    */
    
  }
  

