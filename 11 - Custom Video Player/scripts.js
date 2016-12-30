// function 
function playVieo() {
    // video.play();
    const match = video.paused ? 'play' : 'pause';
    video[match]();
}

function changeButton() {
    // console.log('btn')
    const btn = video.paused ? '►' : 'l l';
    button.textContent = btn;
}

function skipFuncton(e) {
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// Select element
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const button = document.querySelector('.toggle');
const skips = document.querySelectorAll('.player__button');
//listener
video.addEventListener('click', playVieo);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
button.addEventListener('click', playVieo);
skips.forEach( skip => {
    skip.addEventListener('click', skipFuncton);   
})