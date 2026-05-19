function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'boy1.png')
                //crinaça
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'menino1.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto1.png')
                //adulto
            } else {
                img.setAttribute('src', 'idoso1.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'girl1.png')
                //crinaça
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'menina1.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta1.png')
                //adulto
            } else {
                img.setAttribute('src', 'idosa1.png')
                //idoso
            }
        } else if (fsex[2].checked) {
            gênero = 'Indefinido'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'indef.png')
                //crinaça
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'indef.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'indef.png')
                //adulto
            } else {
                img.setAttribute('src', 'indef.png')
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
