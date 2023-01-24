const dice = document.getElementById("dice")
const adviceText = document.querySelector(".advice-text");
const adviceId = document.getElementById("advice-id")

const showQuote = async() => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceId.innerHTML = `A D V I C E # ${data.slip.id}`
    adviceText.innerHTML = `"${data.slip.advice}"`
}
dice.addEventListener("click",() => showQuote())