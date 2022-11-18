function hideload() {
    document.getElementById("loadscreen").style.display="none";
}

function showmenu() {
    document.getElementById("navlinks").style.display="block";
    document.getElementById("navhidemenu").style.display="block";
    document.getElementById("navshowmenu").style.display="none";
}

function hidemenu() {
    document.getElementById("navlinks").style.display="none";
    document.getElementById("navhidemenu").style.display="none";
    document.getElementById("navshowmenu").style.display="block";
}

function con() {
    var name = prompt("Hey bro , what's your name");
    if (name == "") {
        alert("Please Enter your name");
        var name = prompt("Hey bro , what's your name");
    } else {
        prompt("Hey " + name + " , Any Message ?");
        confirm("Thanks for visiting " + name);
    }
}
