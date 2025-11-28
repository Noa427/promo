
const apprenants = [
  { "id": 3, "nom": "LHERMITE", "prenom": "Thais", "ville": "Locquirec", "avatar": "" },
  { "id": 4, "nom": "BONNET", "prenom": "Angeline", "ville": "Combourg", "avatar": "" },
  { "id": 5, "nom": "CHETAIL", "prenom": "Quentin", "ville": "Saint-Brieuc", "avatar": "" },
  { "id": 6, "nom": "LETAILLEUR", "prenom": "Kevin", "ville": "", "avatar": "" },
  { "id": 7, "nom": "RABIN", "prenom": "Justine", "ville": "Soignolles-en-Brie", "avatar": "" },
  { "id": 8, "nom": "HOAREAU", "prenom": "Fabien", "ville": "Pont d'Ain", "avatar": "" },
  { "id": 9, "nom": "NEAL", "prenom": "Chhoeurng", "ville": "Villefontaine", "avatar": "" },
  { "id": 10, "nom": "DENOUAL", "prenom": "Maurine", "ville": "Saint-Sulpice-des-Landes", "avatar": "" },
  { "id": 11, "nom": "ALMEIDA ALVES", "prenom": "Helio", "ville": "", "avatar": "" },
  { "id": 12, "nom": "MONTEIRO", "prenom": "Nicolas", "ville": "Clermont-Ferrand", "avatar": "" },
  { "id": 13, "nom": "PAGEAUD", "prenom": "Nathanael", "ville": "", "avatar": "" },
  { "id": 14, "nom": "REJA", "prenom": "Baptiste", "ville": "Niort", "avatar": "" },
  { "id": 15, "nom": "PARDAL", "prenom": "Noa", "ville": "Elincourt", "avatar": "" },
  { "id": 16, "nom": "PERSAUD", "prenom": "Mahon", "ville": "Mulhouse", "avatar": "" },
  { "id": 17, "nom": "BAYNARD", "prenom": "Anabelle", "ville": "La Copechagnière", "avatar": "" },
  { "id": 18, "nom": "MARTIN", "prenom": "Bastien", "ville": "Niort", "avatar": "" }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#apprenants-list");

    if (!container) return; // histoire de pas planter sur les autres pages

    const list = document.createElement("div");
    list.classList.add("apprenants-container");

    apprenants.forEach(apprenant => {
        const card = document.createElement("div");
        card.classList.add("apprenant");

        // Avatar
        const img = document.createElement("img");
        img.classList.add("avatar");
        img.src = apprenant.avatar || "../image_prom/avatar.png";
        img.alt = `${apprenant.prenom} ${apprenant.nom}`;
        card.appendChild(img);

        // Nom
        const name = document.createElement("p");
        name.textContent = `${apprenant.prenom} ${apprenant.nom}`;
        card.appendChild(name);

        // Ville
        const ville = document.createElement("p");
        ville.textContent = apprenant.ville || "Ville non renseignée";
        card.appendChild(ville);

        list.appendChild(card);
    });

    container.appendChild(list);
});



document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".apprenants-container");
    const btnCards = document.querySelector("#view-cards");
    const btnList = document.querySelector("#view-list");

    if (!container) return;

    const applyCardStyle = () => {
        // Container cartes
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.gap = "1rem";
        container.style.padding = "1rem";
        container.style.justifyContent = "center";

        // Chaque carte
        container.querySelectorAll(".apprenant").forEach(card => {
            card.style.background = "rgb(230, 230, 255)";
            card.style.borderRadius = "0.75rem";
            card.style.padding = "1rem";
            card.style.width = "180px";
            card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.15)";
            card.style.textAlign = "center";
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.alignItems = "center";

            const avatar = card.querySelector(".avatar");
            if (avatar) {
                avatar.style.width = "100%";
                avatar.style.height = "auto";
                avatar.style.borderRadius = "0.5rem";
                avatar.style.objectFit = "cover";
            }

            card.querySelectorAll("p").forEach(p => {
                p.style.margin = "0";
                p.style.padding = "0.2rem 0";
                p.style.lineHeight = "1.3";
            });
        });
    };

    const applyListStyle = () => {
        // Container liste
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.padding = "1.5rem";
        container.style.justifyContent = "flex-start";
        container.style.gap = "0"; // pas de gap pour la liste

        // Chaque carte devient ligne
        container.querySelectorAll(".apprenant").forEach(card => {
            card.style.background = "rgb(230, 230, 255)";
            card.style.border = "2px solid black";
            card.style.padding = "1rem";
            card.style.display = "flex";
            card.style.alignItems = "center";
            card.style.flexDirection = "row";
            card.style.gap = "1rem";
            card.style.width = "calc(50% - 0.75rem)";
            card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.15)";
            card.style.boxSizing = "border-box";
            card.style.textAlign = "left";
            card.style.borderRadius = "0"; // enlever arrondi pour la liste

            const avatar = card.querySelector(".avatar");
            if (avatar) {
                avatar.style.width = "80px";
                avatar.style.height = "80px";
                avatar.style.borderRadius = "0.5rem";
                avatar.style.objectFit = "cover";
                avatar.style.flexShrink = "0";
            }

            card.querySelectorAll("p").forEach(p => {
                p.style.margin = "0";
                p.style.padding = "0.2rem 0";
                p.style.lineHeight = "1.3";
            });
        });
    };

    // Initial : cartes
    applyCardStyle();

    // Événements boutons
    btnCards.addEventListener("click", applyCardStyle);
    btnList.addEventListener("click", applyListStyle);
});
