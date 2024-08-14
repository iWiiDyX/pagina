function validateForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Limpia los valores de los campos
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    if (username.toLowerCase() === "amorcito") {
        if (password.toLowerCase() === "pequeña") {
            // Redirige a la página principal si las credenciales son correctas
            console.log("Credenciales correctas. Redirigiendo...");
            window.location.href = "principal.html";
        } else if (password.toLowerCase() === "minion") {
            document.getElementById("popup2").style.display = "block";
        } else if (password.toLowerCase() === "miniña") {
            document.getElementById("popup3").style.display = "block";
        } else {
            document.getElementById("popup1").style.display = "block";
        }
    } else {
        document.getElementById("popup1").style.display = "block";
    }
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function retryLogin() {
    closePopup('popup1');
    closePopup('popup2');
    closePopup('popup3');
}
