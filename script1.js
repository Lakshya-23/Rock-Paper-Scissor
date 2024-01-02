let cresult,presult;
let player_score = 0;
let computer_score = 0;
let potp,cotp;
function computerchoice(){
    let a;
    a = Math.floor(Math.random()*3);   //floor returns decresed no. | ceil returns higher no.
                                         // floor- (1.24)=(1),(-1.24)=(-2) | ceil-(1.24)=2 ,(-1.24)=(-1)
                                   //for 1,2,3 outpul use ceil
    switch(a){
        case 0:
            cotp = "👊"
            return "rock";
        case 1:
            cotp="🖐"
            return "paper";
        case 2:
            cotp="✌"
            return "scissor";          
    }                      
}

// alert("First to Score 5 Points Wins");

const rock_inp = document.querySelector(".rock");
const paper_inp = document.querySelector(".paper");
const scissor_inp = document.querySelector(".scissor");

rock_inp.addEventListener("click",function(){
    presult="rock";
    potp="👊"
    cresult=computerchoice();
    main(cresult,presult);
})
paper_inp.addEventListener("click",function(){
    potp="🖐"
    presult="paper";
    cresult=computerchoice();
    main(cresult,presult);
})
scissor_inp.addEventListener("click",function(){
    presult="scissor";
    potp="✌"
    cresult=computerchoice();
    main(cresult,presult);
})
// if(i==5){
//     let b=prompt("Do you want to play again?");
//     if(b=="y"||b=="yes"){
//         location.reload();
//     }else{
//         alert("Nice Playing with you");
//     }
// }

const resetbttn = document.getElementById("resetbutton");

resetbttn.addEventListener("click",function(){
    location.reload();
})



function main(cresult,presult){
    console.log(cresult);
    console.log(presult);
    
    document.querySelector(".pemoji").textContent=potp;
    document.querySelector(".cemoji").textContent=cotp;


                        //code will be shorter with if else
    switch(true){
        case (cresult==presult):
            document.getElementById("result").textContent ="It's a draw"
            cresult=computerchoice();
            break;
        case (cresult=="paper" && presult=="scissor"):
            document.getElementById("result").textContent ="Player Wins"
            cresult=computerchoice();
            player_score+=1;
            document.querySelector(".pscore").textContent = player_score;
            break;
        case (cresult=="paper" && presult=="rock"):
            document.getElementById("result").textContent ="Computer Wins"
            cresult=computerchoice();
            computer_score+=1;
            document.querySelector(".cscore").textContent=computer_score;
            break;
        case (cresult=="rock" && presult=="paper"):
            document.getElementById("result").textContent ="Player wins"
            cresult=computerchoice();
            player_score+=1;
            document.querySelector(".pscore").textContent = player_score;
            break;
        case (cresult=="rock" && presult=="scissor"):
            document.getElementById("result").textContent ="Computer wins"
            cresult=computerchoice();
            computer_score+=1;
            document.querySelector(".cscore").textContent=computer_score;
            break;
        case (cresult=="scissor" && presult=="paper"):
            document.getElementById("result").textContent ="Computer wins"
            cresult=computerchoice();
            computer_score+=1;
            document.querySelector(".cscore").textContent=computer_score;
            break;
        case (cresult=="scissor" && presult=="rock"):
            document.getElementById("result").textContent ="Player Wins"
            cresult=computerchoice();
            player_score+=1;
            document.querySelector(".pscore").textContent = player_score;
            break;

    }
}


