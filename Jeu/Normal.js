const Mots=[
    "Chat",
    "Livre",
    "Pluie"
    ]
window.addEventListener("load",()=>{
    const inputScore = document.getElementById("Score")
    const inputMot = document.getElementById("Mot")
    const input = document.getElementById("Input")
    inputScore.innerText += localStorage.getItem("Score")
    input.addEventListener("change",(e)=>{
        console.log(e.target.value)
    })
    const length=Mots.length
    const nb=Math.round(Math.random()*(length-1))
    const Mot=Mots[nb]
    inputMot.innerText=Mot
})