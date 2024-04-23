const pets = ['kutya', 'macska', 'alma', 'körte']
console.log(pets)

console.log('It just works')
const container = document.querySelector('#container')

let valami = document.createElement('div')
valami.innerText = 'Hello 🤨'
container.appendChild(valami)

document.getElementById('de').innerHTML = pets
