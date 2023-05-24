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
{
    var LavoratoreAutonomo = /** @class */ (function () {
        function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinps) {
            this.codredd = codredd;
            this.redditoannuolordo = redditoannuolordo;
            this.tasseinps = tasseinps;
        }
        return LavoratoreAutonomo;
    }());
    var Lavoratore1 = /** @class */ (function (_super) {
        __extends(Lavoratore1, _super);
        function Lavoratore1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Lavoratore1.prototype.calcolaRedditoNetto = function () {
            var tasse = this.redditoannuolordo * (this.tasseinps / 100);
            var redditoNetto = this.redditoannuolordo - tasse;
            return redditoNetto;
        };
        return Lavoratore1;
    }(LavoratoreAutonomo));
    var Lavoratore2 = /** @class */ (function (_super) {
        __extends(Lavoratore2, _super);
        function Lavoratore2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Lavoratore2.prototype.calcolaRedditoNetto = function () {
            var tasse = this.redditoannuolordo * (this.tasseinps / 100);
            var redditoNetto = this.redditoannuolordo - tasse - 1000;
            return redditoNetto;
        };
        return Lavoratore2;
    }(LavoratoreAutonomo));
    var lavoratore1 = new Lavoratore1(1, 50000, 20);
    var redditoNetto1 = lavoratore1.calcolaRedditoNetto();
    console.log("Reddito netto lavoratore 1: ".concat(redditoNetto1, " euro"));
    var lavoratore2 = new Lavoratore2(2, 60000, 25);
    var redditoNetto2 = lavoratore2.calcolaRedditoNetto();
    console.log("Reddito netto lavoratore 2: ".concat(redditoNetto2, " euro"));
}
