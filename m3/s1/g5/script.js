var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "Credito residuo: ".concat(this.carica.toFixed(2), " \u20AC");
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = this.costoMinuto * min;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var nuovaChiamata = {
                id: this.numeroChiamate,
                durata: min,
                dataOra: new Date(),
            };
            this.registroChiamate.push(nuovaChiamata);
        }
        else {
            console.log("Credito insufficiente. Non è possibile effettuare la chiamata");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        console.log("Registro chiamate:");
        this.registroChiamate.forEach(function (chiamata) {
            console.log("ID: ".concat(chiamata.id, ", Durata: ").concat(chiamata.durata, " minuti, Data e ora: ").concat(chiamata.dataOra));
        });
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (dataOra) {
        var chiamateFiltrate = this.registroChiamate.filter(function (chiamata) { return chiamata.dataOra.getTime() === dataOra.getTime(); });
        console.log("Chiamate effettuate in data e ora ".concat(dataOra, ":"));
        chiamateFiltrate.forEach(function (chiamata) {
            console.log("ID: ".concat(chiamata.id, ", Durata: ").concat(chiamata.durata, " minuti, Data e ora: ").concat(chiamata.dataOra));
        });
    };
    return Smartphone;
}());
var smartphone1 = new Smartphone();
var smartphone2 = new Smartphone();
var smartphone3 = new Smartphone();
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
var dataOra = new Date();
smartphone1.filtraChiamatePerDataOra(dataOra);
