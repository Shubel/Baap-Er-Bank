// login submit
document.getElementById("login-submit").addEventListener("click", function () {
    // user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    // check user email & password, but it's not a standard system
    if (userEmail == "sontan@baap.com" && userPassword == "secret") {
        window.location.href = "banking.html";
    }
})