window.tankP1Health = 1500;
window.damageP1Health = 1200;
window.supportP1Health = 1000;
window.duoCheck = false
function shieldCheck(){
     
    if (loadedSelectedCount == 3 && currentlyActive == "Tank"){
      document.getElementById("selectionText").innerHTML="Select Teamate Shield";
      document.getElementsByClassName("select-cover")[0].style.marginTop = "-703px";
      document.getElementsByClassName("selection-shield-wrapper")[0].style.display = "block";
      document.getElementsByClassName("selection-support-wrapper")[0].style.display = "none";
      duoCheck = true;
      
       timeTilDelete = tankGifCount3;

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

        if (loadedSelectedCount == 2 && currentlyActive == "Support"){
            window.healingAmountTotal = 135;
          document.getElementById("selectionText").innerHTML="Select Teamate To Heal";
          document.getElementsByClassName("select-cover")[0].style.marginTop = "-703px";
          document.getElementsByClassName("selection-support-wrapper")[0].style.display = "block";
          document.getElementsByClassName("selection-shield-wrapper")[0].style.display = "none";
          duoCheck = true;

           if(CCurrentSelected == "Tank"){
           
           }
           
           if(CCurrentSelected == "Damage"){
             
           }
           
           if(CCurrentSelected == "Support"){
           
           }   
        }else{
      
        }
     
        if (loadedSelectedCount == 3 && currentlyActive == "Support"){
            window.healingAmountTotal = 400
          document.getElementById("selectionText").innerHTML="Select Teamate To Heal";
          document.getElementsByClassName("select-cover")[0].style.marginTop = "-703px";
          document.getElementsByClassName("selection-support-wrapper")[0].style.display = "block";
          document.getElementsByClassName("selection-shield-wrapper")[0].style.display = "none";
        
           if(CCurrentSelected == "Tank"){
           
           }
           
           if(CCurrentSelected == "Damage"){
             
           }
           
           if(CCurrentSelected == "Support"){
           
           }   
        }else{
      
        }
        }

        function healingHandler(healingAmount, amount){
  
            if (healingAmount == 1){
             
                supportSelection();
                document.getElementById("healingBadgeTank").style.display="block";
                setTimeout(function(){
                    document.getElementById("healingBadgeTank").style.display="none";;
                }, 10000);
                tankP1Health = tankP1Health + healingAmountTotal;
                document.getElementById("P1TankHealth").innerHTML = tankP1Health;
            }
            if (healingAmount == 2){
               
              supportSelection();
              document.getElementById("healingBadgeDamage").style.display="block";
              setTimeout(function(){
                document.getElementById("healingBadgeDamage").style.display="none";;
            }, 10000);
            damageP1Health = damageP1Health + healingAmountTotal;
            document.getElementById("P1DamageHealth").innerHTML = damageP1Health;
            }
          
            if (healingAmount == 3){
               
              alert("You can't heal yourself. ")
          
            }
            
              }