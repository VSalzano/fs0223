var capoDiAbbigliamento = /** @class */ (function () {
    function capoDiAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivainclusa, prezzoivaesclusa, disponibile, saldo) {
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
    capoDiAbbigliamento.prototype.mostraPrezzo = function () {
        console.log("Il capo ".concat(this.capo, ", scontato del ").concat(this.saldo, "%, costa ").concat(this.prezzoivainclusa * (1 - this.saldo / 100), " \u20AC"));
    };
    return capoDiAbbigliamento;
}());
fetch('Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (catalogo) {
    console.log(catalogo);
    var arr = [];
    catalogo.forEach(function (vestito) {
        var abito = new capoDiAbbigliamento(vestito.id, vestito.codprod, vestito.collezione, vestito.capo, vestito.modello, vestito.quantita, vestito.colore, vestito.prezzoivainclusa, vestito.prezzoivaesclusa, vestito.disponibile, vestito.saldo);
        arr.push(abito);
    });
    console.log(arr);
    arr.forEach(function (vestito) { return vestito.mostraPrezzo(); });
});
