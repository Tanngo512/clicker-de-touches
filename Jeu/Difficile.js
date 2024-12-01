const Mots=[
    
	"Le chat dort sur le canapé.",
	"J'aime lire des livres le soir.",
	"Il pleut souvent en automne ici.",
	"Les étoiles brillent dans le ciel.",
	"Nous avons mangé au restaurant hier.",
	"Elle chante une belle chanson douce.",
	"Ils jouent au parc tous les jours.",
	"La plage est calme et ensoleillée.",
	"Mon frère fait du vélo chaque matin.",
	"Les fleurs colorées embellissent le jardin.",
	"Nous regardons un film ce soir.",
	"Le gâteau est prêt pour l'anniversaire.",
	"Je vais à la bibliothèque demain.",
	"Le chien court après la balle.",
	"Les enfants rient et s'amusent ensemble.",
	"J'adore le chocolat noir et amer.",
	"Le vent souffle doucement dans les arbres.",
	"Elle a trouvé un joli coquillage.",
	"Les montagnes sont magnifiques au printemps.",
	"Nous avons visité un musée intéressant.",
	"Le café est chaud et délicieux.",
	"La neige recouvre le sol d'un blanc.",
	"Ils dansent sous les étoiles brillantes.",
	"Mon jardin est plein de légumes frais.",
	"J'écoute de la musique en travaillant.",
	"Le train part à dix heures précises.",
	"Les oiseaux chantent au lever du soleil.",
	"Elle dessine des paysages très colorés.",
	"Le film commence dans une heure.",
	"Nous partons en vacances la semaine prochaine.",
	"L’odeur du pain frais est irrésistible.",
	"Le chat chasse un petit oiseau.",
	"J'aime me promener au bord de l'eau.",
	"La pluie tombe doucement sur le sol.",
	"Ils prennent des photos de leurs voyages.",
	"Mon ami a un nouveau téléphone portable.",
	"Les étoiles filantes illuminent la nuit.",
	"Elle porte une robe rouge magnifique.",
	"Le marché est ouvert tous les samedis.",
	"Les enfants jouent à cache-cache dehors.",
	"Je vais au cinéma avec mes amis.",
	"La lune brille dans la nuit claire.",
	"Nous avons rencontré des gens sympathiques.",
	"Les livres sont une source de sagesse.",
	"Je prépare le dîner pour toute la famille.",
	"Le ciel est bleu et sans nuages.",
	"Elle a gagné le concours de dessin.",
	"Nous faisons du camping ce week-end.",
	"Les vagues s'écrasent contre les rochers.",
	"La musique adoucit les cœurs et les esprits."

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