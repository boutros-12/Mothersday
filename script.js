function playMusic() {
    let music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Music autoplay blocked, user must interact."));
    alert("Enjoy the music! 🎶💖");
}
