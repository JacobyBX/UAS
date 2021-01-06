function purchaseCheck(){

}

window.currentSelectedPurchase = "null";
window.currentSelectedPrice = "null";

if(localStorage.getItem("newuser") == "false"){
    document.getElementById("visualCash").innerHTML = localStorage.getItem("A3muIln");
   

}else{
    localStorage.setItem("newuser", false);
    localStorage.setItem("A3muIln", 50);
    document.getElementById("visualCash").innerHTML = localStorage.getItem("A3muIln");
}





function addCash(cashAmount){
    localStorage.setItem("A3muIln", cashAmount);
    window.globalCashValue =  localStorage.getItem("A3muIln");;
}

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

