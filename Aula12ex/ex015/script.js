function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ' '

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'criançaMenino.jpg')
            }
            else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'homemJovem.jpg')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adultoHomem.jpg')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'velhoHomem.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'criançaMinina.jpg')
            }
            else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'mulherJovem.jpg')
            }
            else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adultoMulher.jpg')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'velhaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}