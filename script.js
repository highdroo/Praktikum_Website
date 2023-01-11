const answerButton = document.getElementById("answer-button");
var answerElement = document.getElementById("answer");
var rightanswers = 0;
answerElement.style.color ="red";

answerButton.addEventListener("click", function () {
    answerElement.innerHTML = answer;

    const q1 = document.getElementsByName("q1");
    console.log(q1);
    q1.forEach((e) => {
        console.log(e);
        //e.parentElement.style.backgroundColor = (e.value == "true")? 'green':'red';
        e.parentElement.style.backgroundColor = 'transparent';

        if (e.checked == true) {
            if (e.value == "true") {
                e.parentElement.style.backgroundColor = 'green';
                rightanswers++;
            }
            else {
                e.parentElement.style.backgroundColor = 'red';
            }
        }
        answerElement.style.color= `red`;
    })


const q2 = document.getElementsByName("q2");
console.log(q2);
q2.forEach((e) => {
    console.log(e);
    //e.parentElement.style.backgroundColor = (e.value == "true")? 'green':'red';
    e.parentElement.style.backgroundColor = 'transparent';

    if (e.checked == true) {
        if (e.value == "true") {
            e.parentElement.style.backgroundColor = 'green';
            rightanswers++;
        }
        else {
            e.parentElement.style.backgroundColor = 'red';
        }
    }
})

const q3 = document.getElementsByName("q3");
console.log(q3);
q3.forEach((e) => {

    console.log(e);
    //e.parentElement.style.backgroundColor = (e.value == "true")? 'green':'red';
    e.parentElement.style.backgroundColor = 'transparent';

    if (e.checked == true) {
        if (e.value == "true") {
            e.parentElement.style.backgroundColor = 'green';
            rightanswers++;

        }
        else {
            e.parentElement.style.backgroundColor = 'red';
        }
    }
})
alert("Du hast "+rightanswers + " Frage/n richtig beantwortet");
answerElement.innerHTML ="Du Hast "+rightanswers + " Fragen richtig beantwortet"; 
rightanswers =0;


});


const clearbutton = document.getElementById("clear");
clearbutton.addEventListener("click",function(){

    const q1 = document.getElementsByName("q1");
    const antworten = document.getElementById("answer");
    console.log(q1);
    q1.forEach((e)=>{
        console.log(e);
        e.parentElement.style.backgroundColor = "transparent";

        
    
})
const q2 = document.getElementsByName("q2");
console.log(q2);
q2.forEach((e)=>{
    console.log(e);
    e.parentElement.style.backgroundColor = "transparent";

})
    const q3 = document.getElementsByName("q3");
    console.log(q3);
    q3.forEach((e)=>{
        console.log(e);
        e.parentElement.style.backgroundColor = "transparent";
        answerElement.innerHTML='';
        
        

    })

})
const hintergrundButton = document.getElementById("auswahl");
const hintergrund = document.getElementById("hintergrund")
hintergrundButton.addEventListener("click", function(){

    const q5 = document.getElementsByName("q5");
    console.log(q5);
    q5.forEach((e =>{
        console.log(e);

        if(e.checked == true){
            if (e.value == "blue"){
                hintergrund.style.backgroundColor = `#0025ed`;
            }
            else{
                hintergrund.style.backgroundColor = `#01ff00`;
            }
        }
    }))
})   	
    


const weismacher = document.getElementById("weiße");
 
weismacher.addEventListener("click", function(){
    hintergrund.style.backgroundColor = "white";
})