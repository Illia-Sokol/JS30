let countDown;
const blockLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function time(seconds) {
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTime(seconds);
    displayEndTime(then);

    countDown = setInterval( () => {
        const secondLeft = Math.round( (then - Date.now()) / 1000);

        if (secondLeft < 0) {
            clearInterval(countDown);
            return;
        }
        displayTime(secondLeft);
    }, 1000)
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondLeft = seconds % 60;
    const display = `${minutes}:${secondLeft < 10 ? '0' : ''}${secondLeft}`;
    blockLeft.textContent = display;
    // console.log(minutes, secondLeft);
}

function displayEndTime(seconds) {
    const end = new Date(seconds);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const display = `End time ${hour}:${minutes < 10 ? '0' : ''}${minutes}`
    // console.log(end);
    endTime.textContent = display;
}

function startTime() {
    // console.log(this.dataset.time)
    const data = parseInt(this.dataset.time);
    time(data);
}

buttons.forEach( button => button.addEventListener('click', startTime) );
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(this.minutes.value);
    const minutes = this.minutes.value * 60;
    time(minutes);
    this.reset();
});