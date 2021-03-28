document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    // Shuffle cards
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const [optionOneId, optionTwoId] = [cardsChosenId[0], cardsChosenId[1]]
        const foundCards = [cards[optionOneId], cards[optionTwoId]]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            foundCards.forEach(card => card.setAttribute('src', 'images/white.png'))
            cardsWon.push(cardsChosen)
        } else {
            foundCards.forEach(card => card.setAttribute('src', 'images/blank.png'))
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        if (cardsChosen.length === 1 && this.getAttribute('data-id') === cardsChosenId[0]) {
            alert('Please select a different card')
            return;
        }

        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})