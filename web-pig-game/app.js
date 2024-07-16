const Tot_score_player = document.querySelectorAll('.Total-Score > .score')
const Cur_score_player = document.querySelectorAll('.Current-Score > .score')
const Player_1 = document.querySelector('#player-1')
const Player_2 = document.querySelector('#player-2')
const Players = document.querySelectorAll('.playerBoard')

const StartGame_btn = document.querySelector('#start-game')
const dice = document.querySelector('#dice')
const RollDice_btn = document.querySelector('#roll-dice')
const Hold_btn = document.querySelector('#hold')

const RandNumber = range => Math.floor(Math.random() * 10) % range + 1

let activePlayer = null

function StartGame() {
    activePlayer = null
    Players[0].classList.remove('activePlayer')
    Players[1].classList.remove('activePlayer')
    Players[0].classList.remove('winner')
    Players[1].classList.remove('winner')
    dice.innerHTML = ''
    Tot_score_player[1].textContent = '0'
    Cur_score_player[1].textContent = '0'
    Tot_score_player[0].textContent = '0'
    Cur_score_player[0].textContent = '0'
}

function ShowDice(number) {
    if (dice.querySelector('img') != null) dice.innerHTML = ''
    img = document.createElement('img')
    img.src = `img/${number}.png`
    img.draggable = false
    img.alt = 'dice'
    dice.appendChild(img)
}

function ChangeProcess() {
    Cur_score_player[activePlayer - 1].textContent = 0

    if(Number(Tot_score_player[activePlayer - 1].textContent) >= 50){;
        Players[activePlayer-1].classList.toggle('activePlayer')
        Players[activePlayer-1].classList.add('winner')
        alert(`Player ${activePlayer} won!`);
        activePlayer = null
        return
    }

    if (activePlayer == 1) activePlayer = 2
    else activePlayer = 1

    Players[1].classList.toggle('activePlayer')
    Players[0].classList.toggle('activePlayer')
}



StartGame_btn.addEventListener('click', () => {
    StartGame()
    activePlayer = 1
    Players[activePlayer - 1].classList.add('activePlayer')
})

RollDice_btn.addEventListener('click', () => {
    if (activePlayer == null) return
    const dice = RandNumber(6)
    ShowDice(dice)

    if (dice == 1) {
        ChangeProcess()
        return
    }
    Cur_score_player[activePlayer - 1].textContent = Number(Cur_score_player[activePlayer - 1].textContent) + dice
})

Hold_btn.addEventListener('click', () => {
    if (activePlayer == null) return
    Tot_score_player[activePlayer - 1].textContent = Number(Cur_score_player[activePlayer - 1].textContent) + Number(Tot_score_player[activePlayer - 1].textContent)
    ChangeProcess()
})