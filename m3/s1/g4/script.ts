class capoDiAbbigliamento{
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivainclusa:number,prezzoivaesclusa:number,disponibile:string,saldo:number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    mostraPrezzo():void {
        console.log(`Il capo ${this.capo}, scontato del ${this.saldo}%, costa ${this.prezzoivainclusa*(1-this.saldo/100)} €`);
    }
}

fetch('Abbigliamento.json')
.then((res:Response) => res.json())
.then((catalogo) => {
    console.log(catalogo);
    let arr:capoDiAbbigliamento[] = [];
    catalogo.forEach((vestito) => {
        let abito = new capoDiAbbigliamento(vestito.id, vestito.codprod, vestito.collezione, vestito.capo, vestito.modello, vestito.quantita, vestito.colore, vestito.prezzoivainclusa, vestito.prezzoivaesclusa, vestito.disponibile, vestito.saldo)

        arr.push(abito);
    })

    console.log(arr);

    arr.forEach((vestito) => vestito.mostraPrezzo())
})
