const order = {
    'Orbit-1' : 'Mercury',
    'Orbit-2' : 'Venus',
    'Orbit-3' : 'Earth',
    'Orbit-4' : 'Mars',
    'Orbit-5' : 'Jupiter',
    'Orbit-6' : 'Saturn',
    'Orbit-7' : 'Uranus',
    'Orbit-8' : 'Neptune',
}

const imges = document.querySelectorAll('.img')
const orbits = document.querySelectorAll('.orbit')
const Planets = document.querySelector('#Planets')
let image

imges.forEach((img) =>{
    img.addEventListener('dragstart',()=>{
        img.classList.add('dragplanet')
        image = img
    })
    img.addEventListener('dragend',()=>{
        img.classList.remove('dragplanet')
    })
})

orbits.forEach((orbit)=>{
    orbit.addEventListener('dragover' ,(event)=>{
        event.preventDefault()
        const line = orbit.querySelector('.line')
        line.classList.add('dragorbit')
    })
    orbit.addEventListener('dragleave' ,(event)=>{
        event.preventDefault()
        const line = orbit.querySelector('.line')
        line.classList.remove('dragorbit')
    })
    orbit.addEventListener('drop' ,(event)=>{
        event.preventDefault()
        const line = orbit.querySelector('.line')
        line.classList.remove('dragorbit')
        if(order[orbit.id]===image.id){
            orbit.appendChild(image)
        }
    })
})


