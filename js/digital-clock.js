// Read the user's local time and date each time the clock updates.
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert 24-hour time to 12-hour time, including noon and midnight.
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Add a leading zero to single-digit time values.
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock-face").innerHTML = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("calendar-date").innerHTML = now.toLocaleDateString();
}

// Show the clock immediately, then refresh it every second.
updateClock();
setInterval(updateClock, 1000);
