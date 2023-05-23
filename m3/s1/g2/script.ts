class SonAccount {

    balance:number;

    constructor(balance:number){
        this.balance = balance;
    }
    deposit(amount:number):void {
        this.balance += amount;
    }
    withdraw(amount:number):void {
        if (amount <= this.balance) {
            this.balance -= amount;
    } else {
        console.log('fondi insufficienti')
    }
    }
    getBalance():number {
        return this.balance;
    }
}

class MotherAccount extends SonAccount {
    addInterest(): void {
      const interest = this.balance * 0.1;
      this.deposit(interest);
    }
  }

const accountFiglio = new SonAccount(0);
const accountMadre = new MotherAccount(0);

accountFiglio.deposit(100);
accountFiglio.withdraw(50);

accountMadre.deposit(500);
accountMadre.addInterest();

console.log(`Saldo del conto figlio: ${accountFiglio.getBalance()}`);
console.log(`Saldo del conto madre: ${accountMadre.getBalance()}`);