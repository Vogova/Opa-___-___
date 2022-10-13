var back = window.document.querySelector('div.back')
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var titulo = window.document.getElementById('h1')
var titulo2 = window.document.querySelector('title')
var dysplay = window.document.getElementById('h2')
var header = window.document.getElementById('header')
var note = window.document.getElementById('note')
var sol = window.document.getElementById('sol')
var lua = window.document.getElementById('lua')
var solMid = window.document.getElementById('sol-mid')
var coordenada = (hora/24)*-100
var transição = `translateX(${coordenada}%)`
var clicado = 1
const pop = new Audio('./sounds/pop.wav');

dysplay.addEventListener('mouseenter', entrar)
dysplay.addEventListener('mouseleave', sair)
titulo.addEventListener('mouseenter', entrar2)
titulo.addEventListener('mouseleave', sair2)
header.addEventListener('click', clicar)

function entrar(){
    dysplay.style.transition = '1.5s'
    dysplay.style.transform ='translateX(25px)'
}
function sair(){
    dysplay.style.transition = '1.5s'
    dysplay.style.transform ='translateX(0px)'

}
function entrar2(){
    titulo.style.transition = '1.5s'
    titulo.style.transform ='scale(1.05)'
}
function sair2(){
    titulo.style.transition = '1.5s'
    titulo.style.transform ='scale(1)'

}

function clicar(){
    clicado = ++clicado
    pop.play()
    if(clicado == 2 || clicado == 5){
        hora = 21
        note.style.opacity = '0'
        note.style.transition = '0.5s'
    }

    if(clicado == 6){
        clicado = 3
    }

    if(clicado == 3){
        hora = 7
    }

    if(clicado == 4){
        hora = 11
    }

    if(hora > 18 || hora <= 6){
        titulo.innerText = 'Opa! Boa Noite.',
        titulo2.innerText = 'Opa! Boa Noite.'
        sol.style.opacity = '0.3'
        lua.style.opacity = '1'
        solMid.style.opacity = '0.3'
    }
    else if(hora > 6 && hora <= 9){
        titulo.innerText = 'Opa! Boa Manhã.',
        titulo2.innerText = 'Opa! Boa Manhã.'
        sol.style.opacity = '0.3'
        lua.style.opacity = '0.3'
        solMid.style.opacity = '1'
    }
    else if(hora > 9 && hora <= 15){
        titulo.innerText = 'Opa! Bom Dia.',
        titulo2.innerText = 'Opa! Bom Dia.'
        sol.style.opacity = '1'
        lua.style.opacity = '0.3'
        solMid.style.opacity = '0.3'
    }
    else if(hora > 15 && hora <= 18){
        titulo.innerText = 'Opa! Boa Tarde',
        titulo2.innerText = 'Opa! Boa Tarde'
        sol.style.opacity = '0.3'
        lua.style.opacity = '0.3'
        solMid.style.opacity = '1'
    }

    dysplay.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minuto}</strong> minutos.`
    coordenada = (hora/24)*-100
    transição = `translateX(${coordenada}%)`
    back.style.transform = transição;
}
note.style.opacity = '1'
header.style.transform =`translateY(0px)`
dysplay.innerHTML = `Agora são <strong>___</strong> horas e <strong>___</strong> minutos.`
back.style.transform = transição;



