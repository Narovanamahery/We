const STORAGE_KEY = "pseudo";

const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const pseudoInput = document.getElementById("pseudo");
    const passwordInput = document.getElementById("password");

    const pseudo = pseudoInput.value.trim();
    const password = passwordInput.value.trim();

    if (!pseudo) {
      alert("Il me faut au moins ton prénom 😄");
      pseudoInput.focus();
      return;
    }

    if (!password) {
      alert("Mot de passe à définir ensemble autour d’un verre ?");
      passwordInput.focus();
      return;
    }

    localStorage.setItem(STORAGE_KEY, pseudo);
    window.location.href = "dashboard.html";
  });
}

const forgotLink = document.getElementById("forgot-link");

if (forgotLink) {
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Procédure de réinitialisation : proposer un café ☕");
  });
}

const welcomeEl = document.getElementById("welcome");

if (welcomeEl) {
  const pseudo = localStorage.getItem(STORAGE_KEY);

  if (!pseudo) {
    window.location.href = "index.html";
  } else {
    welcomeEl.textContent = `Bienvenue ${pseudo} 👋`;
  }

  const validateBtn = document.getElementById("validate-btn");

  if (validateBtn) {
    validateBtn.addEventListener("click", () => {
      const name = localStorage.getItem(STORAGE_KEY) || "toi";
      alert(
        `Maquette validée ✅\n${name}, prochaine étape : un verre pour définir la v1 ?`
      );
    });
  }

  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      window.location.href = "index.html";
    });
  }
}