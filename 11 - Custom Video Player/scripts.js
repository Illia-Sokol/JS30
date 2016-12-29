// function 
function playVieo() {
    // video.play();
    const match = video.paused ? 'play' : 'pause';
    video[match]();
}

// Select element
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');


video.addEventListener('click', playVieo);