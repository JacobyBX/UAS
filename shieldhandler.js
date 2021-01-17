window.tankP1Health = 1500;
window.damageP1Health = 1200;
window.supportP1Health = 1000;
window.duoCheck = false;
window.currentState = "null"



/*
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
  
 */

    function shieldHandler(shieldAmount,){
      currentState = "sheild";
  
      if (currentFlexPick== 1){
        tankSelection()
      }
      if (currentFlexPick == 2){
damageSelection()
      }
      if (currentFlexPick == 3){
        supportSelection()
                  }

  if (shieldAmount == 1){
    document.getElementById("tankShield").style.display = "block";
    document.getElementById("tankShieldHealth").innerHTML = currentAttackValue;
    tankP1Health = tankP1Health + parseInt(currentAttackValue);
    document.getElementById("P1TankHealth").innerHTML = tankP1Health
  }
  if (shieldAmount == 2){

  document.getElementById("damageShield").style.display = "block";
  document.getElementById("damageShieldHealth").innerHTML = currentAttackValue;
  damageP1Health = damageP1Health + parseInt(currentAttackValue);
  document.getElementById("P1DamageHealth").innerHTML = damageP1Health

  }

  if (shieldAmount == 3){

  document.getElementById("supportShield").style.display = "block";
  document.getElementById("supportShieldHealth").innerHTML = currentAttackValue;
  supportP1Health = supportP1Health + parseInt(currentAttackValue);
  document.getElementById("P1SupportHealth").innerHTML = supportP1Health


  }
  
    }


    
    function damageHandler(attackItem){
      currentState = "damage";

      if (currentFlexPick== 1){
        tankSelection()
      }
      if (currentFlexPick == 2){
damageSelection()
      }
      if (currentFlexPick == 3){
        supportSelection()
                  }

      if (attackItem == 1){
        enemyHealth1 = enemyHealth1 - currentAttackValue;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
      }
      if (attackItem == 2){
        enemyHealth2 = enemyHealth2 - currentAttackValue;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
    
      }
    
      if (attackItem == 3){
        enemyHealth3 = enemyHealth3 - currentAttackValue;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
    
    
      }
      
        }
    



    




        function healingHandler(healingAmount, amount){
          currentState = "healing";

          if (currentFlexPick== 1){
            tankSelection()
          }
          if (currentFlexPick == 2){
    damageSelection()
          }
          if (currentFlexPick == 3){
            supportSelection()
                      }
            if (healingAmount == 1){
             
       
                document.getElementById("healingBadgeTank").style.display="block";
                setTimeout(function(){
                    document.getElementById("healingBadgeTank").style.display="none";;
                }, 10000);
                localHealthMesh1 = parseInt(localHealthMesh1) + healingAmountTotal;
                document.getElementById("P1TankHealth").innerHTML = localHealthMesh1;
            }
            if (healingAmount == 2){
               
     
              document.getElementById("healingBadgeDamage").style.display="block";
              setTimeout(function(){
                document.getElementById("healingBadgeDamage").style.display="none";;
            }, 10000);
            localHealthMesh2 = parseInt(localHealthMesh2) + healingAmountTotal;
            document.getElementById("P1DamageHealth").innerHTML = localHealthMesh2;
            }
          
            if (healingAmount == 3){
               
              document.getElementById("healingBadgeSupport").style.display="block";
              setTimeout(function(){
                document.getElementById("healingBadgeSupport").style.display="none";;
            }, 10000);
            localHealthMesh3 = parseInt(localHealthMesh3) + healingAmountTotal;
            document.getElementById("P1SupportHealth").innerHTML = localHealthMesh3;
          
            }
            
              }