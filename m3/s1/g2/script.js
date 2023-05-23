var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balance) {
        this.balance = balance;
    }
    SonAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('fondi insufficienti');
        }
    };
    SonAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = this.balance * 0.1;
        this.deposit(interest);
    };
    return MotherAccount;
}(SonAccount));
var accountFiglio = new SonAccount(0);
var accountMadre = new MotherAccount(0);
accountFiglio.deposit(100);
accountFiglio.withdraw(50);
accountMadre.deposit(500);
accountMadre.addInterest();
console.log("Saldo del conto figlio: ".concat(accountFiglio.getBalance()));
console.log("Saldo del conto madre: ".concat(accountMadre.getBalance()));
