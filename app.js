$(document).ready(function() {
    $("#sp-arrow").click(function() {
        document.getElementById("main-page").style.visibility = "visible";
        document.getElementById("second-page").style.visibility = "hidden";
        document.getElementById("sp-arrow").style.visibility = "hidden";
    });
    $("#firstbody").click(function() {
        document.getElementById("main-page").style.visibility = "hidden";
        document.getElementById("second-page").style.visibility = "visible";
        document.getElementById("sp-arrow").style.visibility = "visible";

        var dt = new Date();
        document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

        var todaysDate = new Date();

        var inputDate = new Date("06/29/2021");
        if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Mon coeur, sache que\nje suis prêt à tout faire\npour te rendre heureuse.\nTu peux compter sur moi.";
            document.getElementById("r").innerHTML = "Reviens après minuit.";
            console.log("test")
        }

        var inputDate1 = new Date("06/30/2021");
        if(inputDate1.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Sache que j’adore te voir heureuse\net ma plus belle récompense est\nton sourire.";
            document.getElementById("r").innerHTML = "Wallah c'est vrai.";
        }

        var inputDate2 = new Date("06/01/2021");
        if(inputDate2.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Les mots ne peuvent pas vraiment\nexprimer à quel point je te trouve belle,\nattirante, intelligente et drôle.\nTu es parfaitement parfaite.";
            document.getElementById("r").innerHTML = "C'est donc ça l'amour.";
        }

        var inputDate3 = new Date("07/02/2021");
        if(inputDate3.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Merci de m’aimer tel que je suis.\nJe te promets que je vais faire tout mon\npossible pour faire de toi la femme\nla plus heureuse au monde.";
            document.getElementById("r").innerHTML = "Tkt mon coeur.";
        }

        var inputDate4 = new Date("07/03/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Code pour recevoir le nude de ton choix.<br>Code: 2708";
            document.getElementById("r").innerHTML = "Jss jte copie mais trkl.";
        }
        
        var inputDate4 = new Date("07/04/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Je ne suis vraiment pas un artiste professionnel\n mais je peux sans problème nous imaginer\n ensemble pour le reste de notre vie.";
            document.getElementById("r").innerHTML = "Jss jte copie mais trkl.";
        }

        var inputDate4 = new Date("07/05/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Code pour recevoir le nude de ton choix.<br>Code: 2888";
            document.getElementById("r").innerHTML = "HHHHH pas trop dure stp.";
        }
    });

    $("#secondbody").click(function() {
        $("#tp-arrow").click(function() {
            document.getElementById("main-page").style.visibility = "visible";
            document.getElementById("third-page").style.visibility = "hidden";
            document.getElementById("tp-arrow").style.visibility = "hidden";
            $('#third-page').hide();
            $('#pre').hide();
            $('#pre1').hide();
            
        });
        $('#third-page').show();
        document.getElementById("main-page").style.visibility = "hidden";
        document.getElementById("third-page").style.visibility = "visible";
        document.getElementById("tp-arrow").style.visibility = "visible";
        document.getElementById("pre").style.visibility = "visible";
        document.getElementById("b1").style.visibility = "visible";
        document.getElementById("b2").style.visibility = "visible";
        document.getElementById("b3").style.visibility = "visible";
        document.getElementById("b4").style.visibility = "visible";


        var todaysDate = new Date();

        var inputDate = new Date("06/29/2021");
        if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("nbd").innerHTML = "Nombre d'essais restant :<br>10/10"
            document.getElementById("pre").innerHTML = "J'éspere que t'es prete fraté.<br> C'est pas un quizz de bébé,<br>j'tle dis...";
            document.getElementById("pre1").innerHTML = "Allez on commence !!!";
            document.getElementById("fq").innerHTML = "Comment s'appelle mon<br>frére ?";
            document.getElementById("b1").innerHTML = "Kamal";
            document.getElementById("b2").innerHTML = "Mohamed";
            document.getElementById("b3").innerHTML = "Mohamed Kamal";
            document.getElementById("b4").innerHTML = "Mohamed Kamal Issam";
    
            $("#b1").click(function() {
                alert("Faut, c qui qui vas attendre 24h ?");
            });
            $("#b2").click(function() {
                alert("Faut, c qui qui vas attendre 24h ?");
            });
            //vrai------------------------------------
            $("#b3").click(function() {
               alert("HHHHH jcroyais t'allais pas l'avoir juste, j'ai toujour pas fais lautre partie du quizz.")
            });
            $("#b4").click(function() {
                alert("Faut, c qui qui vas attendre 24h ?");
            });

            if($('#pre').is(':visible')){
                setTimeout( function(){ 
                    document.getElementById("pre").style.visibility = "visible";
                    document.getElementById("pre").style.opacity = "0";
                    document.getElementById("pre").style.top = "-20";
                    document.getElementById("pre").style.left = "-1";
                    console.log("1");

                }, 0500 );
                setTimeout( function(){ 
                    document.getElementById("pre").style.visibility = "visible";
                    document.getElementById("pre").style.opacity = "1";
                    document.getElementById("pre").style.top = "5";
                    document.getElementById("pre").style.left = "-1";
                    console.log("1");
                }, 1000 );
                setTimeout( function(){ 
                    document.getElementById("pre").style.visibility = "visible";
                    document.getElementById("pre").style.opacity = "0";
                    document.getElementById("pre").style.top = "5";
                    document.getElementById("pre").style.left = "100";
                    console.log("1");
                }, 5000 );
            }
            
            if($('#redscreen').is(':visible')){
                setTimeout( function(){ 
                    document.getElementById("redscreen").style.visibility = "hidden";
                }, 3000 );
            }
            if($('#greenscreen').is(':visible')){
                setTimeout( function(){ 
                    document.getElementById("greenscreen").style.visibility = "hidden";
                }, 3000 );
            }
    
            setTimeout( function(){ 
                document.getElementById("pre1").style.opacity = "1";
            }, 7000 );
            setTimeout( function(){ 
                document.getElementById("pre1").style.opacity = "0";
            }, 10000 );
            setTimeout( function(){ 
                document.getElementById("nbd").style.opacity = "1";
            }, 11500);
            setTimeout( function(){ 
                document.getElementById("fq").style.opacity = "1";
                document.getElementById("b1").style.visibility = "visible";
                document.getElementById("b2").style.visibility = "visible";
                document.getElementById("b3").style.visibility = "visible";
                document.getElementById("b4").style.visibility = "visible";
                document.getElementById("b1").style.opacity = "1";
                document.getElementById("b2").style.opacity = "1";
                document.getElementById("b3").style.opacity = "1";
                document.getElementById("b4").style.opacity = "1";
            }, 12000 );
        }
    
        var inputDate1 = new Date("06/23/2021");
        if(inputDate1.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("pre").innerHTML = "Sache que j’adore te voir heureuse\net ma plus belle récompense est\nton sourire.";
        }
    
        var inputDate2 = new Date("06/24/2021");
        if(inputDate2.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            console.log("pre");
        }
    
        var inputDate3 = new Date("06/25/2021");
        if(inputDate3.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            console.log("pre");
        }
    
        var inputDate4 = new Date("06/26/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            console.log("pre");
        }
    });
    $("#thirdbody").click(function() {
        document.getElementById("main-page").style.visibility = "hidden";
        document.getElementById("fourth-page").style.visibility = "visible";
        document.getElementById("fp-arrow").style.visibility = "visible";

        $("#fp-arrow").click(function() {
            document.getElementById("main-page").style.visibility = "visible";
            document.getElementById("fourth-page").style.visibility = "hidden";
            document.getElementById("fp-arrow").style.visibility = "hidden";
            document.body.style.position = "fixed"; 
        });
        document.getElementById("f-title").innerHTML = "Pour nos 1 mois.";
        document.getElementById("f-txt").innerHTML = "Aujourd'hui, c'est notre premier mois. Oui, on sort ensemble depuis un mois. Un mois merveilleux. Est ce qu'on dirait que ça fait 4 ans ? oui oui oui. Un mois avec toi, ça m'a rendu si heureux,n'imagine même pas à quel point j'aimerais qu'il en soit de même pour toi. En un mois tu m'as calmer,tu m'as aimé, tu m'as tout donné, et j'en suis énormément reconaissant. Merci pour ton Amour, pour ta Sincérité, ta Patience, ta Gentillesse, bref merci pour Toi. Je nous souhaite un couple heureux, simple, et fidéle. Je ne te lacherais jamais quoi qu'il arrive, c'est une prommesse.Joyeux 1 mois mon amour.<br>La lune est belle.";
        
        document.body.style.position = "absolute"; 
    });
  
});