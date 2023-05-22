{
let giocatore1:number = 5;
let giocatore2:number = 78;

let randomNumber:number = Math.ceil(Math.random() * 100);

let distance1:number = Math.abs(randomNumber - giocatore1);
let distance2:number = Math.abs(randomNumber - giocatore2);

console.log(randomNumber);

if (giocatore1 == randomNumber) {
    console.log('il giocatore 1 ha indovinato il numero casuale')
} else if (giocatore2 == randomNumber) {
    console.log('il giocatore 2 ha indovinato il numero casuale')
} else if (distance1 < distance2) {
    console.log('il giocatore 1 ha vinto questo divertente gioco')
} else if (distance2 < distance1) {
    console.log('il giocatore 2 ha vinto questo divertente gioco')
}
}