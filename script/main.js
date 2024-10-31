function updateTime() {
    const currentTime = new Date();

    let currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const formattedMinutes = currentMinutes.toString().padStart(2, '0');
    const formattedSeconds = currentSeconds.toString().padStart(2, '0');

    const AMPM = currentHours >= 12 ? 'PM' : 'AM';

    let formattedHours = currentHours % 12;
    formattedHours = formattedHours ? formattedHours : 12;

    formattedHours = formattedHours.toString().padStart(2, '0');

    const hoursEl = document.getElementById("hoursValue");
    const minutesEl = document.getElementById("minutesValue");
    const secondsEl = document.getElementById("secondsValue");
    const AMPM_El = document.getElementById("AMPM-text");

    hoursEl.innerText = formattedHours;
    minutesEl.innerText = formattedMinutes;
    secondsEl.innerText = formattedSeconds;
    AMPM_El.innerText = AMPM;
};

updateTime();
setInterval(updateTime, 1000);