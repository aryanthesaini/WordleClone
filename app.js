document.addEventListener('DOMContentLoaded', () => {

    createSquares();
    let guessedWords = [[]];
    let guessedWordCount = 0;
    let availableSpace = 1;
    let word = 'dairy';

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

        const currentWord = currentWordArr.join('');
        if (currentWord === word) {
            window.alert('Congratulations!')
        }

        guessedWords.push([]);
        if (guessedWords.length == 7) {
            alert(`Sorry, no more guesses :( The word was ${word}`);
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