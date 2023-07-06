const homeEl = document.getElementById("home-el")
const guestEl = document.getElementById("guest-el")

const firstHomeScore = document.getElementById("firstHomeScore")
const firstGuestScore = document.getElementById("firstGuestScore")

const secondHomeScore = document.getElementById("secondHomeScore")
const secondGuestScore = document.getElementById("secondGuestScore")

const thirdHomeScore = document.getElementById("thirdHomeScore")
const thirdGuestScore = document.getElementById("thirdGuestScore")

const fourthHomeScore = document.getElementById("fourthHomeScore")
const fourthGuestScore = document.getElementById("fourthGuestScore")




//declaration of initial score values & quarter conditioning factor

let homeScore = 0
let guestScore = 0
let quaterFactor =1

//add homescore logic

function homeAdd1(){
    homeScore += 1
    homeEl.textContent = homeScore
}
function homeAdd2(){
    homeScore += 2
    homeEl.textContent = homeScore
}
function homeAdd3(){
    homeScore += 3
    homeEl.textContent = homeScore
}

//add guestScore logic

function guestAdd1(){
    guestScore += 1
    guestEl.textContent = guestScore
}
function guestAdd2(){
    guestScore += 2
    guestEl.textContent = guestScore
}
function guestAdd3(){
    guestScore += 3
    guestEl.textContent = guestScore
}

//save quarter logic

function saveScore(){
    if (quaterFactor===1){
        quaterFactor = quaterFactor + 1
        firstHomeScore.textContent = homeScore
        firstGuestScore.textContent = guestScore
        
    }else if(quaterFactor===2){
        quaterFactor = quaterFactor + 1
        secondHomeScore.textContent = homeScore
        secondGuestScore.textContent = guestScore
        
    }else if(quaterFactor===3){
        quaterFactor = quaterFactor + 1
        thirdHomeScore.textContent = homeScore
        thirdGuestScore.textContent = guestScore
        
    }else if(quaterFactor===4){
        quaterFactor = quaterFactor + 1
        fourthHomeScore.textContent = homeScore
        fourthGuestScore.textContent = guestScore
    }
}
// Reset button logic

function reset(){
    homeEl.textContent = 0
    guestEl.textContent=0
    
    homeScore = 0
    guestScore=0
    
    firstHomeScore.textContent = 0
    firstGuestScore.textContent = 0
    
     secondHomeScore.textContent = 0
     secondGuestScore.textContent = 0
     
     thirdHomeScore.textContent = 0
     thirdGuestScore.textContent = 0
     
     fourthHomeScore.textContent = 0
     fourthGuestScore.textContent = 0
    
}





