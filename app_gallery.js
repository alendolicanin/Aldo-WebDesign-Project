/* --------- js for product gallery --------- */

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
    document.getElementById("name-clo").innerHTML = "Dark Navy Slim Jacket";
    document.getElementById("price-clo").innerHTML = "€65.00";
    document.getElementById("text-clo").innerHTML = "A stylish men's dark navy blue jacket by The Aldo - this is a perfect flourish for the wardrobe that demands only the best in casual menswear.";
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
    document.getElementById("name-clo").innerHTML = "Dark Olive Green Fit Jacket";
    document.getElementById("price-clo").innerHTML = "€74.00";
    document.getElementById("text-clo").innerHTML = "The original olive green Aldo jacket is an iconic piece of mod menswear for any wardrobe. This casual jacket is completed with branding that has endured for generations.";
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
    document.getElementById("name-clo").innerHTML = "Black Leather Fit Jacket";
    document.getElementById("price-clo").innerHTML = "€58.00";
    document.getElementById("text-clo").innerHTML = "Ideal for Autumn / Winter, The Aldo presents a black leather fitted jacket for the man seeking comfort and warmth against the elements.";
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
    document.getElementById("name-clo").innerHTML = "Grey Fit Jacket";
    document.getElementById("price-clo").innerHTML = "€48.00";
    document.getElementById("text-clo").innerHTML = "A signature, grey fit jacket from the original The Aldo. This men's grey cotton jacket combines classic menswear style with a legend of the mod heritage wardrobe. This cotton jacket is completed with branding that has endured for generations.";
}