const colorBox = document.querySelector('[data-testid="colorBox"]');

const colorOptContainer = document.querySelector('.js-color-options');

const gameStatus = document.querySelector('[data-testid="gameStatus"]');

const scoreCounter = document.querySelector('[data-testid="scoreBoard"]');

const resetGameBtn = document.querySelector('[data-testid="resetGameButton"]')

//setting all our var default values

let colors = [];
let targetColor = '';
let score = 0;


// function to generate random colors

function generateRandomColor () {
    
     return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}


// function to generate the random valus for our color

function randomValue () {
    
        return Math.floor(Math.random() * 256);
}

// function to reset or set new game

function setNewGame () {

        gameStatus.textContent = '';

        colorOptContainer.innerHTML = '';

        colors = Array.from({ length: 6 }, generateRandomColor);

        targetColor = colors[Math.floor(Math.random() * colors.length)];

        // asign target color to the color box

        colorBox.style.backgroundColor = targetColor;

        // looping through the colors array

        colors.forEach((color) => {

                const button = document.createElement('button');
                button.dataset.testid = "colorOption";

                // hidden color assigment
                button.dataset.color = color;

                button.addEventListener('click', () => handleColorGuess(button));

              colorOptContainer.appendChild(button);
            });

}

// function to handle color guess

function handleColorGuess (button) {

            const selectedColor = button.dataset.color;

            // reveal the color behind the button

            button.style.backgroundColor = selectedColor;

            button.classList.add('revealed');

            if(selectedColor === targetColor) {
                gameStatus.textContent = 'Correct!';

                gameStatus.style.color = 'green';

                score++;

                scoreCounter.innerHTML = `Score: ${score}`;

            } else {

                gameStatus.textContent = 'Wrong! try again.'

                gameStatus.style.color = 'red';
            }

}

        resetGameBtn.addEventListener('click', setNewGame);

    // initiallize or start the game afresh 

            setNewGame();
