
const apprenants = [
  { "id": 1, "nom": "Doe", "prenom": "John", "ville": "Rennes", "avatar": "image.png" },
  { "id": 2, "nom": "Doe", "prenom": "Jane", "ville": "Nantes", "avatar": "" },
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
        img.src = apprenant.avatar || "../image_prom/default.png";
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
