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
        $('#wm').show();
        document.getElementById("wm").innerHTML = "Les 24h ne sont toujours pas passés";
        console.log("cookies présents");
    }

    $('#b1, #b2, #b4').on('click', page_deleting);

    function page_deleting() {
        $('#quizz-page').hide();
        console.log("cookies enregistrés");
        createCookie('hide', true, 1)
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