document.addEventListener('DOMContentLoaded', () => {

    const randomWords = ["Aargh", "Adieu", "Adios", "Alack", "Aloha", "Avast", "Bakaw", "Basta", "Begad", "Bless", "Blige", "Brava", "Bravo", "Bring", "Chook", "Damme", "Dildo", "Ditto", "Frick", "Fudge", "Golly", "Gratz", "Hallo", "Hasta", "Havoc", "Hella", "Hello", "Howay", "Howdy", "Hullo", "Huzza", "Jesus", "Kapow", "Loose", "Lordy", "Marry", "Mercy", "Night", "Plonk", "Psych", "Quite", "Salve", "Skoal", "Sniff", "Sooey", "There", "Thiam", "Thwap", "Tough", "Twirp", "Viola", "Vivat", "Wacko", "Wahey", "Whist", "Wilma", "Wirra", "Woops", "Wowie", "Yecch", "Yeeha", "Yeesh", "Yowch", "Zowie", "Abaft", "Aboon", "About", "Above", "Adown", "Afore", "After", "Along", "Aloof", "Among", "Below", "Circa", "Cross", "Furth", "Minus", "Neath", "Round", "Since", "Spite", "Under", "Until", "Aback", "Abaft", "Aboon", "About", "Above", "Accel", "Adown", "Afoot", "Afore", "Afoul", "After", "Again", "Agape", "Agogo", "Agone", "Ahead", "Ahull", "Alife", "Alike", "Aline", "Aloft", "Alone", "Along", "Aloof", "Aloud", "Amiss", "Amply", "Amuck", "Apace", "Apart", "Aptly", "Arear", "Aside", "Askew", "Awful", "Badly", "Bally", "Below", "Canny", "Cheap", "Clean", "Clear", "Coyly", "Daily", "Dimly", "Dirty", "Ditto", "Drily", "Dryly", "Dully", "Early", "Extra", "False", "Fatly", "Feyly", "First", "Fitly", "Forte", "Forth", "Fresh", "Fully", "Funny", "Gaily", "Gayly", "Godly", "Great", "Haply", "Heavy", "Hella", "Hence", "Hotly", "Icily", "Infra", "Intl.", "Jildi", "Jolly", "Laxly", "Lento", "Light", "Lowly", "Madly", "Maybe", "Never", "Newly", "Nobly", "Oddly", "Often", "Other", "Ought", "Party", "Piano", "Plain", "Plonk", "Plumb", "Prior", "Queer", "Quick", "Quite", "Ramen", "Rapid", "Redly", "Right", "Rough", "Round", "Sadly", "Secus", "Selly", "Sharp", "Sheer", "Shily", "Short", "Shyly", "Silly", "Since", "Sleek", "Slyly", "Small", "So-So", "Sound", "Spang", "Srsly", "Stark", "Still", "Stone", "Stour", "Super", "Tally", "Tanto", "There", "Thick", "Tight", "Today", "Tomoz", "Truly", "Twice", "Under", "Utter", "Verry", "Wanly", "Wetly", "Where", "Wrong", "Wryly", "Afore", "After", "Bothe", "Other", "Since", "Slash", "Until", "Where", "While", "Above", "Acute", "Alive", "Alone", "Angry", "Aware", "Awful", "Basic", "Black", "Blind", "Brave", "Brief", "Broad", "Brown", "Cheap", "Chief", "Civil", "Clean", "Clear", "Close", "Crazy", "Daily", "Dirty", "Early", "Empty", "Equal", "Exact", "Extra", "Faint", "False", "Fifth", "Final", "First", "Fresh", "Front", "Funny", "Giant", "Grand", "Great", "Green", "Gross", "Happy", "Harsh", "Heavy", "Human", "Ideal", "Inner", "Joint", "Large", "Legal", "Level", "Light", "Local", "Loose", "Lucky", "Magic", "Major", "Minor", "Moral", "Naked", "Nasty", "Naval", "Other", "Outer", "Plain", "Prime", "Prior", "Proud", "Quick", "Quiet", "Rapid", "Ready", "Right", "Roman", "Rough", "Round", "Royal", "Rural", "Sharp", "Sheer", "Short", "Silly", "Sixth", "Small", "Smart", "Solid", "Sorry", "Spare", "Steep", "Still", "Super", "Sweet", "Thick", "Third", "Tight", "Total", "Tough", "Upper", "Upset", "Urban", "Usual", "Vague", "Valid", "Vital", "White", "Whole", "Wrong", "Young", "Admit", "Adopt", "Agree", "Allow", "Alter", "Apply", "Argue", "Arise", "Avoid", "Begin", "Blame", "Break", "Bring", "Build", "Burst", "Carry", "Catch", "Cause", "Check", "Claim", "Clean", "Clear", "Climb", "Close", "Count", "Cover", "Cross", "Dance", "Doubt", "Drink", "Drive", "Enjoy", "Enter", "Exist", "Fight", "Focus", "Force", "Guess", "Imply", "Issue", "Judge", "Laugh", "Learn", "Leave", "Let’s", "Limit", "Marry", "Match", "Occur", "Offer", "Order", "Phone", "Place", "Point", "Press", "Prove", "Raise", "Reach", "Refer", "Relax", "Serve", "Shall", "Share", "Shift", "Shoot", "Sleep", "Solve", "Sound", "Speak", "Spend", "Split", "Stand", "Start", "State", "Stick", "Study", "Teach", "Thank", "Think", "Throw", "Touch", "Train", "Treat", "Trust", "Visit", "Voice", "Waste", "Watch", "Worry", "Would", "Write", "Alcon", "Aught", "Hella", "One’s", "Ought", "Thame", "There", "Thine", "Thine", "Where", "Which", "Whose", "Whoso", "Yours", "Yours", "Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry", "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge", "Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water", "While", "White", "Whole", "Woman", "World", "Youth"];
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
