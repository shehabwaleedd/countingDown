const newYears = "1 Sept 2023";

// let second = 1000;
// let minute = seconds * 60;
// let hour = minute * 60;
// let day = hour * 24;
// let timer;

function countdown() { 
    let newYearsDate = new Date(newYears);
    let currentDate = new Date();
    let diff = new Date(newYearsDate - currentDate);

    
    let totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let days = Math.floor(totalSeconds / 3600 / 24);
     

    document.getElementById("seconds").innerHTML = formatTime(seconds);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("days").innerHTML = formatTime(days);

    console.log(days)
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
timer = setInterval(countdown, 1000);

