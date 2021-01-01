const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
const details = document.querySelector(".object-and-details > details");

if (mediaQuery.matches) {
  details.removeAttribute("open");
}

function addMember(name, imageUrl, role, ability1, ability2,ability3,gif1,gif2,gif3){
    if(role == "Tank"){
      document.getElementById("ATank").src= imageUrl;
      document.getElementById("CTank").src= imageUrl;
      document.getElementById("CtitleTank").innerHTML = name;
     document.getElementById("titleTank").innerHTML = name;
     window.currentTank = name;
    
     window.tankAbility1 = ability1;
     window.tankAbility2 = ability2;
     window.tankAbility3 = ability3;

     window.tankGifCount1 = gif1
     window.tankGifCount2 = gif2
     window.tankGifCount3 = gif3
    }
    if(role == "Support"){
      document.getElementById("ASupport").src= imageUrl;
      document.getElementById("CSupport").src= imageUrl;
      document.getElementById("CtitleSupport").innerHTML = name;
      document.getElementById("titleSupport").innerHTML = name;
      window.currentSupport = name;
    
      window.supportAbility1 = ability1;
     window.supportAbility2 = ability2;
     window.supportAbility3 = ability3;

     window.supportGifCount1 = gif1
     window.supportGifCount2 = gif2
     window.supportGifCount3 = gif3
    }
    if(role == "Damage"){
      document.getElementById("ADamage").src= imageUrl;
      document.getElementById("CDamage").src= imageUrl;
      document.getElementById("CtitleDamage").innerHTML = name;
      document.getElementById("titleDamage").innerHTML = name;
      window.currentDamage = name;
    
      window.damageAbility1 = ability1;
     window.damageAbility2 = ability2;
     window.damageAbility3 = ability3;

     window.damageGifCount1 = gif1
     window.damageGifCount2 = gif2
     window.damageGifCount3 = gif3
    }
    var DataDamage = document.getElementById("titleDamage").innerHTML
    var DataTank = document.getElementById("titleTank").innerHTML
    var DataSupport = document.getElementById("titleSupport").innerHTML
    
    if (DataDamage != "Select" && DataTank != "Select" && DataSupport != "Select"  ){
      var delayInMilliseconds = 1000; //1 second
    
    setTimeout(function() {
      document.getElementById('startTheBattle').style.display="block";
    }, delayInMilliseconds);
    
      
    }
    }
    
          function myFunction() {
              var e, s, t;
              for (e = document.getElementById("mySearch").value.toUpperCase(), s = document.getElementById("myMenu")
                  .getElementsByTagName("li"), t = 0; t < s.length; t++) - 1 < s[t].getElementsByTagName("a")[0]
                  .innerHTML.toUpperCase().indexOf(e) ? s[t].style.display = "inline-block" : s[t].style.display = "none"
          }
    
        function Tank(ability1,ability2,ultimate){
            window.currentlyActive = "Tank";

          document.getElementById("ATank").style.display="none";
    
          document.getElementById("battlePoint1").innerHTML="-1";
          document.getElementById("battlePoint2").innerHTML="-1";
          document.getElementById("battlePoint3").innerHTML="-5";
    
          document.getElementById("ability1Stat").innerHTML="185";
          document.getElementById("ability1StatText").innerHTML=" Damage";
          document.getElementById("ability1Name").innerHTML = ability1;
          document.getElementById("ability1Type").innerHTML = "Strong slow attack doing less damage to other tanks.";
          
    
          document.getElementById("ability2Stat").innerHTML="135"
          document.getElementById("ability2StatText").innerHTML=" Damage";
          document.getElementById("ability2Name").innerHTML = ability2;
          document.getElementById("ability2Type").innerHTML = "Do damage to any enemy you select. ";
    
          document.getElementById("ability3Stat").innerHTML="400"
          document.getElementById("ability3StatText").innerHTML=" Health";
          document.getElementById("ability3Name").innerHTML = ultimate;
          document.getElementById("ability3Type").innerHTML = "Create a barrier around one character for 2 rounds. This barrier can be broken.";
    
          document.getElementById("role-indicator").innerHTML ="Tank"
          document.getElementById("role-indicator-icon").src="/assets/Tank.svg"
    
          document.getElementById("addToBattleTeam").style.backgroundColor = "#2D6BFF";
          document.getElementById ("ultimate-item").style.borderColor ="#2D6BFF"
          document.getElementById("ability3Name").style.color = "#2D6BFF"
        }
    
    
        function Damage(ability1,ability2,ultimate){
    
            window.currentlyActive = "Damage";
    document.getElementById("ADamage").style.display="none";
    
          document.getElementById("battlePoint1").innerHTML="-1";
          document.getElementById("battlePoint2").innerHTML="-1";
          document.getElementById("battlePoint3").innerHTML="-5";
    
          document.getElementById("ability1Stat").innerHTML="85"
          document.getElementById("ability1StatText").innerHTML=" Damage";
          document.getElementById("ability1Name").innerHTML = ability1;
          document.getElementById("ability1Type").innerHTML = "Quick, weaker attack with an 95% chance of hitting";
    
          document.getElementById("ability2Stat").innerHTML="150"
          document.getElementById("ability2StatText").innerHTML=" Damage";
          document.getElementById("ability2Name").innerHTML = ability2;
          document.getElementById("ability2Type").innerHTML = "Strong, slow attack with a 32% chance of missing.";
    
          document.getElementById("ability3Stat").innerHTML="420"
          document.getElementById("ability3StatText").innerHTML=" Damage";
          document.getElementById("ability3Name").innerHTML = ultimate;
          document.getElementById("ability3Type").innerHTML = "Massive blast of energy doing a large amount of damage ";
    
          document.getElementById("role-indicator").innerHTML ="Damage"
          document.getElementById("role-indicator-icon").src="/assets/Damage.svg"
    
          document.getElementById("addToBattleTeam").style.backgroundColor = "#E10B0B";
          document.getElementById ("ultimate-item").style.borderColor ="#E10B0B"
          document.getElementById("ability3Name").style.color = "#E10B0B"
        }
    
        function Support(ability1,ability2,ultimate){
window.currentlyActive = "Support"

          document.getElementById("ASupport").style.display="none";
    
          document.getElementById("battlePoint1").innerHTML="-1";
          document.getElementById("battlePoint2").innerHTML="-1";
          document.getElementById("battlePoint3").innerHTML="-5";
    
          document.getElementById("ability1Stat").innerHTML="185"
          document.getElementById("ability1StatText").innerHTML=" Damage";
          document.getElementById("ability1Name").innerHTML = ability1;
          document.getElementById("ability1Type").innerHTML = "Quick Strong Strike to one character.";
    
          document.getElementById("ability2Stat").innerHTML="135"
          document.getElementById("ability2StatText").innerHTML=" Health";
          document.getElementById("ability2Name").innerHTML = ability2;
          document.getElementById("ability2Type").innerHTML = "Restore a characters health. Bring characters back to life with a 35% chance of failing.";
    
          document.getElementById("ability3Stat").innerHTML="400"
          document.getElementById("ability3StatText").innerHTML=" Health";
          document.getElementById("ability3Name").innerHTML = ultimate;
          document.getElementById("ability3Type").innerHTML = "Bring a character back from the dead with 400 hp. This ability has a 45% chance of failing.";
    
          document.getElementById("role-indicator").innerHTML ="Support"
          document.getElementById("role-indicator-icon").src="/assets/Support.svg"
    
          document.getElementById("addToBattleTeam").style.backgroundColor = "#1DC55A";
          document.getElementById ("ultimate-item").style.borderColor ="#1DC55A"
          document.getElementById("ability3Name").style.color = "#1DC55A"
        }
    
        


        window.damageSelectionCount = 0;
