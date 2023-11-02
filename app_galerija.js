/* --------- js for product gallery --------- */

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
    document.getElementById("name-clo").innerHTML = "Tamnoplava jakna";
    document.getElementById("price-clo").innerHTML = "€65.00";
    document.getElementById("text-clo").innerHTML = "Elegantna muška tamnoplava jakna kompanije Aldo - ovo je savršen procvat za garderobu koja zahteva samo najbolje u svakodnevnoj muškoj odeći.";
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
    document.getElementById("name-clo").innerHTML = "Maslinastozelena jakna";
    document.getElementById("price-clo").innerHTML = "€74.00";
    document.getElementById("text-clo").innerHTML = "Originalna maslinasto zelena Aldo jakna je ikonski komad modne muške odeće za bilo koju garderobu. Ova ležerna jakna upotpunjena je brendiranjem koje traje generacijama.";
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
    document.getElementById("name-clo").innerHTML = "Crna kožna jakna";
    document.getElementById("price-clo").innerHTML = "€58.00";
    document.getElementById("text-clo").innerHTML = "Idealan za jesen / zimu, Aldo predstavlja crnu kožnu jaknu za muškarca koji traži udobnost i toplinu u odnosu na elemente.";
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
    document.getElementById("name-clo").innerHTML = "Siva jakna";
    document.getElementById("price-clo").innerHTML = "€48.00";
    document.getElementById("text-clo").innerHTML = "Potpisna, siva jakna originalnog Alda. Ova muška siva pamučna jakna kombinuje klasični stil muške odeće sa legendom modne garderobe. Ova pamučna jakna upotpunjena je brendiranjem koje traje generacijama.";
}