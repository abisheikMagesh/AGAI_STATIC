function countdown() {
    const endDate = new Date("December 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "We're Live!";
    }
}

const timer = setInterval(countdown, 1000);
