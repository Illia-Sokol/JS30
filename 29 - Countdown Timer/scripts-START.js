let countDown;

function time(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log(seconds);

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
    console.log(seconds)
}