const userSelection = document.querySelector('#userSelection')
const cpuSelection = document.querySelector('#cpuSelection')

const userImages = userSelection.querySelectorAll('.images > img')
const cpuImages = cpuSelection.querySelectorAll('.images > img')

const userPoint = document.querySelector('#points > #userPoint > small')
const cpuPoint = document.querySelector('#points > #cpuPoint > small')

const button = document.querySelector('button')

function SystemSelection() {
    const rand = Math.floor(Math.random() * 10) % 3
    let result;
    switch (rand) {
        case 0:
            result = 'paper'
            break
        case 1:
            result = 'stone'
            break
        case 2:
            result = 'scissor'
            break
    }
    return result
}
function ShowImage(cpuImg) {
    cpuImages.forEach(item => {
        if (item.classList.contains(cpuImg)&&item.classList.contains('hidden'))
            item.classList.remove('hidden')
    })
}
function HideImage(userImg) {
    userImages.forEach(item => {
        if (!item.classList.contains(userImg)&&!item.classList.contains('hidden'))
            item.classList.add('hidden')
    })
}
function Result(userChoice, cpuChoice) {
    const order = {
        'scissor': 'paper',
        'stone': 'scissor',
        'paper': 'stone',
    }

    if (order[userChoice] == cpuChoice) return 'user'
    else if (order[cpuChoice] == userChoice) return 'cpu'
    else return 'none'
}
function AddPoint(winner) {
    switch (winner) {
        case 'user':
            userPoint.textContent = Number(userPoint.textContent) + 1
            break
        case 'cpu':
            cpuPoint.textContent = Number(cpuPoint.textContent) + 1
            break
    }
}
function Refresh() {
    userImages.forEach(img => {
        if (img.classList.contains('hidden'))
            img.classList.remove('hidden')
    })
    cpuImages.forEach(img => {
        if (!img.classList.contains('hidden'))
            img.classList.add('hidden')
    })
    const title = cpuSelection.querySelector('h3')
    if (!title.classList.contains('hidden'))
        title.classList.add('hidden')

    const title2 = userSelection.querySelector('h2').textContent = "Choose your weapon"
}
function ShowingResult () {
    let result = false
    userImages.forEach(img=>{
        if(img.classList.contains('hidden')) result = true
    })
    return result
}

userImages.forEach(userImg => {
    userImg.addEventListener('click', () => {
        
        if(ShowingResult()) return

        const cpuImg_className = SystemSelection()
        let userImg_className
        if (userImg.classList.contains('scissor'))
            userImg_className = 'scissor'
        else if (userImg.classList.contains('stone'))
            userImg_className = 'stone'
        else if (userImg.classList.contains('paper'))
            userImg_className = 'paper'
        else
            userImg_className = 'none'

        const title2 = userSelection.querySelector('h2').textContent = "Your Choice :"

        cpuSelection.querySelector('h3').classList.remove('hidden')
        ShowImage(cpuImg_className)
        HideImage(userImg_className)

        const winner = Result(userImg_className, cpuImg_className)

        AddPoint(winner)
    })
})

button.addEventListener('click', Refresh)
document.addEventListener('keydown', event => {
    if (event.key == 'r') Refresh()
})