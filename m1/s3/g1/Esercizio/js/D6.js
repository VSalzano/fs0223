/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(3, 5));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

{
    
    function crazySum(a, b) {
    if(a === b){
        return 3 * (a + b)
    }else{
        return a + b
    }

}

console.log(crazySum(3,3))
console.log(crazySum(2,3))

}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

{
    
    function crazyDiff(a){
        let b = a - 19
        if(b > 19){
            return b * 3
        }else{
            return b
        }
    }

    console.log(crazyDiff(39))
    console.log(crazyDiff(19))
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

{
    function boundary(n){
        if(n > 20 && n <= 100 || n == 400){
            return true
        }
        else{
            return false
        }
    }

    console.log(boundary(18))
    console.log(boundary(72))
    console.log(boundary(400))
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

{
    function epify(str){
        if(str.startsWith("EPICODE")){
            return `${str}`
        }else{
            return `EPICODE ${str}`
        }
    }

    console.log(epify('ciao a tutti'))
    console.log(epify('EPICODE ciao a tutti'))

}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

{
    function check3and7(n){
        if(n % 3 == 0 || n % 7 == 0){
            return `${n} è un multiplo di 3 o di 7`
        }else{
            return `${n} non è multipo né di 3 né di 7`
        }
    }

    console.log(check3and7(50))
    console.log(check3and7(28))

}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

{
    function reverseString(str){
        let splittedString = str.split("")
        let revArray = splittedString.reverse()
        let revString = revArray.join("")

        return revString
    }

    console.log(reverseString("EPICODE"))
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

{
    function upperFirst(str){
        let splittedString = str.split(" ")
        for(let i = 0; i < splittedString.length; i++){
            splittedString[i] = splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(1)
        }
        return splittedString.join(" ")
        
    }

    console.log(upperFirst("amo passare pasquetta studiando javascript"))


}



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

{
    function cutString(str){
        return str.substring(1, str.length - 1)        
    }

    console.log(cutString("Hello World"))
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

{
    function giveMeRandom(n){
        let numeriCasuali = []
        for(let i = 0; i < n; i++){
            numeriCasuali.push(Math.floor(Math.random() * 10))
        }
        return numeriCasuali
    }

    console.log(giveMeRandom(10))

}
