// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

{
    let numeriCasuali = []
    let numeriMaggiore5 = []
    let somma = 0
    
    function giveMeRandom(n){
        for(let i=0; i<n; i++){
          numeriCasuali.push(Math.floor(Math.random() * 10))  
        }

        console.log(numeriCasuali)
        
        for(let i=0; i<numeriCasuali.length; i++){
            if(numeriCasuali[i] > 5){
                console.log(`${numeriCasuali[i]} è maggiore di 5`)
                numeriMaggiore5.push(numeriCasuali[i])
            }else if(numeriCasuali[i] = 5){
                console.log(`${numeriCasuali[i]} è uguale a 5`)
            }else{
                console.log(`${numeriCasuali[i]} è minore di 5`)
            }
        }

        let sommaMaggiore5 = numeriMaggiore5.reduce((previous, next) => {
            return somma = previous += next
        })

        console.log(somma)

        
    }

    giveMeRandom(10);


    

}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

{
    let shoppingCart = [
    {
        id: 1,
        name: "T-shirt",
        price: 20,
        quantity: 5
    },
    {
        id: 2,
        name: "pantaloni",
        price: 50,
        quantity: 2
    },
    {
        id: 3,
        name: "scarpe",
        price: 70,
        quantity: 1
    }
]

function shoppingCartTotal(){
    let total = 0
    for(let i=0; i<shoppingCart.length; i++){
        total += shoppingCart[i].price * shoppingCart[i].quantity
    }

    console.log(total)
}

shoppingCartTotal();
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

{

    function Item (id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    
    let shoppingCart = [
        {
            id: 1,
            name: "T-shirt",
            price: 20,
            quantity: 5
        },
        {
            id: 2,
            name: "pantaloni",
            price: 50,
            quantity: 2
        },
        {
            id: 3,
            name: "scarpe",
            price: 70,
            quantity: 1
        }
    ]

    function addToShoppingCart(item) {
        shoppingCart.push(item)
        let total = 0
        for(let i=0; i<shoppingCart.length; i++){
            total += shoppingCart[i].quantity
        }
        console.log(total)

    }

    addToShoppingCart(new Item (4, "cappotto", 100, 1))

    console.log(shoppingCart);


}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

{
    let shoppingCart = [
        {
            id: 1,
            name: "T-shirt",
            price: 20,
            quantity: 5
        },
        {
            id: 2,
            name: "pantaloni",
            price: 50,
            quantity: 2
        },
        {
            id: 3,
            name: "scarpe",
            price: 70,
            quantity: 1
        },
        {
            id: 4,
            name: "cappotto",
            price: 100,
            quantity: 1
        }
    ]

    function maxShoppingCart() {
        let prices = []
        let maxPrice = 0
        for(let i = 0; i < shoppingCart.length; i++){
            prices.push(shoppingCart[i].price)            
        }
        maxPrice = Math.max(...prices);
        console.log(maxPrice);
        
}

maxShoppingCart();

}



/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

{
    let shoppingCart = [
        {
            id: 1,
            name: "T-shirt",
            price: 20,
            quantity: 5
        },
        {
            id: 2,
            name: "pantaloni",
            price: 50,
            quantity: 2
        },
        {
            id: 3,
            name: "scarpe",
            price: 70,
            quantity: 1
        },
        {
            id: 4,
            name: "cappotto",
            price: 100,
            quantity: 1
        }
    ]

    function latestShoppingCart() {
        return shoppingCart[shoppingCart.length - 1]
    }

    console.log(latestShoppingCart());
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

{   

    let elencoNumeri = []
    function loopUntil(x) {
        let consecutiveCount = 0;
        while (consecutiveCount < 3) {
          let randomNumber = Math.floor(Math.random() * 10);
            elencoNumeri.push(randomNumber);
          if (randomNumber > x) {
            consecutiveCount++;
          } else {
            consecutiveCount = 0;
          }
        }

        console.log(elencoNumeri)
      }

    loopUntil(5)
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

{
    arrayMisto = [23, 'goku', 8, 23, 2, 28, 'pegasus', 6,]
    let sum = 0
    let media = 0


    function average(arr) {
        
            for(let i = 0; i < arr.length; i++){
                if(typeof arr[i] === 'number'){
                    sum += arr[i];
                    media = sum / arr.length;    
            }
            
            }    
        
        console.log(media);
    }

    average(arrayMisto);
}
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

{
    arrayEsempio = ['pegasus', 'sirio', 'crystal', 'andromeda', 'phoenix']

    function longest(arr) {
        let max = arrayEsempio[0].length;
        arrayEsempio.map(item => max = Math.max(max, item.length));
        str = arrayEsempio.filter(item => item.length == max);
        return str;
    }

    console.log(longest(arrayEsempio));
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
