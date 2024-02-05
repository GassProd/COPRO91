//export default class Formulaire {

    //définition du constructeur

    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }

    //méthode pour récupérer le div parent

    getDiv(id) {
        return document.getElementById(id).parentNode;
    }

    //méthode pour récupérer un élément

    getElement(id) {
        return document.getElementById(id);
    }

   


    isSelected(id, value, action, otherAction) {
        this.formdata = new FormData(this.formulaireHtml);
        if(this.formdata.get(id) == value) {
            action();
        }
        else {
            otherAction();
        }
    }

    //méthode pour récupérer les éléments de chaque input (et les ajouter à answer)

    getAnswers() {
        this.formdata = new FormData(this.formulaireHtml);
        this.formdata.forEach(
            (value, key) => {
                if(value != "" && value != "on") {
                    this.answers.push([key, value]);
                }
            }
        )
        return this.answers
    }

    //MÉTHODE POUR AFFICHER DANS UN ALERT LES RÉSULTATS

    affAnswers() {
        let chaine = "Récapitulatif\n\n";
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne [0]} : ${ligne[1]}\n`
        }
        alert(chaine);
    }
}



