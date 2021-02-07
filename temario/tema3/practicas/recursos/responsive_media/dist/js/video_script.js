theVideo = document.querySelector("#myVideo");
var info = document.getElementById("info_video");
var videos = ['chelovideo1', 'chelovideo2'];
var current = 0;

function activeInfo_video() {
    info.style.display = "block";
}

function playVideo() {
    activeInfo_video();
    if(theVideo.paused){
        theVideo.play();
        document.getElementById("iPlayPause").textContent="pause_circle_outline";
        info.innerHTML = 'Now playing ' + videos[current];
    }else{
        theVideo.pause();
        document.getElementById("iPlayPause").textContent="play_circle_outline";
        info.innerHTML = videos[current] + ' paused';
    }
}

function stopVideo() {
    activeInfo_video();
    document.getElementById("iPlayPause").textContent="play_circle_outline";
    theVideo.currentTime = 0;
    theVideo.pause();
    info.innerHTML = videos[current] + ' stopped';
}

function rewindVideo() {
    activeInfo_video();
    theVideo.currentTime = 0;
    info.innerHTML = videos[current] + ' rewinded';
}

function fullscreenVideo() {
    theVideo.requestFullscreen();      
}

function replayTenSeconds() {
    activeInfo_video();
    theVideo.currentTime -= 10;
    info.innerHTML = videos[current] + ' replay 10 seconds';
}

function forwardTenSeconds() {
    activeInfo_video();
    theVideo.currentTime += 10;
    info.innerHTML = videos[current] + ' forward 10 seconds';
}

function loadVideo(){
    theVideo.innerHTML = "";
    theVideo.innerHTML = "<source src='videos/" + videos[current] + ".mp4' type='video/mp4'>";
    theVideo.innerHTML += "<source src='videos/" + videos[current] + ".ogg' type='video/ogg'>";
    if (current == 1) {
        theVideo.innerHTML += "<track kind=captions src=videos/subs/chelovideo2.en.vtt srclang=en lang=en label='English' default>";
        theVideo.innerHTML += "<track kind=captions src=videos/subs/chelovideo2.es.vtt srclang=es lang=es label='Spanish'>";
    }
    theVideo.load();
}

function previous() {
    activeInfo_video();
    document.getElementById("iPlayPause").textContent="play_circle_outline";
    if (current > 0) {
        current--;
    }
    loadVideo();
    info.innerHTML = videos[current] + ' ready';
}

function next() {
    activeInfo_video();
    document.getElementById("iPlayPause").textContent="play_circle_outline";
    if (current < videos.length - 1) {
        current++;
    }
    loadVideo();
    info.innerHTML = videos[current] + ' ready';
}