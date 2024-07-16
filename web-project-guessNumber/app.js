const randomNumber = Math.floor(Math.random()*100)
const input = document.querySelector('section > input')
input.value = '0'
const error = document.querySelector('section > .error')
let Counter = 0
console.log(randomNumber);
document.querySelector('section > button').addEventListener('click',(event)=>{

    event.preventDefault()
    Counter++;
    const userNumber = input.value
    if (userNumber > randomNumber + 5) error.textContent = 'Too big'
    else if (userNumber+5 < randomNumber) error.textContent = 'Too short'
    else if (userNumber > randomNumber) error.textContent = 'big'
    else if (userNumber < randomNumber) error.textContent = 'short'
    else {
        document.querySelector('body').style = 'background: rgb(0,175,127);\
        background: radial-gradient(circle, rgba(0,175,127,1) 50%, rgba(0,95,69,1) 100%);'
        error.style = 'color:aquamarine; font-weight = bold;'
        input.disabled = true
        error.textContent = 'You won with ' + Counter + ' steps!'
        document.querySelector('section > button').disabled = true
        // alert ("You won!")
        return
    }
    // input.value = ''
})