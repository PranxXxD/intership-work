var element = document.getElementById("video");

function OpenFullscreen(){
    if(element.requestFullscreen){
        element.requestFullscreen();
    }
    else if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();
    }
    else if(element.msRequestFullscreen){
        element.msRequestFullscreen();
    }
}