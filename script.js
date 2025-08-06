const time = document.getElementById('time');
const timeformate = document.getElementById('timeformate');
const date = document.getElementById('date')

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showtime, 1000)
});

const showtime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hr < 10) {
        hr = `0${hr}`;
    }

    if (min < 10) {
        min = `0${min}`;
    }

    if (sec < 10) {
        sec = `0${sec}`;
    }

    time.innerHTML = `${hr}:${min}:${sec}`;

    if (hr > 12) {
        timeformate.innerHTML = "PM";
    }
    else{
        timeformate.innerHTML = "AM";
    }
}