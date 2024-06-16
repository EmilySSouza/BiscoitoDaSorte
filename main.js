let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let imgClick = document.querySelector("#imgClick");
let anotherCookie = document.querySelector("#anotherCookie");

imgClick.addEventListener("click", handleCookieClick);
anotherCookie.addEventListener("click", handleResetClick);


function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleCookieClick(event) {
  event.preventDefault();
  toggleScreen();

  let phrase = getPhrase();
  screen2.querySelector("p").innerText = `${phrase}`
}

function handleResetClick(event) {
  event.preventDefault();
  toggleScreen();
}

function getPhrase() {
  let phrase = [
    "A felicidade não é um destino, é uma jornada.",
    "Grandes realizações são possíveis quando se acredita em si mesmo.",
    "A sorte favorece os corajosos.",
    "Cada dia é uma nova oportunidade para ser feliz.",
    "Pequenos atos de bondade podem mudar o mundo.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Siga seu coração, ele conhece o caminho",
    "A vida é 10% o que acontece com você e 90% como você reage.",
    "Uma atitude positiva pode transformar seu dia.",
    "O amor e a alegria são contagiantes, espalhe-os.",
  ];

  let randomIndex = Math.floor(Math.random() * phrase.length);
  let phraseLucky = phrase[randomIndex];
  return phraseLucky;
}