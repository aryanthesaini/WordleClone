document.addEventListener('DOMContentLoaded', () => {

    const randomWords = ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry", "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge", "Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water", "While", "White", "Whole", "Woman", "World", "Youth"];
    // console.log(randomWords.length)
    const randomNum = Math.floor((Math.random() * 212) + 1);
    createSquares();
    let guessedWords = [[]];
    let guessedWordCount = 0;
    let availableSpace = 1;
    let word = randomWords[randomNum];
    console.log(word);

    const keys = document.querySelectorAll('.keyboard-row button');


    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }


    function updateGuessedWords(letter) {
        const currentWordArr = getCurrentWordArr();
        if (currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter);
            const availableSpaceEl = document.getElementById(String(availableSpace));
            availableSpace += 1;
            availableSpaceEl.textContent = letter;
        }
    }


    function getTileColor(letter, i) {
        const isCorrectLetter = word.includes(letter);
        if (!isCorrectLetter) {
            return "rgb(58, 58, 60)";
        }

        const letterInThatPosition = word.charAt(i);
        const isCorrectPosition = letter === letterInThatPosition;

        if (isCorrectPosition) {
            return "rgb(83, 141,78)";
        }

        return "rgb(181, 159, 59)"
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    function handleDeleteLetter() {
        const currentWordArr = getCurrentWordArr();
        const removedLetter = currentWordArr.pop();

        guessedWords[guessedWords.length - 1] = currentWordArr;
        const lastLetterEl = document.getElementById(String(availableSpace - 1));
        lastLetterEl.textContent = '';
        availableSpace -= 1;
    }

    function handleSubmitWord() {
        const currentWordArr = getCurrentWordArr();

        const interval = 400;
        if (currentWordArr.length != 5) {
            window.alert("Word must contain 5 letters!")
        }
        let currentWord = currentWordArr.join('');

        currentWord = capitalizeFirstLetter(currentWord);
        console.log(currentWord);
        if (!randomWords.includes(currentWord)) {
            window.alert("No such word recognised!")
        }
        else {
            const firstLetterId = guessedWordCount * 5 + 1;
            currentWordArr.forEach((letter, i) => {

                setTimeout(() => {
                    const tilecolor = getTileColor(letter, i);
                    const letterId = firstLetterId + i;
                    const letterEl = document.getElementById(letterId);
                    letterEl.classList.add('animate__flipInX');
                    letterEl.style = `background-color:${tilecolor}; border-color:${tilecolor}`
                }, interval * i)
            });
            guessedWordCount += 1;



            if (currentWord === word) {
                window.alert('Congratulations!')
            }

            guessedWords.push([]);
            if (guessedWords.length == 7) {
                alert(`Sorry, no more guesses :( The word was ${word}`);
            }
        }

    }

    function createSquares() {
        const gameBoard = document.querySelector('#board');
        for (let i = 0; i < 30; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.classList.add('animate__animated');
            square.setAttribute('id', i + 1);
            gameBoard.appendChild(square);
        }
    }

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute('data-key');
            // console.log(letter);


            if (letter === 'enter') {
                handleSubmitWord();
                return;
            }
            if (letter == 'del') {
                handleDeleteLetter();
                return;
            }
            updateGuessedWords(letter);

        }
    }

})
