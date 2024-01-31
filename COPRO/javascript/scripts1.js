const mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", () => {
  alert("Vous avez cliqué sur le bouton");
});

//Voici un exemple de code JavaScript qui écoute l'événement keyup pour détecter quand l'utilisateur a appuyé sur la touche « Entrée » :
const input = document.getElementById("myinput");
input.addEventListener("keyup", function (event){
  if (event.key === "Enter"){
    alert("Vous avez appuyé sur la touche Entrée");
  }
  else {
    alert(myinput.value);
  }
}); // Add closing parenthesis here

