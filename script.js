const answerButton = document.getElementById("answer-button");
const answerElement = document.getElementById("answer");
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
answerElement.innerHTML ="Du Hast "+rightanswers + " Fragen richtig beantwortet"; 
rightanswers =0;

});
const clearbutton = document.getElementsById("clear");
answerElement.style.color="transparent";

answer.button.addEventListener("click",function(){

    const q1 = document.getElementsByName(q1);
    console.log(q1);
    q1.forEach((e)=>{
        console.log(e);
        if(e.style == true){
            if(e.value =="red"){}
        }
    })
})