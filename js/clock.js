function startCountdown() {
    const countDownDate = new Date("Feb 14, 2024 00:00:00").getTime();

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = countDownDate - now;

        const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        days.textContent = d < 10 ? '0' + d : d;
        hours.textContent = h < 10 ? '0' + h : h;
        minutes.textContent = m < 10 ? '0' + m : m;
        seconds.textContent = s < 10 ? '0' + s : s;

        if (timeLeft < 0) {
            clearInterval(updateCountdown);
            document.getElementById("days").textContent = '00';
            document.getElementById("hours").textContent = '00';
            document.getElementById("minutes").textContent = '00';
            document.getElementById("seconds").textContent = '00';
        }
    }, 1000);
}

startCountdown();