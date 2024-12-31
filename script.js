document.getElementById("revealButton").addEventListener("click", function() {
    const message = document.getElementById("sweetMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
    }
});