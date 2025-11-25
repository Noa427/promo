document.getElementById('MOT').addEventListener('click' , function(){
    this.textContent = "ÇA À CHANGÉ DE COULEUR, DINGUERIE";
    this.style.color = "rgb(102, 17, 17)";
})

    const  img = document.querySelector('header img');
    const  btn = this;
    const  secL = document.querySelector('.secL');
    const  secR = document.querySelector('.secR');
    const  header = document.querySelector('header');
    const footer = document.querySelector('footer')
    const all = document.querySelector('.all');

    let ecole = false;

document.getElementById('change').addEventListener('click' , function (){


    ecole = !ecole

    if(ecole){
    this.textContent = "MEIN GOT !!! c'était pas le bon ENI (je sais pas ce que c'est :/)";
    secL.style.backgroundColor = 'rgba(77, 100, 143, 1)';
    secR.style.backgroundColor = 'rgba(77, 100, 143, 1)';
    all.style.backgroundColor ='rgba(92, 128, 194, 1)';
    header.style.backgroundColor ='rgba(80, 137, 241, 1)';
    footer.style.backgroundColor ='rgba(80, 137, 241, 1)'

    img.src = 'image_prom/images.png';
    img.alt = 'Image du logo ENI mais l"ecole';
    }
    else {    
        this.textContent = "si je le savais...";
        secL.style.backgroundColor = '';
        secR.style.backgroundColor = '';
        all.style.backgroundColor = '';
        header.style.backgroundColor = '';
        footer.style.backgroundColor ='';
        img.src = 'image_prom/eni.jpg';
        img.alt = 'Logo ENI mode jaune';

    }
})

