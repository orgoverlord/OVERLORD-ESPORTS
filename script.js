function countdown(id, date) {
    var end = new Date(date).getTime();

    setInterval(function(){
        var now = new Date().getTime();
        var distance = end - now;

        var d = Math.floor(distance / (1000*60*60*24));
        var h = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        var m = Math.floor((distance % (1000*60*60))/(1000*60));
        var s = Math.floor((distance % (1000*60))/1000);

        document.getElementById(id).innerHTML =
        d+"d "+h+"h "+m+"m "+s+"s";

    },1000);
}

window.onload=function(){
    countdown("regCountdown","Feb 28, 2026 18:00:00");
    countdown("startCountdown","Mar 1, 2026 11:00:00");
}
