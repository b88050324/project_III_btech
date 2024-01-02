function generatePassword() {
    const length = 12; // Change the password length as needed
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    displayPassword(password);
}

function displayPassword(password) {
    const passwordDisplay = document.getElementById("password-display");
    passwordDisplay.textContent = `Generated Password: ${password}`;
}
