// =========================
// GlobalHire Register Page
// =========================

// Profile Photo Preview
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");

photo?.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        preview.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

// Password Strength
const password = document.getElementById("password");
const strength = document.getElementById("strength");

password?.addEventListener("input", () => {

    const value = password.value;

    let level = "";

    let color = "";

    if (value.length < 6) {

        level = "Weak";
        color = "#ef4444";

    } else if (value.length < 10) {

        level = "Medium";
        color = "#f59e0b";

    } else {

        level = "Strong";
        color = "#22c55e";

    }

    strength.textContent = "Password Strength: " + level;
    strength.style.color = color;

});

// Confirm Password
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword?.addEventListener("input", () => {

    if (confirmPassword.value !== password.value) {

        confirmPassword.style.border = "2px solid #ef4444";

    } else {

        confirmPassword.style.border = "2px solid #22c55e";

    }

});

// Form Validation
const form = document.getElementById("registerForm");

form?.addEventListener("submit", function (e) {

    e.preventDefault();

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");
        return;

    }

    alert("Registration completed successfully! (Frontend Demo)");

});