window.tankSelectionCount = 0;
window.supportSelectionCount = 0;


function damageSelection(){

document.getElementById('selection').style.display="none";
window.damageSelectionCount = 0;
window.tankSelectionCount = 0;
window.supportSelectionCount = 0;



document.getElementById('attackGif').src= "Gif/" + currentDamage + loadedSelectedCount + ".gif";

document.getElementById('attackGif').onload = detailsDamage();

function detailsDamage(){
    details.open = true
    document.getElementById('attackPopover').style.display="block";
}


var timeTilDelete = 0;



if (loadedSelectedCount == 1){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
   timeTilDelete = damageGifCount1;
   battlePointCount = battlePointCount - 1;
   document.getElementById("battlePointCount").innerHTML = battlePointCount;

if(CCurrentSelected == "Tank"){
    enemyHealth1 = enemyHealth1 - 85;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
}

if(CCurrentSelected == "Damage"){
    enemyHealth2 = enemyHealth2 - 85;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
}

if(CCurrentSelected == "Support"){
    enemyHealth3 = enemyHealth3 - 85;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
}   
}




if (loadedSelectedCount == 2){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
    timeTilDelete = damageGifCount2;
    battlePointCount = battlePointCount - 1;
    document.getElementById("battlePointCount").innerHTML = battlePointCount;

    if(CCurrentSelected == "Tank"){
        enemyHealth1 = enemyHealth1 - 150;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
    }
    
    if(CCurrentSelected == "Damage"){
        enemyHealth2 = enemyHealth2 - 150;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
    }
    
    if(CCurrentSelected == "Support"){
        enemyHealth3 = enemyHealth3 -150;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
    }   
 }



 if (loadedSelectedCount == 3){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
    timeTilDelete = damageGifCount3;
    battlePointCount = battlePointCount - 5;
    document.getElementById("battlePointCount").innerHTML = battlePointCount;

    if(CCurrentSelected == "Tank"){
        enemyHealth1 = enemyHealth1 - 420;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
    }
    
    if(CCurrentSelected == "Damage"){
        enemyHealth2 = enemyHealth2 - 420;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
    }
    
    if(CCurrentSelected == "Support"){
        enemyHealth3 = enemyHealth3 - 420;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
    }   
 }






 
setTimeout(function() {
    eliminationHandler();
    document.getElementById('attackPopover').style.display="none";
    document.getElementById(BCurrentSelected).style.display="none";
    document.getElementById(BCurrentSelected).style.display="inline-block";
    document.getElementById(DCurrentSelected).style.display="none";
    document.getElementById("battlePointCountWrapper").style.display = "none";
    document.getElementById("battlePointCount").innerHTML = battlePointCount;
    details.open = false;
    setTimeout(function() {
        document.getElementById(DCurrentSelected).style.display="block";

    },50);

    setTimeout(function() {
   
        document.getElementById("battlePointCountWrapper").style.display = "block";
    },1000);


  }, timeTilDelete);
  


window.tankSelectionCount = 0;
window.supportSelectionCount = 0;

  document.getElementById('damageSelectGrid').style.opacity = "1";
  document.getElementById('tankSelectGrid').style.opacity = "0";
  document.getElementById('supportSelectGrid').style.opacity = "0";
}



