window.spannerWidth= 10;
window.iconWidth = -80;
window.startState = 80;
function purchaseCheck(checkName){
console.log("Checking Purchase Status")
if(localStorage.getItem(checkName) == 'owned' || localStorage.getItem(checkName) == 'true' ){
document.getElementById('MO' + checkName).style.display="inline-block";
document.getElementById('EM' + checkName).style.display="none";
document.getElementById('URLock' + checkName).style.zIndex = "-1";
document.getElementById('icon' + checkName).style.pointerEvents = "all"
}
}

window.startupCount = 0;

if (localStorage.getItem("useractive") == "false"){
    document.getElementById('register').style.display = 'none'; 
}else{
    setTimeout(function(){
        document.getElementById('register').style.display = 'block';
       
    }, 1000);
}

function starter(startName, startUserState){
    if(localStorage.getItem("alt") == "false"){
        purchaseCheck(startName)
       
   
    }else{
      

     console.log(startName);
     startupCount = startupCount + 1;
     document.getElementById("visualCash").innerHTML = localStorage.getItem("A3muIln"); 
     
   
     localStorage.setItem(startName, startUserState);
     localStorage.setItem("alt", false);
     localStorage.setItem("A3muIln", 50);
     if(startupCount == 40 ){
     
       
        document.getElementById("visualCash").innerHTML = localStorage.getItem("A3muIln")
     }
 
    }

    if(localStorage.getItem(startName) == 'true' || localStorage.getItem(startName) == 'false' || localStorage.getItem(startName) == 'owned'){
        console.log("Good")
    }else{
        localStorage.setItem(startName, startUserState); 
        console.log(startName + " Stored In LS")
    }
}


window.currentPurchasePrice = 0;

window.currentSelectedPurchase = "null";
window.currentSelectedPrice = "null";





function addCash(cashAmount){
    localStorage.setItem("A3muIln", parseInt(localStorage.getItem("A3muIln")) + cashAmount)
    window.globalCashValue =  localStorage.getItem("A3muIln");
    document.getElementById('visualCash').innerHTML = globalCashValue
}

function removeCash(cashAmount){
    localStorage.setItem("A3muIln", parseInt(localStorage.getItem("A3muIln")) - cashAmount)
    window.globalCashValue =  localStorage.getItem("A3muIln");
    document.getElementById('visualCash').innerHTML = globalCashValue
}

function purchase(purchaseName, purchasePrice, purchaseImage){
    document.getElementById("purchase").style.display="block";
document.getElementById("memberNamePurchase").innerHTML = purchaseName;
document.getElementById("purchase-cost").innerHTML =  purchasePrice;
document.getElementById("card-img-purchase").src =  purchaseImage;
currentSelectedPrice = purchasePrice
}

function completePurchase(){
    if(parseInt(localStorage.getItem("A3muIln")) > currentSelectedPrice)
    {
        document.getElementById('purchase').style.display='none';document.getElementById('purchase-complete').style.display='block';

        setTimeout(function(){
         document.getElementById('purchaseSound').play();
     
     }, 1000);
         setTimeout(function(){
            
             document.getElementById('purchase-complete').style.display='none';
             document.getElementById('visualCash').style.display='none';
         }, 3000);
         setTimeout(function(){
             removeCash(currentSelectedPrice)
         
             document.getElementById('visualCash').style.display='block';
     
             localStorage.setItem(currentSelectedPurchase, "owned"); 
             document.getElementById('MO' + currentSelectedPurchase).style.display="inline-block";
             document.getElementById('EM' + currentSelectedPurchase).style.display="none";
         }, 3200);
    }else{
        document.getElementById('negativeSound').play()
        alert("You do not have enough battlepoints.")
    }

}

