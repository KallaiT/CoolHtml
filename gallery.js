const pets = ["kutya", "macska", "alma", "körte"];
console.log(pets);

console.log("It just works");
const container = document.querySelector("#container");

let valami = document.createElement("div");
valami.innerText = "Hello 🤨";
container.appendChild(valami);

for (const element of pets) {
  let tdiv = document.createElement("div");
  container.appendChild(tdiv);
  tdiv.innerHTML = element;
}
const istentudja = document.getElementById("de");
const kepek = ["kutya.jpg", "delfin.jpg", "cica.jpg"];
for (let i = 0; i < kepek.length; i++) {
  const img = document.createElement("img");
  img.src = "img/" + kepek[i];
  img.width = "500";
  istentudja.appendChild(img);
}
