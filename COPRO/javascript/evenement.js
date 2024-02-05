function TypeProfile() {
    let profil = document.forms["form1"].profil.value;
    if (profil === "administrateur") {
      window.location.href = "../html/form2.html";
    } else if (profil === "proprietaire") {
      window.location.href = "../html/form2.html";
    } else {
      window.location.href = "../html/form3.html";
    }
  }