function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'morning1.png'
        document.body.style.background = '#D9B36C'
      }  else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'afternoon.png'
        document.body.style.background = '#BFCDD9'
      } else {
        //BOA NOITE!
        img.src = 'night.png'
        document.body.style.background = '#323240'
      }
    
}
