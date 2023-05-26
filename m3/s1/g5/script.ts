interface ISmartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }
  
  class Smartphone implements ISmartphone {
    carica: number = 0;
    numeroChiamate: number = 0;
    costoMinuto: number = 0.20;
    registroChiamate: { id: number; durata: number; dataOra: Date }[] = [];

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
      }
  
    ricarica(euro: number): void {
      this.carica += euro;
    }
  
    numero404(): string {
      return `Credito residuo: ${this.carica.toFixed(2)} €`;
    }
  
    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }
  
    chiamata(min: number): void {
      const costoChiamata = this.costoMinuto * min;
      if (costoChiamata <= this.carica) {
        this.carica -= costoChiamata;
        this.numeroChiamate++;
        const nuovaChiamata = {
          id: this.numeroChiamate,
          durata: min,
          dataOra: new Date(),
        };
        this.registroChiamate.push(nuovaChiamata);
      } else {
        console.log("Credito insufficiente. Non è possibile effettuare la chiamata");
      }
    }
  
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
      this.registroChiamate = [];
    }
  
    mostraRegistroChiamate(): void {
      console.log("Registro chiamate:");
      this.registroChiamate.forEach((chiamata) => {
        console.log(
          `ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data e ora: ${chiamata.dataOra}`
        );
      });
    }
  
    filtraChiamatePerDataOra(dataOra: Date): void {
      const chiamateFiltrate = this.registroChiamate.filter(
        (chiamata) => chiamata.dataOra.getTime() === dataOra.getTime()
      );
      console.log(`Chiamate effettuate in data e ora ${dataOra}:`);
      chiamateFiltrate.forEach((chiamata) => {
        console.log(
          `ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data e ora: ${chiamata.dataOra}`
        );
      });
    }
  }
  
  const smartphone1 = new Smartphone();
  const smartphone2 = new Smartphone();
  const smartphone3 = new Smartphone();
  
  smartphone1.ricarica(20);
  smartphone1.chiamata(5);
  smartphone1.chiamata(12);
  smartphone1.chiamata(2);
  
  smartphone2.ricarica(15);
  smartphone2.chiamata(3);
  smartphone2.chiamata(1);
  
  smartphone3.ricarica(10);
  smartphone3.chiamata(2);
  smartphone3.chiamata(2);
  smartphone3.chiamata(3);
  smartphone3.chiamata(4);
  smartphone3.chiamata(1);
  
  console.log(smartphone1.numero404());
  console.log(smartphone1.getNumeroChiamate());
  
  console.log(smartphone2.numero404());
  console.log(smartphone2.getNumeroChiamate());
  
  console.log(smartphone3.numero404());
  console.log(smartphone3.getNumeroChiamate());
  
  smartphone1.mostraRegistroChiamate();
  
  const dataOra = new Date();
  smartphone1.filtraChiamatePerDataOra(dataOra);
  