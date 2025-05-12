function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours(); 

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'Manha.png'; 
        document.body.style.background = '#cbc0b9';
    } else if (hora >= 12 && hora <= 18) {
        
        img.src = 'Tarde.png';
        document.body.style.background = '#ff8f00';
    } else {
        
        img.src = 'Noite.png';
        document.body.style.background = '#071a2f';
    }
}
