var capoDiAbbigliamento = /** @class */ (function () {
    function capoDiAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivainclusa, prezzoivaesclusa, disponibile, saldo) {
        var _this = this;
        this.mostraPrezzo = function () {
            var sconto = (_this.saldo * 100) / _this.prezzoivainclusa;
            console.log("Il capo ".concat(_this.capo, ", scontato del ").concat(_this.saldo, "% costa ").concat(_this.prezzoivainclusa - sconto, " \u20AC"));
        };
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
    return capoDiAbbigliamento;
}());
