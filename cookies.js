$(document).ready(function() {
    //0d1e39
    //3b4a61
    //2d97ab
    
    // If the 'hide cookie is not set we show the message
    if (!readCookie('hide')) {
      $('#quizz-page').show();
      $('#wm').hide();
    } else {
        $('#quizz-page').hide();
        $('#wm').show();
        document.getElementById("wm").innerHTML = "Les 10m ne sont toujours pas passés";
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
  function createCookie(name,value,minutes) {
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime()+(minutes*10*60*1000));
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
    first_q()
  } else {
    second_q()
  }
  if (!readCookie('q3')) {
  } else {
    second_q()
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
    document.getElementById("fq").innerHTML = "S'il fallait que je ne manges qu'une seule chose pendant un mois, ça serait quoi?";
    document.getElementById("b1").innerHTML = "Shawarma.";
    document.getElementById("b2").innerHTML = "Saucisse.";
    document.getElementById("b3").innerHTML = "Indoomie.";
    document.getElementById("b4").innerHTML = "Pizza.";
    console.log("cookies de first_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      second_q()
      $('#b1, #b2, #b4').on('click', faux_alerte);
      $("#b3").click(function() {
        third_q()
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
         forth_q()
          $('#b1, #b2, #b4').on('click', faux_alerte);
          $("#b3").click(function() {
            fifth_q()
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
    pos_q1();
    document.getElementById("fq").innerHTML = "S'il me restais une journée à vivre que ferais-je ?";
    document.getElementById("b1").innerHTML = "Baiser a mort. ";
    document.getElementById("b2").innerHTML = "Profiter de tout mon argent (120dh).";
    document.getElementById("b3").innerHTML = "Me reposer, dire au revoir au proches.";
    document.getElementById("b4").innerHTML = "Sortir comme si de rien n'étais.";
    console.log("cookies de second_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
     third_q()
      $('#b1, #b2, #b4').on('click', faux_alerte);
      $("#b3").click(function() {
        forth_q()
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          fifth_q()
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
    pos_q1();
    document.getElementById("fq").innerHTML = "Qu'est-ce que j'aimerais accomplir un jour? ";
    document.getElementById("b1").innerHTML = "Sauver 100 chats.";
    document.getElementById("b2").innerHTML = "Devenir milliardaire.";
    document.getElementById("b3").innerHTML = "Libérer la Palestine.";
    document.getElementById("b4").innerHTML = "Aider l'afrique.";
    console.log("cookies de third_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      forth_q()
      $('#b1, #b2, #b4').on('click', faux_alerte);
      $("#b3").click(function() {
        fifth_q()
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          alert("Gros gros GG à la plus belle fille du monde, demain jte ramène ton cadeaux promis.980")
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
    pos_q1();
    document.getElementById("fq").innerHTML = "Si je pouvais passer 24h avec une célébrité ça serait qui ?";
    document.getElementById("b1").innerHTML = "Nelson Mandella.";
    document.getElementById("b2").innerHTML = "Leo Messi.";
    document.getElementById("b3").innerHTML = "Elon Musk.";
    document.getElementById("b4").innerHTML = "Bill Gates.";
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
       fifth_q()
        $('#b1, #b2, #b4').on('click', faux_alerte);
        $("#b3").click(function() {
          createCookie('q6', true, 1);
          eraseCookie();
          function eraseCookie(name) {
            alert("Gros gros GG à la plus belle fille du monde, demain jte ramène ton cadeaux promis.")
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
    pos_q();
    document.getElementById("fq").innerHTML = "Si je pouvais avoir un seul pouvoir, ça serait quoi ?";
    document.getElementById("b1").innerHTML = "Télépathie.";
    document.getElementById("b2").innerHTML = "Voler.";
    document.getElementById("b3").innerHTML = "Téléportation.";
    document.getElementById("b4").innerHTML = "Indestructible.";
    console.log("cookies de fifth_q présents");
    $('#b1, #b2, #b4').on('click', faux_alerte);
    $("#b3").click(function() {
      alert("Gros gros GG à la plus belle fille du monde, demain jte ramène ton cadeaux promis.")
      createCookie('q6', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function pos_q() {
    document.getElementById("b1").style.padding = "4vw 5vw"
    document.getElementById("b2").style.padding = "4vw 5vw"
    document.getElementById("b3").style.padding = "4vw 1.7vw"
    document.getElementById("b4").style.padding = "4vw 3vw"
    document.getElementById("b1").style.left = "15vw"
    document.getElementById("b2").style.left = "55vw"
    document.getElementById("b3").style.left = "15vw"
    document.getElementById("b4").style.left = "55vw"
    document.getElementById("b1").style.top = "90vw"
    document.getElementById("b2").style.top = "90vw"
    document.getElementById("b3").style.top = "110vw"
    document.getElementById("b4").style.top = "110vw"
  }
  function pos_q1() {
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
  }
  function faux_alerte() {
    alert("T trop bête frr, att 10min.")
  }
