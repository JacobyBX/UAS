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

function completePurchase(){
   document.getElementById('purchase').style.display='none';document.getElementById('purchase-complete').style.display='block';

   setTimeout(function(){
    document.getElementById('purchaseSound').play();

}, 1000);
    setTimeout(function(){
       
        document.getElementById('purchase-complete').style.display='none';
    }, 3000);
}

