function carregar(){
    var agora = new Date()
    var horas = agora.getHours()
    var local = document.querySelector('#horario')
    var img = document.querySelector('#foto')
    if (horas < 6){
        local.innerHTML = `Boa madrugada! Agora são ${horas} horas.`
        img.src = 'fotos/madrugada.jpg'
        document.body.style.background = 'black'
        
}       
    else if (horas < 12){
        local.innerHTML = `Bom dia!Agora são ${horas} horas.`
        img.src = 'fotos/amanhecer.jpg'
        document.body.style.background = '#58adb4'
}
    else if(horas < 18){
        local.innerHTML = `<p>Boa tarde!<br>Agora são ${horas} horas.</p>`
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = '#ffdd96'
}
    else if(horas < 24){
        local.innerHTML = `Boa noite!Agora são ${horas} horas.`
        img.src = 'fotos/noite.jpg'
        document.body.style.background = 'black'
}
    else{
        local.innerHTML = `[ERRO] Horário inválido`
        img.src = 'fotos/espaco.jpg'
}
}


