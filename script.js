const startTime = new Date("Mar 1, 2026 11:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();

    const startDiff = startTime - now;

    function format(diff) {
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((diff % (1000*60)) / 1000);
        return days+"d "+hours+"h "+minutes+"m "+seconds+"s";
    }

    if(document.getElementById("startCounter"))
        document.getElementById("startCounter").innerHTML = format(startDiff);

}, 1000);

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function outsideClick(event) {
    if (event.target.classList.contains("popup-overlay")) {
        closePopup();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup();
    }
});
