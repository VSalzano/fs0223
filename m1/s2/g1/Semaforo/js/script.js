function accendiLuceRossa (){
    document.getElementById('red').classList.remove('lucespenta')
    document.getElementById('yellow').classList.add('lucespenta')
    document.getElementById('green').classList.add('lucespenta')
}
function accendiLuceGialla (){
    document.getElementById('red').classList.add('lucespenta')
    document.getElementById('yellow').classList.remove('lucespenta')
    document.getElementById('green').classList.add('lucespenta')
}
function accendiLuceVerde (){
    document.getElementById('red').classList.add('lucespenta')
    document.getElementById('yellow').classList.add('lucespenta')
    document.getElementById('green').classList.remove('lucespenta')
}