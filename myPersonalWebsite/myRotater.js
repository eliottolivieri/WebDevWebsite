
function mouseOverBlue() {

    document.getElementById("tranCircle").style.borderColor = "blue";

    document.getElementById("line1").style.animationPlayState="running";
    document.getElementById("line1").style.animation="spin180Plus .5s ease-in-out";
    document.getElementById("line1").style.WebkitAnimation="spin180Plus .5s ease-in-out";
    document.getElementById("line1").style.MozAnimation="spin180Plus .5s ease-in-out";    
    document.getElementById("line1").style.animationIterationCount="1";

    document.getElementById("line6").style.animation="spin180Plus .5s ease-in-out";
    document.getElementById("line6").style.WebkitAnimation="spin180Plus .5s ease-in-out";
    document.getElementById("line6").style.MozAnimation="spin180Plus .5s ease-in-out";    
    document.getElementById("line6").style.animationIterationCount="1";

    document.getElementById("line3").style.animation="spin .5s ease-in-out";
    document.getElementById("line3").style.WebkitAnimation="spin .5s ease-in-out";
    document.getElementById("line3").style.MozAnimation="spin .5s ease-in-out";    
    document.getElementById("line3").style.animationIterationCount="1";

    document.getElementById("line4").style.animation="spin .5s ease-in-out";
    document.getElementById("line4").style.WebkitAnimation="spin .5s ease-in-out";
    document.getElementById("line4").style.MozAnimation="spin .5s ease-in-out";    
    document.getElementById("line4").style.animationIterationCount="1";

    document.getElementById("line2").style.animation="spin120Plus .5s ease-in-out";
    document.getElementById("line2").style.WebkitAnimation="spin120Plus .5s ease-in-out";
    document.getElementById("line2").style.MozAnimation="spin120Plus .5s ease-in-out";    
    document.getElementById("line2").style.animationIterationCount="1";

    document.getElementById("line5").style.animation="spin120Plus .5s ease-in-out";
    document.getElementById("line5").style.WebkitAnimation="spin120Plus .5s ease-in-out";
    document.getElementById("line5").style.MozAnimation="spin120Plus .5s ease-in-out";    
    document.getElementById("line5").style.animationIterationCount="1";

    document.getElementById("cross1").style.animation="spin .5s ease-in-out";
    document.getElementById("cross1").style.WebkitAnimation="spin .5s ease-in-out";
    document.getElementById("cross1").style.MozAnimation="spin .5s ease-in-out";    
    document.getElementById("cross1").style.animationIterationCount="1";

    document.getElementById("cross4").style.animation="spin .5s ease-in-out";
    document.getElementById("cross4").style.WebkitAnimation="spin .5s ease-in-out";
    document.getElementById("cross4").style.MozAnimation="spin .5s ease-in-out";    
    document.getElementById("cross4").style.animationIterationCount="1";

    document.getElementById("cross2").style.animation="spin180Plus .5s ease-in-out";
    document.getElementById("cross2").style.WebkitAnimation="spin180Plus .5s ease-in-out";
    document.getElementById("cross2").style.MozAnimation="spin180Plus .5s ease-in-out";    
    document.getElementById("cross2").style.animationIterationCount="1";

    document.getElementById("cross6").style.animation="spin180Plus .5s ease-in-out";
    document.getElementById("cross6").style.WebkitAnimation="spin180Plus .5s ease-in-out";
    document.getElementById("cross6").style.MozAnimation="spin180Plus .5s ease-in-out";    
    document.getElementById("cross6").style.animationIterationCount="1";

    document.getElementById("cross3").style.animation="spin120Plus .5s ease-in-out";
    document.getElementById("cross3").style.WebkitAnimation="spin120Plus .5s ease-in-out";
    document.getElementById("cross3").style.MozAnimation="spin120Plus .5s ease-in-out";    
    document.getElementById("cross3").style.animationIterationCount="1";

    document.getElementById("cross5").style.animation="spin120Plus .5s ease-in-out";
    document.getElementById("cross5").style.WebkitAnimation="spin120Plus .5s ease-in-out";
    document.getElementById("cross5").style.MozAnimation="spin120Plus .5s ease-in-out";    
    document.getElementById("cross5").style.animationIterationCount="1";


}

function mouseOutBlue(){
    document.getElementById("tranCircle").style.borderColor = "red";
    document.getElementById("line1").style.animationPlayState="paused";
    document.getElementById("line6").style.animationPlayState="paused";
    document.getElementById("line3").style.animationPlayState="paused";
    document.getElementById("line4").style.animationPlayState="paused";
    document.getElementById("line2").style.animationPlayState="paused";
    document.getElementById("line5").style.animationPlayState="paused";
    document.getElementById("cross1").style.animationPlayState="paused";
    document.getElementById("cross4").style.animationPlayState="paused";
    document.getElementById("cross2").style.animationPlayState="paused";
    document.getElementById("cross6").style.animationPlayState="paused";
    document.getElementById("cross3").style.animationPlayState="paused";
    document.getElementById("cross5").style.animationPlayState="paused";
}

function mouseOverOJ() {
    document.getElementById("tranCircle").style.borderColor = "orange";

}

function mouseOutOJ(){
    document.getElementById("tranCircle").style.borderColor = "red";
}

function mouseOverNavBar() {
    document.getElementById("tranCircle").style.borderColor = "white";

}
function mouseOutNavBar() {
    document.getElementById("tranCircle").style.borderColor = "red";

}