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

        var inputDate = new Date("06/26/2021");
        if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Mon coeur, sache que\nje suis prêt à tout faire\npour te rendre heureuse.\nTu peux compter sur moi.";
            document.getElementById("r").innerHTML = "Reviens après minuit.";
        }

        var inputDate1 = new Date("06/23/2021");
        if(inputDate1.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            document.getElementById("txt").innerHTML = "Sache que j’adore te voir heureuse\net ma plus belle récompense est\nton sourire.";
        }

        var inputDate2 = new Date("06/24/2021");
        if(inputDate2.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            console.log("auj");
        }

        var inputDate3 = new Date("06/25/2021");
        if(inputDate3.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            console.log("auj");
        }

        var inputDate4 = new Date("06/26/2021");
        if(inputDate4.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            console.log("auj");
        }
    });
});