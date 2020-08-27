// Here is come Question Included.
const questHere = [
    {quest: "What is the capital of Nepal?",
     option: ["Kathmandu","Rupandehi","Limpiyadhura","Pokhara"],
     correct: 0},
    {quest: "Who is the primeminister of Nepal?",
     option: ["KP Oli","Bibek Adhikari","Bamdev Gautam","Hello Prasad"],
     correct: 1},
    {quest: "Which is the longest river in the world?",
    option: ["Nile","Karnali","Banganga","Tinau"],
    correct: 0},
    {quest: "Which is the longest river in Nepal?",
    option: ["Karnali","Nile","Narayani","Tinau"],
    correct: 1}
]

console.log("the Length is ",questHere.length)
    

const quest = document.getElementById('questHere');
quest.innerHTML = questHere[0].quest;
const option1 = document.getElementById('1');
const option2 = document.getElementById('2');
const option3 = document.getElementById('3');
const option4 = document.getElementById('4');
option1.innerHTML = questHere[0].option[0];
option2.innerHTML = questHere[0].option[1];
option3.innerHTML = questHere[0].option[2];
option4.innerHTML = questHere[0].option[3];
let i = 1;
function startedGame () {
        
    if (i < questHere.length){      
            nextGame(i);
        }else
        {
            finished();
        }
        i++;
}
function nextGame (i) {

    quest.innerHTML = questHere[i].quest;
    option1.innerHTML = questHere[i].option[0];
    option2.innerHTML = questHere[i].option[1];
    option3.innerHTML = questHere[i].option[2];
    option4.innerHTML = questHere[i].option[3];


    bgButton1.style.backgroundColor = "white";
    bgButton2.style.backgroundColor = "white";
    bgButton3.style.backgroundColor = "white";
    bgButton4.style.backgroundColor = "white";


}


//  The controls start from here.


const bgButton1 = document.getElementById('1');
const bgButton2 = document.getElementById('2');
const bgButton3 = document.getElementById('3');
const bgButton4 = document.getElementById('4');

        let total = 0;
        let choosen = 0;
        let questValue = 0;
        const one = () => {
            choosen = choosen+0;
            if (choosen === questHere[0].correct){
            bgButton1.style.backgroundColor = "rgba(36, 242, 36, 0.8)";
            total = total + 1;
            }else{
                bgButton1.style.backgroundColor = "red";
            }
            choosen = 0;

        }
        const two = () => {
            choosen = choosen+1;
            if (choosen === questHere[0].correct){
                bgButton2.style.backgroundColor = "rgba(36, 242, 36, 0.8)";
                total = total + 1;
                }else{
                    bgButton2.style.backgroundColor = "red";
                }
            choosen = 0;
        }
        const three = () => {
            choosen = choosen+2;
            if (choosen === questHere[0].correct){
                bgButton3.style.backgroundColor = "rgba(36, 242, 36, 0.8)";
                total = total + 1;
                }else{
                    bgButton3.style.backgroundColor = "red";
                }
            choosen = 0;
            
        }
        const four = () => {
            if (choosen === questHere[0].correct === choosen){
                bgButton4.style.backgroundColor = "rgba(36, 242, 36, 0.8)";
                total = total + 1;
                }else{
                    bgButton4.style.backgroundColor = "red";
                }
            choosen = 0;
            
        }

const scoreHere = document.getElementById('scoreHere');
function finished(){
    scoreHere.innerHTML = "Congratulations, the Game has been finished.";
}