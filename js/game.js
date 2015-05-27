//Slumpar ett ord från lista
var ordLista = ["mjauu", "malin", "banan"];
var valtOrd = ordLista[Math.floor(Math.random() * 3)];
console.log(valtOrd);

//Användaren gissar
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    var userWord = document.getElementsByTagName("input")[0].value;

    //Hämta rutor och lägg in bokstäver korrekt
    var rutor = document.getElementsByTagName("td");
    
    for(var i = 0; i < 5; i++)
    {
        rutor[i].innerHTML = userWord[i]; 
    }
    
    if(valtOrd === userWord)
    {
        alert("GRATTISSS");
    }
    else
    {
        alert("Försök igen!");
    }

})