document.getElementById("playButton").addEventListener("click", function() {
    let music = document.getElementById("bg-music");
    music.volume = 0.5; // Set the volume
    music.play().then(() => {
        alert("Enjoy the music! 🎶💖");
    }).catch(error => console.log("Music autoplay blocked, user must interact."));
});
