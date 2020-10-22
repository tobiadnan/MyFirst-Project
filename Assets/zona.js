var nama = prompt("Siapa nama kamu?", "");
alert("Assalamualaikum Hai "+nama+" selamat datang di ZONA SHOLAWAT");

var intro = document.getElementById("intro");
setInterval(function() {
    intro.style.color="red";
    setTimeout(function (){
        intro.style.color="white";
    }, 500)
}, 700);

var footer = document.getElementById("hakcipta");
setInterval(function() {
    footer.style.color="red";
    setTimeout(function (){
        footer.style.color="white";
    }, 300)
}, 700);

var bgColor = document.getElementById('bg-color');
bgColor.addEventListener("change", (event) => {
    document.body.style.backgroundColor = bgColor.value;
});

var background = document.getElementById("bg");
setInterval(function() {
    background.style.color="red";
    setTimeout(function (){
        background.style.color="black";
        setTimeout(function (){
            background.style.color="blue";
        },500)
    }, 300)
}, 700);