// Get the popup and link elements
const popup = document.getElementById("popup");
const popupLink = document.getElementById("popupLink");
const closeBtn = document.getElementById("closeBtn");

// Show the popup when the link is clicked
popupLink.onclick = function() {
    popup.style.display = "block";
}

// Close the popup when the close button is clicked
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Close the popup if the user clicks anywhere outside the popup content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
