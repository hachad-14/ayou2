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
    first_q();
  } else {
    second_q();
  }
  if (!readCookie('q3')) {
    console.log("");
  } else {
    third_q();
  }
  if (!readCookie('q4')) {
    console.log("");
  } else {
    third_q();
  }
  if (!readCookie('q5')) {
    console.log("");
  } else {
    forth_q();
  }

  function first_q() {
    document.getElementById("fq").innerHTML = "Quel est mon type de<br>film préféré ?";
    document.getElementById("b1").innerHTML = "Fantastique";
    document.getElementById("b2").innerHTML = "Policier";
    document.getElementById("b3").innerHTML = "Aventure";
    document.getElementById("b4").innerHTML = "Horreur";
    console.log("cookies de first_q présents");
    $("#b3").click(function() {
      location.reload(); 
    });
  }
  function second_q() {
    document.getElementById("fq").innerHTML = "Quelles est ma série préférée ?";
    document.getElementById("b1").innerHTML = "La casa de papel";
    document.getElementById("b2").innerHTML = "Sherlock";
    document.getElementById("b3").innerHTML = "Narcos";
    document.getElementById("b4").innerHTML = "Game of thrones";
    console.log("cookies de second_q présents");
    $("#b3").click(function() {
      location.reload(); 
      createCookie('q3', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function third_q() {
    document.getElementById("fq").innerHTML = "Mon plus grand défaut ?";
    document.getElementById("b1").innerHTML = "Jalousie";
    document.getElementById("b2").innerHTML = "Colérique";
    document.getElementById("b3").innerHTML = "Insolent";
    document.getElementById("b4").innerHTML = "Arrogant";
    console.log("cookies de third_q présents");
    $("#b1").click(function() {
      location.reload(); 
      createCookie('q4', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function forth_q() {
    document.getElementById("fq").innerHTML = "Quelles est ma série préférée ?";
    document.getElementById("b1").innerHTML = "La casa de papel";
    document.getElementById("b2").innerHTML = "Sherlock";
    document.getElementById("b3").innerHTML = "Narcos";
    document.getElementById("b4").innerHTML = "Game of thrones";
    console.log("cookies de forth_q présents");
    $("#b3").click(function() {
      location.reload(); 
      createCookie('q5', true, 1);
      eraseCookie();
      function eraseCookie(name) {
        console.log("cookies suprrimés");
        createCookie(name,"",-1);
      }
    });
  }
  function fifth_q() {
    document.getElementById("fq").innerHTML = "Quelles est ma série préférée ?";
    document.getElementById("b1").innerHTML = "La casa de papel";
    document.getElementById("b2").innerHTML = "Sherlock";
    document.getElementById("b3").innerHTML = "Narcos";
    document.getElementById("b4").innerHTML = "Game of thrones";
    console.log("cookies de fifth_q présents");
  }