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

// Select element
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const button = document.querySelector('.toggle');


video.addEventListener('click', playVieo);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
button.addEventListener('click', playVieo);