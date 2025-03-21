/* Style for the popup */
.popup {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 60px;
}

/* Popup content box */
.popup-content {
    background-color: #fff;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    text-align: center;
    border-radius: 15px;
}

/* Close button */
.close-btn {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 15px;
}

.close-btn:hover,
.close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Text styling for the message */
h1 {
    font-size: 36px;
    color: #FF69B4;  /* Pink color for a special touch */
}

/* Styling for the images of flowers and gifts */
.decorations {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.decoration-item {
    width: 60px;
    margin: 10px;
}

/* Link styling */
#popupLink {
    display: block;
    text-align: center;
    font-size: 20px;
    color: #000;
    padding: 10px 20px;
    background-color: #FF69B4;
    border-radius: 10px;
    text-decoration: none;
    margin-top: 50px;
}

#popupLink:hover {
    background-color: #FF1493;
}
