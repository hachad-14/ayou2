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
            document.getElementById("txt").innerHTML = "Sache que j’adore te voir heureuse\net ma plus belle récompense est\nton sourire.";
            document.getElementById("r").innerHTML = "Wallah c'est vrai.";
        }

        var inputDate1 = new Date("06/30/2021");
        if(inputDate1.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Sache que j’adore te voir heureuse\net ma plus belle récompense est\nton sourire.";
            document.getElementById("r").innerHTML = "Wallah c'est vrai.";
        }

        var inputDate2 = new Date("07/01/2021");
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
        var inputDate4 = new Date("07/07/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "J’ai trouvé en toi tout ce qui me manquait.<br>J’ai de la chance d’être avec toi.";
            document.getElementById("r").innerHTML = "Je t'en remercie.";
        }
        var inputDate4 = new Date("07/08/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Être avec toi pour moi est le synonyme de bonheur,<br>je te veux avec moi pour toujours.";
            document.getElementById("r").innerHTML = "Ettt oue.";
        }
        var inputDate4 = new Date("07/09/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "J’ai mis du temps à trouver la perfection et je ne suis pas prêt à te laisser partir. Fais-toi à l’idée que tu es coincée avec moi pour le reste de tes jours.";
            document.getElementById("r").innerHTML = "C'étais très dure mais cv.";
        }
        var inputDate4 = new Date("07/10/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = " Je t’aimerai toujours pour ce que tu es. Ce qui est à l’intérieur est bien plus important. Le fait que tu sois magnifique n’est qu’un bonus !";
            document.getElementById("r").innerHTML = "Jte jure c'est vrai.";
        }
        var inputDate4 = new Date("07/11/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Code pour le gage de ton choix.<br>Code: 0505";
            document.getElementById("r").innerHTML = "HHHHH pas trop dure stp.";
        }
        var inputDate4 = new Date("07/12/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Mon coeur chante et danse quand je pense à toi.";
            document.getElementById("r").innerHTML = "Petit romantique que je suis.";
        }
        var inputDate4 = new Date("07/19/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Explorer les étoiles, parcourir le monde, survoler le ciel, s’endormir au paradis… Tout cela fait rêver. Mais toi, toi tu dépasses le rêve.";
            document.getElementById("r").innerHTML = "C'est pas Google tkt.";
        }
        var inputDate4 = new Date("07/20/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Je choisirais toujours de passer un bref instant avec toi sur cette terre plutôt qu’une éternité au paradis.";
            document.getElementById("r").innerHTML = "Oui je mens, et ?";
        }
        var inputDate4 = new Date("07/21/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Code pour recevoir le nude de ton choix.<br>Code: 2888";
            document.getElementById("r").innerHTML = "HHHHH pas trop dure stp.";
        }
        var inputDate4 = new Date("07/22/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Code pour recevoir le nude de ton choix.<br>Code: 2888";
            document.getElementById("r").innerHTML = "HHHHH pas trop dure stp.";
        }
        var inputDate4 = new Date("07/23/2021");
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

        var inputDate = new Date("07/19/2021");
        if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("nbd").innerHTML = "Nombre d'essais restant :<br>9/10"
            document.getElementById("pre").innerHTML = "Quizz enfin réparé,<br>tkt pas ça m'as pas pris 2j.<br>";
            document.getElementById("pre1").innerHTML = "Allez on commence !!!";
    
            //$("#b1").click(function() {
            //    alert("FAUXg, c qui qui vas attendre 24h ?");
            //    $('#wm').show();
            //});
            //$("#b2").click(function() {
            //    alert("FAUX, c qui qui vas attendre 24h ?");
            //    $('#wm').show();
            //});
            //vrai------------------------------------
            $("#b3").click(function() {
                createCookie('q2', true, 1);
            });
            //$("#b4").click(function() {
            //    alert("FAUX, c qui qui vas attendre 24h ?");
            //    $('#wm').show();
            //});

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
        document.getElementById("f-title").innerHTML = "Pour nos 2 mois.";
        document.getElementById("f-txt").innerHTML = "Aujourd'hui, c'est nos deux mois. Oui, moi aussi je n'arrive pas à y croire. Deux putain de gros mois en te supportant, écoute je profite de l'occasion pour te dire que... je casse. Non plus sérieusement mon coeur, ces deux mois ça a été les deux mois les plus beaux de ma vie en étant en couple, je le redis; je sais pas ce que jai fais pour te mériter, t'es tellement bénéfique pour moi, tu m'apportes la joix, le bonheur, et tout ce qu'il y'a de plus bon sur cette terre et j'éspère ètre aussi bénèfique pour toi, et aussi je continuerais à m'améliorer. Bref à nos deux mois, à nous.<br>La lune est putainement belle.";
        
        document.body.style.position = "absolute"; 
    });
  
});
