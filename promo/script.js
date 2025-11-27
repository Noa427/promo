document.getElementById('MOT').addEventListener('click' , function(){

    const fr = document.getElementById("fr");

    this.textContent = "ÇA À CHANGÉ DE COULEUR, DINGUERIE";
    this.style.color = "rgb(102, 17, 17)";
    fr.currentTime = 0;
    fr.play();
})


    const  img = document.querySelector('header img');
    const  btn = document.getElementById('change');
    const  secL = document.querySelector('.secL');
    const  secR = document.querySelector('.secR');
    const  header = document.querySelector('header');
    const footer = document.querySelector('footer')
    const all = document.querySelector('.all');


    let ecole = false;

document.getElementById('change').addEventListener('click' , function (){


    ecole = !ecole
    const elements = [secL , secR , header , footer , all]

    elements.forEach(el => {
        el.style.transition = 'background-color 0.5s ease';
    })

    if(ecole){
    this.textContent = "MEIN GOT !!! c'était pas le bon ENI (je sais pas ce que c'est :/)";
    secL.style.backgroundColor = 'rgba(211, 224, 24, 1)';
    secR.style.backgroundColor = 'rgba(211, 224, 24, 1)';
    all.style.backgroundColor ='rgba(153, 209, 48, 1)';
    header.style.backgroundColor ='rgba(200, 212, 19, 1)';
    footer.style.backgroundColor ='rgba(200, 212, 19, 1)';

    img.src = 'image_prom/eni.jpg';
    img.alt = 'Image du logo ENI mais l"ecole';
    }
    else {    
        this.textContent = "si je le savais...";
        secL.style.backgroundColor = '';
        secR.style.backgroundColor = '';
        all.style.backgroundColor = '';
        header.style.backgroundColor = '';
        footer.style.backgroundColor ='';
        img.src = 'image_prom/images.png';
        img.alt = 'Logo ENI mode jaune';

    }
})


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
    const container = document.createElement("div");
    container.classList.add("apprenants-container");

    apprenants.forEach(apprenant => {
        const card = document.createElement("div");
        card.classList.add("apprenant");

        // Avatar si disponible
        if (apprenant.avatar) {
            const img = document.createElement("img");
            img.src = apprenant.avatar;
            img.alt = `${apprenant.prenom} ${apprenant.nom}`;
            img.classList.add("avatar");
            card.appendChild(img);
        }

        // Nom et prénom
        const name = document.createElement("p");
        name.textContent = `${apprenant.prenom} ${apprenant.nom}`;
        card.appendChild(name);

        // Ville
        const ville = document.createElement("p");
        ville.textContent = apprenant.ville || "Ville non renseignée";
        card.appendChild(ville);

        container.appendChild(card);
    });

    document.body.appendChild(container);
});