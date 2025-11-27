document.addEventListener("DOMContentLoaded", () => {
  const correct = "231";
  const input = document.getElementById("mdp");
  const lock = document.getElementById("lock");
  const btn2 = document.getElementById("btn2");
  const magic = document.getElementById("magic");
  const popup = document.getElementById("popup");

  // sécurité : vérifier que tous les éléments existent
  if (!input || !lock || !btn2 || !magic || !popup) {
    console.error("Element manquant :", { input, lock, btn2, magic, popup });
    return;
  }

  // si jamais le bouton est dans un <form>, empêcher un submit accidentel
  btn2.type = "button";

  btn2.addEventListener("click", () => {
    const val = input.value.trim(); // on enlève espaces bêtes
    if (val === correct) {
      // cache l'overlay complet
      lock.style.display = "none";
      // reset visuel
      magic.style.display = "none";
      popup.style.borderColor = "";
    } else {
      // mauvaise saisie : affiche le gif et marque en rouge
      magic.style.display = "inline-block";
      popup.style.borderColor = "red";

    const wrongSound = document.getElementById("wrongSound");
    wrongSound.currentTime = 0; // revient au début
    wrongSound.play();

      // petite animation de secousse pour l'effet dramatique
      if (popup.animate) {
        popup.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-6px)" },
            { transform: "translateX(6px)" },
            { transform: "translateX(0)" }
          ],
          { duration: 300, iterations: 1 }
        );
      }

      // après X ms on remet à l'état initial (optionnel)
      setTimeout(() => {
        magic.style.display = "none";
        popup.style.borderColor = "";
      }, 3300);
    }
  });

  // Enter = click
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn2.click();
  });
});
