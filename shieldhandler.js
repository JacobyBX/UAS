function shieldCheck(){
     
    if (loadedSelectedCount == 3 && currentlyActive == "Tank"){
      document.getElementById("selectionText").innerHTML="Select Teamate Shield";
      document.getElementsByClassName("select-cover")[0].style.marginTop = "-703px";
       timeTilDelete = tankGifCount3;
       battlePointCount = battlePointCount - 5
       if(CCurrentSelected == "Tank"){
       
       }
       
       if(CCurrentSelected == "Damage"){
         
       }
       
       if(CCurrentSelected == "Support"){
       
       }   
    }else{
      document.getElementsByClassName("select-cover")[0].style.marginTop = "0";
      document.getElementById("selectionText").innerHTML="Select Enemy to Attack";
    }
    }
  
    function shieldHandler(shieldAmount,){
  
  if (shieldAmount == 1){
    alert("You can't activate a shield around yourself. ")
  }
  if (shieldAmount == 2){
    tankSelection();
  document.getElementById("damageShield").style.display = "block";
  battlePointCount = battlePointCount - 4;
  }

  if (shieldAmount == 3){
    tankSelection();
  document.getElementById("supportShield").style.display = "block";
  battlePointCount = battlePointCount - 4;
  }
  
    }