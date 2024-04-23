const pets = ['kutya', 'macska', 'alma', 'körte']
console.log(pets)

console.log('It just works')
const container = document.querySelector('#container')

let valami = document.createElement('div')
valami.innerText = 'Hello 🤨'
container.appendChild(valami)

for (const element of pets) {
  let tdiv = document.createElement('div')
  container.appendChild(tdiv)
  tdiv.innerHTML = element
}
