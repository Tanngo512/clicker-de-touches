window.addEventListener("load",()=>{   
    console.log("load")
    localStorage.setItem("Score","0")
    console.log(localStorage.getItem("Score"))
})