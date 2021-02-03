theVideo = document.querySelector("#myVideo");
var info = document.getElementById("info_video");
var videos = ['chelovideo1', 'chelovideo2'];
var current = 0;

function activeInfo_video() {
    info.style.display = "block";
}

function playVideo() {
    activeInfo_video();
    theVideo.innerHTML = "";
    theVideo.innerHTML = "<source src='videos/" + videos[current] + ".mp4' type='video/mp4'>";
    theVideo.innerHTML += "<source src='videos/" + videos[current] + ".ogg' type='video/ogg'>";
    if (current == 1) {
        theVideo.innerHTML += "<track kind=captions src=videos/subs/chelovideo2.en.vtt srclang=en lang=en label='English' default>";
        theVideo.innerHTML += "<track kind=captions src=videos/subs/chelovideo2.es.vtt srclang=es lang=es label='Spanish'>";
    }
    theVideo.load();
    theVideo.play();
    info.innerHTML = 'Now playing ' + videos[current];
}

function pauseVideo() {
    activeInfo_video();
    theVideo.pause();
    info.innerHTML = videos[current] + ' paused';
}

function stopVideo() {
    activeInfo_video();
    theVideo.currentTime = 0;
    theVideo.pause();
    info.innerHTML = videos[current] + ' stopped';
}

function rewindVideo() {
    activeInfo_video();
    theVideo.currentTime = 0;
    info.innerHTML = videos[current] + ' rewinded';
}

function previous() {
    if (current > 0) {
        current--;
    }
    playVideo();
}

function next() {
    if (current < videos.length - 1) {
        current++;
    }
    playVideo();
}