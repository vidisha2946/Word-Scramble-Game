const words = [
    "CAMERA",
    "CANDY",
    "SCISSORS",
    "TABLE",
    "JACKET",
    "CHEESE",
    "RAINBOW",
    "SCHOOL",
    "BREAKFAST",
    "GIRAFFE",
    "TELEPHONE",
    "CLOCK",
    "MORNING",
    "CAT",
    "DOG",
    "garden",
    "comfort",
    "group",
    "friend",
    "Orange",
    "Triangle",
    "Rain",
    "Computer",
    "Ice",
    "Honey",
    "365",
    "Agra",
    "apple"
];

const hints = [
    "A device used for taking pictures",
    "A type of sweet treat often chewed.",
    "A tool used for cutting paper.",
    " A surface used for eating or working.",
    "A piece of clothing worn in cold weather.",
    " A dairy product often found on pizza.",
    "A colorful arc seen after rain",
    " A place where you go to learn.",
    "The first meal of the day.",
    " A tall animal with spots, known for its long neck.",
    "A device used to make calls.",
    "It tells the time.",
    " The time of day when you wake up.",
    "A small, furry animal that says 'meow'",
    "A common household pet that barks.",
    "Space for planting flower and plant",
    "A pleasant feeling of relaxation",
    "A number of objects or persons",
    "Person other than a family member",
    "A fruit or a color",
    "A three-sided shape",
    "Water falling from the sky",
    "An electronic device for storing and processing data",
    "freeze water",
    "bees make",
    "days are in a year",
    " the Taj Mahal located",
    " company invented the iPhone"
];
let displayWord = "";
let correctAnswers = 0;
let incorrectAnswers = 0;
let audio = document.getElementById('music');
audio.play();

function displayInfo() {
    document.getElementById('InfoCard').style.display = 'flex';
}

function closeInfo() {
    document.getElementById('InfoCard').style.display = 'none';
}

function shuffle(str) {
    let strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join(" ");
}

function check() {
    let input = document.getElementById("input").value.toLowerCase();
    let output = document.getElementById("output");
    if (input === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No Input!',
            text: 'Please enter something before submitting.',
            confirmButtonText: 'OK'
        }).then(() => {
            document.getElementById("input").focus();
        });
        return;
    }
    if (input === displayWord.toLowerCase()) {
        correctAnswers++;
        output.innerHTML = "Result: Correct";
        Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'You guessed the word correctly!',
            confirmButtonText: 'OK'
        }).then(() => {
            Next();
            document.getElementById("input").focus();
        });
    } else {
        incorrectAnswers++;
        output.innerHTML = "Result: Incorrect";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your answer is incorrect!',
            confirmButtonText: 'Try Again'
        }).then(() => {
            document.getElementById("input").focus();
        });
    }
    document.getElementById("input").value = '';
}

function showAnswer() {
    let input = document.getElementById("input").value.toLowerCase();
    if (input == "") {
        // If the input is empty, show a SweetAlert
        Swal.fire({
            icon: 'warning',
            title: 'No Input!',
            text: 'Please enter something before requesting the answer.',
            confirmButtonText: 'OK'
        }).then(() => {
            document.getElementById("input").focus();  // Automatically focus on the text box
        });

    } else {
        // Show the correct answer
        Swal.fire({
            icon: 'info',
            title: `Answer is "${displayWord}"`,
            confirmButtonText: 'OK'
        }).then(() => {
            document.getElementById("input").focus();  // Automatically focus on the text box
        });
    }
}

function Next() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    let displayHint = hints[index];
    let scrambleWord = document.getElementById("scrambleWord");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
    document.getElementById("input").value = '';
}

function endGame() {
    Swal.fire({
        icon: 'info',
        title: 'Game Over!',
        html: `<p>Your Score:</p>
               <p>Correct Answers: ${correctAnswers}</p>
               <p>Incorrect Answers: ${incorrectAnswers}</p>`,
        confirmButtonText: 'Play Again'
    }).then(() => {
        correctAnswers = 0;
        incorrectAnswers = 0;
        Next();
    });
}

// Initialize the game
Next();