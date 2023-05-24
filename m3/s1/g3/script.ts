{
    abstract class LavoratoreAutonomo {
    protected codredd: number;
    protected redditoannuolordo: number;
    protected tasseinps: number;
  
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
    }
  
    abstract calcolaRedditoNetto(): number;
  }
  
  class Lavoratore1 extends LavoratoreAutonomo {
    calcolaRedditoNetto(): number {
      const tasse = this.redditoannuolordo * (this.tasseinps / 100);
      const redditoNetto = this.redditoannuolordo - tasse;
      return redditoNetto;
    }
  }
  
  class Lavoratore2 extends LavoratoreAutonomo {
    calcolaRedditoNetto(): number {
      const tasse = this.redditoannuolordo * (this.tasseinps / 100);
      const redditoNetto = this.redditoannuolordo - tasse - 1000;
      return redditoNetto;
    }
  }
  

  const lavoratore1 = new Lavoratore1(1, 50000, 20);
  const redditoNetto1 = lavoratore1.calcolaRedditoNetto();
  console.log(`Reddito netto lavoratore 1: ${redditoNetto1} euro`);
  
  const lavoratore2 = new Lavoratore2(2, 60000, 25); 
  const redditoNetto2 = lavoratore2.calcolaRedditoNetto();
  console.log(`Reddito netto lavoratore 2: ${redditoNetto2} euro`);
}
  