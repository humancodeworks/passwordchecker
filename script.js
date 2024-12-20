const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const showPasswordBtn = document.getElementById("show-password");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = evaluatePasswordStrength(password);

  updateStrengthMeter(strength);
});

showPasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordBtn.textContent = "visibility_off";
  } else {
    passwordInput.type = "password";
    showPasswordBtn.textContent = "visibility";
  }
});

function evaluatePasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++; // Minimum length
  if (/[A-Z]/.test(password)) strength++; // Uppercase
  if (/[a-z]/.test(password)) strength++; // Lowercase
  if (/\d/.test(password)) strength++; // Numbers
  if (/[@$!%*?&]/.test(password)) strength++; // Special characters

  return strength;
}

function updateStrengthMeter(strength) {
  const colors = ["red", "orange", "yellow", "green"];
  const messages = [
    { text: "Too Weak", class: "weak" },
    { text: "Weak", class: "weak" },
    { text: "Moderate", class: "medium" },
    { text: "Strong", class: "strong" },
    { text: "Great Password", class: "very-strong" },
  ];

  strengthBar.style.width = `${(strength / 5) * 100}%`;
  strengthBar.className = "strength-bar " + messages[strength]?.class;
  strengthText.textContent = messages[strength]?.text || "";
}
