$(document).ready(function() {
    //0d1e39
    //3b4a61
    //2d97ab
    
    // If the 'hide cookie is not set we show the message
    if (!readCookie('hide')) {
      $('#quizz-page').show();
      $('#wm').hide();
    } else {
        $('#quizz-page').show();
        $('#wm').hide();
        document.getElementById("wm").innerHTML = "Les 24h ne sont toujours pas passés";
        console.log("cookies présents");
    }

    $('#b1, #b2, #b4').on('click', page_deleting);

    function page_deleting() {
        $('#quizz-page').hide();
        $('#wm').show();
        console.log("cookies enregistrés");
        createCookie('hide', true, 1);
        return false;
    }
  });
  
  // ---
  // And some generic cookie logic
  // ---
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

//******************************************************************************************************

  if (!readCookie('q2')) {
    third_q()
  } else {
    third_q()
  }
  if (!readCookie('q3')) {
  } else {
    third_q();
  }
  if (!readCookie('q4')) {
  } else {
    third_q();
  }
  if (!readCookie('q5')) {
  } else {
    forth_q();
  }
  if (!readCookie('q6')) {
  } else {
    fifth_q();
  }

  function first_q() {
    document.getElementById("fq").innerHTML = "Qu’est-ce qui m’inquiète le plus à l'avenir ?";
    document.getElementById("b1").innerHTML = "Mourrir.";
    document.getElementById("b2").innerHTML = "Pauvreté.";
    document.getElementById("b3").innerHTML = "Echouer.";
    document.getElementById("b4").innerHTML = "Prison.";
    console.log("cookies de first_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      document.getElementById("fq").innerHTML = "Ou j'me vois dans 25 ans ?(avec toi)";
      document.getElementById("b1").innerHTML = "Riche, grosse maison, voitures.";
      document.getElementById("b2").innerHTML = "Célibataire, dépressif.";
      document.getElementById("b3").innerHTML = "A la tete d'une grosse boite.";
      document.getElementById("b4").innerHTML = "Retraité, profite de ma fortune.";
      document.getElementById("b1").style.padding = "4vw 5vw"
      document.getElementById("b2").style.padding = "4vw 5vw"
      document.getElementById("b3").style.padding = "4vw 5vw"
      document.getElementById("b4").style.padding = "4vw 3vw"
      document.getElementById("b1").style.left = "15vw"
      document.getElementById("b2").style.left = "15vw"
      document.getElementById("b3").style.left = "15vw"
      document.getElementById("b4").style.left = "15vw"
      document.getElementById("b1").style.top = "70vw"
      document.getElementById("b2").style.top = "89vw"
      document.getElementById("b3").style.top = "107vw"
      document.getElementById("b4").style.top = "125vw"
      $('#b1, #b2, #b4').on('click', faux_alerte);
      $("#b3").click(function() {
        document.getElementById("fq").innerHTML = "Mon plus grand défaut ?";
        document.getElementById("b1").innerHTML = "Jalousie";
        document.getElementById("b2").innerHTML = "Colérique";
        document.getElementById("b3").innerHTML = "Insolent";
        document.getElementById("b4").innerHTML = "Arrogant";
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          document.getElementById("fq").innerHTML = "Pour moi, le plus important c'est :";
          document.getElementById("b1").innerHTML = "Etre populaire";
          document.getElementById("b2").innerHTML = "Etre riche";
          document.getElementById("b3").innerHTML = "Avoir la santé";
          document.getElementById("b4").innerHTML = "Etre heureux";
          $('#b1, #b2, #b4').on('click', faux_alerte);
          $("#b3").click(function() {
            document.getElementById("fq").innerHTML = "Ce que je rêvais d'être quand j'étais petit ?";
            document.getElementById("b1").innerHTML = "Astronaute";
            document.getElementById("b2").innerHTML = "Ingenieur à la Nasa";
            document.getElementById("b3").innerHTML = "Médecin";
            document.getElementById("b4").innerHTML = "Policier";
            $('#b1, #b2, #b4').on('click', faux_alerte);
            $("#b3").click(function() {
              createCookie('q6', true, 1);
              eraseCookie();
              function eraseCookie(name) {
                console.log("cookies suprrimés");
                createCookie(name,"",-1);
              }
            });
            createCookie('q5', true, 1);
            eraseCookie();
            function eraseCookie(name) {
              console.log("cookies suprrimés");
              createCookie(name,"",-1);
            }
          });
          createCookie('q4', true, 1);
          eraseCookie();
          function eraseCookie(name) {
            console.log("cookies suprrimés");
            createCookie(name,"",-1);
          }
        });
        createCookie('q3', true, 1);
        eraseCookie();
        function eraseCookie(name) {
          console.log("cookies suprrimés");
          createCookie(name,"",-1);
        }
      });
    });
  }
  function second_q() {
    document.getElementById("fq").innerHTML = "Ou j'me vois dans 25 ans ?(avec toi)";
    document.getElementById("b1").innerHTML = "Riche, grosse maison, voitures.";
    document.getElementById("b2").innerHTML = "Célibataire, dépressif.";
    document.getElementById("b3").innerHTML = "A la tete d'une grosse boite.";
    document.getElementById("b4").innerHTML = "Retraité, profite de ma fortune.";
    document.getElementById("b1").style.padding = "4vw 5vw"
    document.getElementById("b2").style.padding = "4vw 5vw"
    document.getElementById("b3").style.padding = "4vw 5vw"
    document.getElementById("b4").style.padding = "4vw 3vw"
    document.getElementById("b1").style.left = "15vw"
    document.getElementById("b2").style.left = "15vw"
    document.getElementById("b3").style.left = "15vw"
    document.getElementById("b4").style.left = "15vw"
    document.getElementById("b1").style.top = "70vw"
    document.getElementById("b2").style.top = "89vw"
    document.getElementById("b3").style.top = "107vw"
    document.getElementById("b4").style.top = "125vw"
    console.log("cookies de second_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      document.getElementById("fq").innerHTML = "Mon plus grand défaut ?";
      document.getElementById("b1").innerHTML = "Jalousie";
      document.getElementById("b2").innerHTML = "Colérique";
      document.getElementById("b3").innerHTML = "Insolent";
      document.getElementById("b4").innerHTML = "Arrogant";
      $('#b1, #b2, #b4').on('click', faux_alerte);
      $("#b3").click(function() {
        document.getElementById("fq").innerHTML = "Pour moi, le plus important c'est :";
        document.getElementById("b1").innerHTML = "Etre riche";
        document.getElementById("b2").innerHTML = "Etre riche";
        document.getElementById("b3").innerHTML = "Avoir la santé";
        document.getElementById("b4").innerHTML = "Etre heureux";
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          document.getElementById("fq").innerHTML = "Ce que je rêvais d'être quand j'étais petit ?";
          document.getElementById("b1").innerHTML = "Astronaute";
          document.getElementById("b2").innerHTML = "Ingenieur à la Nasa";
          document.getElementById("b3").innerHTML = "Médecin";
          document.getElementById("b4").innerHTML = "Policier";
          $('#b1, #b2, #b4').on('click', faux_alerte);
          $("#b3").click(function() {
            createCookie('q6', true, 1);
            eraseCookie();
            function eraseCookie(name) {
              console.log("cookies suprrimés");
              createCookie(name,"",-1);
            }
          });
          createCookie('q5', true, 1);
          eraseCookie();
          function eraseCookie(name) {
            console.log("cookies suprrimés");
            createCookie(name,"",-1);
          }
        });
        createCookie('q4', true, 1);
        eraseCookie();
        function eraseCookie(name) {
          console.log("cookies suprrimés");
          createCookie(name,"",-1);
        }
      });
      createCookie('q3', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function third_q() {
    document.getElementById("fq").innerHTML = "De quoi je suis le plus fière ?";
    document.getElementById("b1").innerHTML = "Etre têtu quand il le faut.";
    document.getElementById("b2").innerHTML = "Ma rapidité d'intelligence.";
    document.getElementById("b3").innerHTML = "Changement de caractère rapide.";
    document.getElementById("b4").innerHTML = "Toujours ambitieux.";
    document.getElementById("b1").style.padding = "4vw 5vw"
    document.getElementById("b2").style.padding = "4vw 5vw"
    document.getElementById("b3").style.padding = "4vw 1.7vw"
    document.getElementById("b4").style.padding = "4vw 3vw"
    document.getElementById("b1").style.left = "15vw"
    document.getElementById("b2").style.left = "15vw"
    document.getElementById("b3").style.left = "15vw"
    document.getElementById("b4").style.left = "15vw"
    document.getElementById("b1").style.top = "70vw"
    document.getElementById("b2").style.top = "89vw"
    document.getElementById("b3").style.top = "107vw"
    document.getElementById("b4").style.top = "125vw"
    console.log("cookies de third_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      document.getElementById("fq").innerHTML = "Si on me donnait 4 voeux, je choisirais quoi ?";
      document.getElementById("b1").innerHTML = "Avoir 10 voeux de plus.";
      document.getElementById("b2").innerHTML = "Etre riche.";
      document.getElementById("b3").innerHTML = "Avoir une bonne santé toute ma vie.";
      document.getElementById("b4").innerHTML = "Etre heureux même dans le pire.";
      document.getElementById("b1").style.padding = "4vw 5vw"
      document.getElementById("b2").style.padding = "4vw 5vw"
      document.getElementById("b3").style.padding = "4vw 1.7vw"
      document.getElementById("b4").style.padding = "4vw 3vw"
      document.getElementById("b1").style.left = "15vw"
      document.getElementById("b2").style.left = "15vw"
      document.getElementById("b3").style.left = "15vw"
      document.getElementById("b4").style.left = "15vw"
      document.getElementById("b1").style.top = "70vw"
      document.getElementById("b2").style.top = "89vw"
      document.getElementById("b3").style.top = "107vw"
      document.getElementById("b4").style.top = "125vw"
      $('#b1, #b2, #b4').on('click', faux_alerte);
      $("#b3").click(function() {
        document.getElementById("fq").innerHTML = "Qui est la chose ou personne qui t’as appris le plus de choses ?";
        document.getElementById("b1").innerHTML = "La rue.";
        document.getElementById("b2").innerHTML = "Ma mère.";
        document.getElementById("b3").innerHTML = "Mon entourage.";
        document.getElementById("b4").innerHTML = "Moi même.";
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          alert("Code à envoyer: 1980")
          createCookie('q6', true, 1);
          eraseCookie();
          function eraseCookie(name) {
            console.log("cookies suprrimés");
            createCookie(name,"",-1);
          }
        });
        createCookie('q5', true, 1);
        eraseCookie();
        function eraseCookie(name) {
          console.log("cookies suprrimés");
          createCookie(name,"",-1);
        }
      });
      createCookie('q4', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function forth_q() {
    document.getElementById("fq").innerHTML = "Si on me donnait 4 voeux, je choisirais quoi ?";
      document.getElementById("b1").innerHTML = "Avoir 10 voeux de plus.";
      document.getElementById("b2").innerHTML = "Etre riche.";
      document.getElementById("b3").innerHTML = "Avoir une bonne santé toute ma vie.";
      document.getElementById("b4").innerHTML = "Etre heureux même dans le pire.";
      document.getElementById("b1").style.padding = "4vw 5vw"
      document.getElementById("b2").style.padding = "4vw 5vw"
      document.getElementById("b3").style.padding = "4vw 1.7vw"
      document.getElementById("b4").style.padding = "4vw 3vw"
      document.getElementById("b1").style.left = "15vw"
      document.getElementById("b2").style.left = "15vw"
      document.getElementById("b3").style.left = "15vw"
      document.getElementById("b4").style.left = "15vw"
      document.getElementById("b1").style.top = "70vw"
      document.getElementById("b2").style.top = "89vw"
      document.getElementById("b3").style.top = "107vw"
      document.getElementById("b4").style.top = "125vw"
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
        document.getElementById("fq").innerHTML = "Qui est la chose ou personne qui t’as appris le plus de choses ?";
        document.getElementById("b1").innerHTML = "La rue.";
        document.getElementById("b2").innerHTML = "Ma mère.";
        document.getElementById("b3").innerHTML = "Mon entourage.";
        document.getElementById("b4").innerHTML = "Moi même.";
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          createCookie('q6', true, 1);
          eraseCookie();
          function eraseCookie(name) {
            alert("Code à envoyer: 1980")
            console.log("cookies suprrimés");
            createCookie(name,"",-1);
          }
        });
      createCookie('q5', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function fifth_q() {
    document.getElementById("fq").innerHTML = "Qui est la chose ou personne qui t’as appris le plus de choses ?";
    document.getElementById("b1").innerHTML = "La rue.";
    document.getElementById("b2").innerHTML = "Ma mère.";
    document.getElementById("b3").innerHTML = "Mon entourage.";
    document.getElementById("b4").innerHTML = "Moi même.";
    console.log("cookies de fifth_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      alert("Code à envoyer: 1980")
      createCookie('q6', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function faux_alerte() {
    alert("Faux, c qui vas attendre 24h HHHHHHHHHHHH")
  }