let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","blue","green"];

let started = false;
let level = 0;

let h2= document.querySelector("h2");


document.addEventListener("keypress", function(){
   if(started == false){
    console.log("Game Started !!");
    started = true;

    levelUp();
   }
});


// ------------button glow or flash -------------------
function gameFlash(btn){  
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},300);
}
//-------------------user clicking the button: their style changes -----------------
function userFlash(btn){  
    btn.classList.add("userflash");
  
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
    }
// -------------------------level up the game ------------
function levelUp(){
    userSeq =[];
    level++;
    h2.innerText =`Level - ${level}`;

    // random button choose 
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(`random idx = ${randIdx} ran color = ${randColor} `);
    // console.dir(randBtn);

    gameFlash(randBtn);
}

// ------------------function that check the clicked buttons ---------------------------
function checkResult(index){
    if(userSeq[index] === gameSeq[index]){
     
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,700);
            console.log("Next level !!")
        } 
    }else{
        h2.innerHTML =`Game Over ! Your Score : <b>${level} </b> </br> Press any key to start !`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },100);
        reset ();
    }

}

// ---------------button press hone ke bad kya kaam hona chahiye 
function btnPress(){
    let btn = this;
   
    userFlash(btn);

     let userColor = btn.getAttribute("id");
      userSeq.push(userColor);
    // console.log(userSeq);

    checkResult(userSeq.length-1);

}
//---------------------
let allBtns = document.querySelectorAll(".eachBox");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// -----------------------reset the game after the game over !!-----------------------
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}