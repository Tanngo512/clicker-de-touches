const Mots=[

    "Chat",  
	"Livre",  
	"Pluie",  
	"Montagne",  
	"Soleil",  
	"Étoile",  
	"Voyage",  
	"Liberté",  
	"Bonheur",  
	"Chanson",  
	"Amitié",  
	"Oiseau",  
	"Jardin",  
	"Musique",  
	"École",  
	"Parfum",  
	"Saison",  
	"Douceur",  
	"Écriture",  
	"Serpent",  
	"Poisson",  
	"Famille",  
	"Cheval",  
	"Nuage",  
	"Fantôme",  
	"Cascade",  
	"Arbre",  
	"Couleur",  
	"Océan",  
	"Rêverie",  
	"Mystère",  
	"Lune",


    ]
window.addEventListener("load",()=>{
    var Score
    if (localStorage.getItem("Score")===null){
        Score=0
        localStorage.setItem("Score","0")
    } else {
        Score=localStorage.getItem("Score")
    }
    const inputScore = document.getElementById("Score")
    const inputMot = document.getElementById("Mot")
    const input = document.getElementById("Input")
    const length=Mots.length
    const nb=Math.round(Math.random()*(length-1))
    const Mot=Mots[nb]
    inputMot.innerText=Mot
    inputScore.innerText += Score
    input.addEventListener("change",(e)=>{
        if  (e.target.value===Mot){
             victory()
        } else {
            if (e.target.value.length>=Mot.length){
                e.target.value=""
            }
            
        }
        console.log(e.target.value)
    })
})
function victory(){
    const OldScore=localStorage.getItem("Score")
    const NewScore=parseInt(OldScore)+1
    localStorage.setItem("Score",NewScore.toString())
    if (NewScore===25){
        window.location.replace("file:///C:/Users/safwa/Documents/Cours_Inf/clicker-de-touches/Victory.html")
    } else {
        window.location.reload()
    }
}