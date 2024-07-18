function validateForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.toLowerCase() !== "amorcito" || password.toLowerCase() !== "pequeña") {
        document.getElementById("popup").style.display = "block";
    } else {
        // Si las credenciales son correctas, redirigir a index.html
        console.log("Credenciales correctas. Redirigiendo...");
        window.location.href = "index.html";
    }
}



        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }

        function retryLogin() {
            closePopup();
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }