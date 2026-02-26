function countdown(elementId, targetDate) {
    var countDownDate = new Date(targetDate).getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML =
        days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = "EXPIRED";
        }
    }, 1000);
}

window.onload = function() {
    countdown("regCountdown", "Feb 28, 2026 18:00:00");
    countdown("startCountdown", "Mar 1, 2026 11:00:00");
}