function tankSelection(){

document.getElementById('selection').style.display="none";
window.tankSelectionCount = 0;
window.damageSelectionCount = 0;
window.supportSelectionCount = 0;



document.getElementById('attackGif').src= "Gif/" + currentTank + loadedSelectedCount + ".gif";

document.getElementById('attackGif').onload = detailsTank();

function detailsTank(){
    details.open = true
    document.getElementById('attackPopover').style.display="block";
}


var timeTilDelete = 0;


if (loadedSelectedCount == 1){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
    timeTilDelete = tankGifCount1;
    battlePointCount = battlePointCount - 1;
    document.getElementById("battlePointCount").innerHTML = battlePointCount;
 
 if(CCurrentSelected == "Tank"){
     enemyHealth1 = enemyHealth1 - 185;
     document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
 }
 
 if(CCurrentSelected == "Damage"){
    enemyHealth2 = enemyHealth2 - 185;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
 }
 
 if(CCurrentSelected == "Support"){
    enemyHealth3 = enemyHealth3 - 185;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
 }   
 }
 
 
 
 
 if (loadedSelectedCount == 2){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = tankGifCount2;
     battlePointCount = battlePointCount - 1;
     document.getElementById("battlePointCount").innerHTML = battlePointCount;
     if(CCurrentSelected == "Tank"){
        enemyHealth1 = enemyHealth1 - 135;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
     }
     
     if(CCurrentSelected == "Damage"){
        enemyHealth2 = enemyHealth2 - 135;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
     }
     
     if(CCurrentSelected == "Support"){
        enemyHealth3 = enemyHealth3 - 135;
        document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
     }   
  }
 
 
 
  if (loadedSelectedCount == 3){

    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = tankGifCount3;
     battlePointCount = battlePointCount - 4;
     document.getElementById("battlePointCount").innerHTML = battlePointCount;
     if(CCurrentSelected == "Tank"){
     
     }
     
     if(CCurrentSelected == "Damage"){
       
     }
     
     if(CCurrentSelected == "Support"){
     
     }   
  }
 
 
 
 

  
 setTimeout(function() {
    eliminationHandler();
   
     document.getElementById('attackPopover').style.display="none";
    
     details.removeAttribute("open");
     document.getElementById(BCurrentSelected).style.display="none";
     document.getElementById(BCurrentSelected).style.display="inline-block";
     document.getElementById(DCurrentSelected).style.display="none";
     document.getElementById("battlePointCountWrapper").style.display = "none";
     document.getElementById("battlePointCount").innerHTML = battlePointCount;
     details.open = false;
     setTimeout(function() {
         document.getElementById(DCurrentSelected).style.display="block";
 
     },50);
 
     setTimeout(function() {
    
         document.getElementById("battlePointCountWrapper").style.display = "block";
     },1000);
 
 
   }, timeTilDelete);



window.damageSelectionCount = 0;
window.supportSelectionCount = 0;

  document.getElementById('damageSelectGrid').style.opacity = "0";
  document.getElementById('tankSelectGrid').style.opacity = "1";
  document.getElementById('supportSelectGrid').style.opacity = "0";
}



