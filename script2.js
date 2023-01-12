const känguru = document.getElementById("lokal");
console.log(känguru);

känguru.addEventListener("click", function () {
    window.location.href = "einfachso.html";

})
const koala = document.getElementById("koala_knopf");
console.log(koala);

koala.addEventListener("click", function () {
    console.log(koala)
    window.location.href = "index.html";

})





window.onload = function() {
    setTimeout(() => {
      document.getElementById("loader-wrapper").className = "hide";
    }, 2000);
  }
  