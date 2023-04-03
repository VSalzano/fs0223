if (areaRettangolo >= 100) {
    document.getElementById("testo1").innerHTML = "Questo rettangolo è molto grande";
}else if (areaRettangolo <= 30) {
    document.getElementById("testo1").innerHTML = "Questo rettangolo è molto piccolo";
}else {
    document.getElementById("testo1").innerHTML = "Questo rettangolo è di medie dimensioni";
}