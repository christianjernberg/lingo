//Slumpar ett ord från lista
var ordLista = ["mjauu", "malin", "banan"];
var valtOrd = ordLista[Math.floor(Math.random() * 3)];
console.log(valtOrd);

//Användaren gissar
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    var userWord = document.getElementsByTagName("input")[0].value;
    
    if(valtOrd === userWord)
    {
        alert("GRATTISSS");
    }
    else
    {
        alert("Försök igen!");
    }



})