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

    mostraPrezzo = ():void => {
        let sconto:number = (this.saldo * 100) / this.prezzoivainclusa
        console.log(`Il capo ${this.capo}, scontato del ${this.saldo}% costa ${this.prezzoivainclusa - sconto} €`)
    }
}