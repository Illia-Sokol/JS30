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

function changeValueSpeed(e) {
    // console.log(this.value);
    video[this.name] = this.value;
}

function updateVideoLane() {
    // console.log(video.currentTime);
    // console.log(video.duration)
    const timeLine = video.currentTime / video.duration * 100;
    // console.log(timeLine); 
    progress__filled.style.flexBasis = `${timeLine}%`;
}

function mouseVideoUpdate(e) {
    // console.log(e.offsetX);
    // console.log('e.offsetX / progress.clientWidth', e.offsetX / progress.clientWidth);
    // console.log('e.offsetX / progress.clientWidth * video.duration', e.offsetX / progress.clientWidth * video.duration);
    const newTime = e.offsetX / progress.clientWidth * video.duration;
    video.currentTime = newTime;
}

// Select element
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const button = document.querySelector('.toggle');
const skips = document.querySelectorAll('.player__button');
const sliders = document.querySelectorAll('.player__slider');
const progress__filled = document.querySelector('.progress__filled');
//listenerd
video.addEventListener('click', playVieo);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
button.addEventListener('click', playVieo);
skips.forEach( skip => {
    skip.addEventListener('click', skipFuncton);   
})
sliders.forEach( slider => {
    slider.addEventListener('change', changeValueSpeed);
    slider.addEventListener('mousemove', changeValueSpeed);
})
video.addEventListener('timeupdate', updateVideoLane);

let isClicked = false;
progress.addEventListener('click', mouseVideoUpdate);
progress.addEventListener('mousemove', (e) => isClicked && mouseVideoUpdate(e));
progress.addEventListener('mouseup', () => isClicked = false);
progress.addEventListener('mousedown', () => isClicked = true);