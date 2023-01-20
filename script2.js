const känguru = document.getElementById("lokal");
console.log(känguru);

känguru.addEventListener("click", function () {
    window.location.href = "einfachso.html";

})
const koala = document.getElementById("koala_knopf");
console.log(koala);

koala.addEventListener("click", function () {
    console.log(koala)
    window.location.href = "chosen_site.html";

})





window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader-wrapper").className = "hide";
    }, 400);
    setTimeout(() => {
            alert("Da wir eine bestimmte Anzahl an Seiten bekommen haben und ich schon die max Anzahl überschritten habe schreibe ich meine Erwartungen einfach hier also ich hatte eigentlich nur 2 Erwartungen und zwar erstens das ich mehr zu css und java script lerne und zu sehen wie it firmen arbeiten")
        }, 500);
    }


const answerButton = document.getElementById("answer-button");
const answerElement = document.getElementById("answer");
var rightanswers = 0;
answerElement.style.color = "red";

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
        answerElement.style.color = `red`;
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

    setTimeout(() => {
        alert("Du hast  " + rightanswers + " Frage/n richtig beantwortet");
    }, 100);

    answerElement.innerHTML = "Du hast " + rightanswers + " Frage/n richtig beantwortet";

    setTimeout(() => {
        rightanswers = 0;
    }, 200);
});


const clearbutton = document.getElementById("clear");
clearbutton.addEventListener("click", function () {

    const q1 = document.getElementsByName("q1");
    const antworten = document.getElementById("answer");
    console.log(q1);
    q1.forEach((e) => {
        console.log(e);
        e.parentElement.style.backgroundColor = "transparent";



    })
    const q2 = document.getElementsByName("q2");
    console.log(q2);
    q2.forEach((e) => {
        console.log(e);
        e.parentElement.style.backgroundColor = "transparent";

    })
    const q3 = document.getElementsByName("q3");
    console.log(q3);
    q3.forEach((e) => {
        console.log(e);
        e.parentElement.style.backgroundColor = "transparent";
        answerElement.innerHTML = '';



    })

})
const hintergrundButton = document.getElementById("auswahl");
const hintergrund = document.getElementById("hintergrund")
hintergrundButton.addEventListener("click", function () {

    const q5 = document.getElementsByName("q5");
    console.log(q5);
    q5.forEach((e => {
        console.log(e);

        if (e.checked == true) {
            if (e.value == "blue") {
                hintergrund.style.backgroundColor = `#0025ed`;
            }
            else {
                hintergrund.style.backgroundColor = `#01ff00`;
            }
        }
    }))
})




const weismacher = document.getElementById("weiße");

weismacher.addEventListener("click", function () {
    hintergrund.style.backgroundColor = "white";
    clearInterval(interval);
})

var interval;

const randombutton = document.getElementById("random");
randombutton.addEventListener("click", function () {
    const colors = ['#f72585', '#023047', '#ff0054', '#240046', '#9ef01a', '#ff5400', '#b8dbd9', '#80b918', '#e0c3fc', '#a3b18a'];
    const regler = document.getElementById("regler");
    clearInterval(interval);
    console.log(regler);
    interval = setInterval(() => {
        var randomNumber = Math.floor(Math.random() * 10);
        //  console.log(randomNumber);

        hintergrund.style.backgroundColor = colors[randomNumber];
    }, regler.value);
});