function supportSelection(){

document.getElementById('selection').style.display="none";
window.tankSelectionCount = 0;
window.damageSelectionCount = 0;
window.supportSelectionCount = 0;



document.getElementById('attackGif').src= "Gif/" + currentSupport + loadedSelectedCount + ".gif";

document.getElementById('attackGif').onload = detailsSupport();

function detailsSupport(){
    details.open = true
    document.getElementById('attackPopover').style.display="block";
}


var timeTilDelete = 0;
document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";

if (loadedSelectedCount == 1){
    timeTilDelete = supportGifCount1;
    battlePointCount = battlePointCount - 1;
    document.getElementById("battlePointCount").innerHTML = battlePointCount;
 
 if(CCurrentSelected == "Tank"){
     enemyHealth1 = enemyHealth1 - 185;
     document.getElementById(ACurrentSelected).innerHTML = enemyHealth1;
 }
 
 if(CCurrentSelected == "Damage"){
    enemyHealth2 = enemyHealth2 - 185;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth2;
 }
 
 if(CCurrentSelected == "Support"){
    enemyHealth3 = enemyHealth3 - 185;
    document.getElementById(ACurrentSelected).innerHTML = enemyHealth3;
 }   
 }
 
 
 
 
 if (loadedSelectedCount == 2){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = supportGifCount2;
     battlePointCount = battlePointCount - 1;
     document.getElementById("battlePointCount").innerHTML = battlePointCount;

     if(CCurrentSelected == "Tank"){
       
     }
     
     if(CCurrentSelected == "Damage"){
      
     }
     
     if(CCurrentSelected == "Support"){
       
     }   
  }
 
 
 
  if (loadedSelectedCount == 3){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = supportGifCount3;
     battlePointCount = battlePointCount - 5;
     document.getElementById("battlePointCount").innerHTML = battlePointCount;

     if(CCurrentSelected == "Tank"){
       
     }
     
     if(CCurrentSelected == "Damage"){
     
     }
     
     if(CCurrentSelected == "Support"){
      
     }   
  }
 
 
 
 
 
 
  
 setTimeout(function() {
    eliminationHandler();
    
     document.getElementById('attackPopover').style.display="none";
     document.getElementById(BCurrentSelected).style.display="none";
     document.getElementById(BCurrentSelected).style.display="inline-block";
     document.getElementById(DCurrentSelected).style.display="none";
     document.getElementById("battlePointCountWrapper").style.display = "none";
     document.getElementById("battlePointCount").innerHTML = battlePointCount;
     details.open = false;
     setTimeout(function() {
         document.getElementById(DCurrentSelected).style.display="block";
 
     },50);
 
     setTimeout(function() {
    
         document.getElementById("battlePointCountWrapper").style.display = "block";
     },1000);
 
 
   }, timeTilDelete);


window.tankSelectionCount = 0;
window.damageSelectionCount = 0;

  document.getElementById('damageSelectGrid').style.opacity = "0";
  document.getElementById('tankSelectGrid').style.opacity = "0";
  document.getElementById('supportSelectGrid').style.opacity = "1";
}