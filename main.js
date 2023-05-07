function submitForm() {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display a message confirming the form was submitted
    document.getElementById("messageSent").innerHTML = "Thank you, " + name + ". Your message has been sent!";
}
``

var audio = document.getElementById('audio-player');
var playPauseBtn = document.getElementById('play-pause-btn');



