window.tankP1Health = 1500;
window.damageP1Health = 1200;
window.supportP1Health = 1000;

function shieldCheck(){
     
    if (loadedSelectedCount == 3 && currentlyActive == "Tank"){
      document.getElementById("selectionText").innerHTML="Select Teamate Shield";
      document.getElementsByClassName("select-cover")[0].style.marginTop = "-703px";
      document.getElementsByClassName("selection-shield-wrapper")[0].style.display = "block";
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
      document.getElementsByClassName("selection-shield-wrapper")[0].style.display = "none";
    }
    }
  
    function shieldHandler(shieldAmount,){
  
  if (shieldAmount == 1){
    alert("You can't activate a shield around yourself. ")
  }
  if (shieldAmount == 2){
    tankSelection();
  document.getElementById("damageShield").style.display = "block";
  document.getElementById("damageShieldHealth").innerHTML = "400"
  damageP1Health = damageP1Health + 400;
  document.getElementById("P1DamageHealth").innerHTML = damageP1Health

  }

  if (shieldAmount == 3){
    tankSelection();
  document.getElementById("supportShield").style.display = "block";
  document.getElementById("supportShieldHealth").innerHTML = "400"
  supportP1Health = supportP1Health + 400;
  document.getElementById("P1SupportHealth").innerHTML = supportP1Health


  }
  
    }



    function healingCheck(){
     
        if (loadedSelectedCount == 3 && currentlyActive == "Support"){
          document.getElementById("selectionText").innerHTML="Select Teamate To Heal";
          document.getElementsByClassName("select-cover")[0].style.marginTop = "-703px";
          document.getElementsByClassName("selection-support-wrapper")[0].style.display = "block";
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
          document.getElementsByClassName("selection-support-wrapper")[0].style.display = "none";
        }
        }

        function healingHandler(healingAmount,){
  
            if (healingAmount == 1){
                alert("Healing Activated")
                supportSelection();
                document.getElementById("healingBadgeTank").style.display="block";
            }
            if (healingAmount == 2){
                alert("Healing Activated")
              supportSelection();
              document.getElementById("healingBadgeDamage").style.display="block"
            }
          
            if (healingAmount == 3){
               
              alert("You can't heal yourself. ")
          
            }
            
              }