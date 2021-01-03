function purchaseCheck(){

}

window.currentSelectedPurchase = "null";
window.currentSelectedPrice = "null";

function purchase(purchaseName, purchasePrice, purchaseImage){
    document.getElementById("purchase").style.display="block";
document.getElementById("memberNamePurchase").innerHTML = purchaseName;
document.getElementById("purchase-cost").innerHTML =  purchasePrice;
document.getElementById("card-img-purchase").src =  purchaseImage;
}

