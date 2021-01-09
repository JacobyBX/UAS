const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
const details = document.querySelector(".object-and-details > details");
window.currentAttackValue = 0;
window.currentBattlePointCount = 0;

if (mediaQuery.matches) {
  details.removeAttribute("open");
}

function addMember(name, imageUrl, role, ability1, ability2,ability3,gif1,gif2,gif3, abilitystat1,abilitystat2, abilitystat3, mcCount , abilitytype1, abilitytype2, abilitytype3, bpoint1, bpoint2, bpoint3, health){
    if(mcCount == 1){
      document.getElementById("ATank").src= imageUrl;
      document.getElementById("CTank").src= imageUrl;
      document.getElementById("CtitleTank").innerHTML = name;
     document.getElementById("titleTank").innerHTML = name;
document.getElementById('previewHealth1').innerHTML = health;
window.localHealthMesh1 = health;
    
     window.tankAbility1 = ability1;
     window.tankAbility2 = ability2;
     window.tankAbility3 = ability3;

     window.tankGifCount1 = gif1;
     window.tankGifCount2 = gif2;
     window.tankGifCount3 = gif3;

     window.tankAbilityStat1 = abilitystat1;
     window.tankAbilityStat2 = abilitystat2;
     window.tankAbilityStat3 = abilitystat3;

     window.tankAbilityType1 = abilitytype1;
     window.tankAbilityType2 = abilitytype2;
     window.tankAbilityType3 = abilitytype3;

     window.tankBattlePoint1 = bpoint1; 
     window.tankBattlePoint2 = bpoint2; 
     window.tankBattlePoint3 = bpoint3; 

     window.UtankHealth1 = health;

     window.currentTank = name

    }
    if(mcCount == 3){
      document.getElementById("ASupport").src= imageUrl;
      document.getElementById("CSupport").src= imageUrl;
      document.getElementById("CtitleSupport").innerHTML = name;
      document.getElementById("titleSupport").innerHTML = name;
      document.getElementById('previewHealth3').innerHTML = health;
      window.localHealthMesh3 = health;
    
      window.supportAbility1 = ability1;
     window.supportAbility2 = ability2;
     window.supportAbility3 = ability3;

     window.supportGifCount1 = gif1
     window.supportGifCount2 = gif2
     window.supportGifCount3 = gif3

     window.currentSupport = name

     window.supportAbilityStat1 = abilitystat1;
     window.supportAbilityStat2 = abilitystat2;
     window.supportAbilityStat3 = abilitystat3;

     window.supportAbilityType1 = abilitytype1;
     window.supportAbilityType2 = abilitytype2;
     window.supportAbilityType3 = abilitytype3;

     window.supportBattlePoint1 = bpoint1; 
     window.supportBattlePoint2 = bpoint2; 
     window.supportBattlePoint3 = bpoint3; 

     window.UsupportHealth1 = health;
    }
    if(mcCount == 2){
      document.getElementById("ADamage").src= imageUrl;
      document.getElementById("CDamage").src= imageUrl;
      document.getElementById("CtitleDamage").innerHTML = name;
      document.getElementById("titleDamage").innerHTML = name;
      document.getElementById('previewHealth2').innerHTML = health;
      window.localHealthMesh2 = health;
    
      window.damageAbility1 = ability1;
     window.damageAbility2 = ability2;
     window.damageAbility3 = ability3;

     window.damageGifCount1 = gif1
     window.damageGifCount2 = gif2
     window.damageGifCount3 = gif3

     window.damageAbilityStat1 = abilitystat1;
     window.damageAbilityStat2 = abilitystat2;
     window.damageAbilityStat3 = abilitystat3;

     window.damageAbilityType1 = abilitytype1
     window.damageAbilityType2 = abilitytype2
     window.damageAbilityType3 = abilitytype3

     window.damageBattlePoint1 = bpoint1; 
     window.damageBattlePoint2 = bpoint2; 
     window.damageBattlePoint3 = bpoint3;

     window.currentDamage = name;
     
     window.UdamageHealth1 = health;
    }
    var DataDamage = document.getElementById("titleDamage").innerHTML
    var DataTank = document.getElementById("titleTank").innerHTML
    var DataSupport = document.getElementById("titleSupport").innerHTML
    
    if (DataDamage != "Select" && DataTank != "Select" && DataSupport != "Select"  ){
      var delayInMilliseconds = 1000; //1 second
    
    setTimeout(function() {
      document.getElementById('startTheBattle').style.display="block";

      document.getElementById('P1TankHealth').innerHTML = localHealthMesh1;
      document.getElementById('P1DamageHealth').innerHTML = localHealthMesh2;
      document.getElementById('P1SupportHealth').innerHTML = localHealthMesh3;

     
window.p1U = userStatus + " " + 1 + " Init " + document.getElementById("titleTank").innerHTML.toLowerCase();


window.p2U = userStatus + " " + 2 + " Init " + document.getElementById("titleDamage").innerHTML.toLowerCase();


window.p3U = userStatus + " " + 3 + " Init " + document.getElementById("titleSupport").innerHTML.toLowerCase();


window.Healthp1U = userStatus + " " + 1 + " Health " + localHealthMesh1;


window.Healthp2U = userStatus + " " + 2 + " Health " + localHealthMesh2;



window.Healthp3U = userStatus + " " + 3 + " Health " + localHealthMesh3;






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
    
         
     

    
       
      
          document.getElementById("ability1Name").innerHTML = ability1;
          document.getElementById("ability1Type").innerHTML = "Strong slow attack doing less damage to other tanks.";
          
    
          
      
          document.getElementById("ability2Name").innerHTML = ability2;
          document.getElementById("ability2Type").innerHTML = "Do damage to any enemy you select. ";
    
    
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
    
   
        
  
          document.getElementById("ability1Name").innerHTML = ability1;
          document.getElementById("ability1Type").innerHTML = "Quick, weaker attack with an 95% chance of hitting";
    
  
          document.getElementById("ability2Name").innerHTML = ability2;
          document.getElementById("ability2Type").innerHTML = "Strong, slow attack with a 32% chance of missing.";
    

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




document.getElementById('attackVideo').setAttribute("data-yt2html5", "Gif/" + currentGifId + loadedSelectedCount + ".gif");

document.getElementById('attackPopover').style.display='block';

new YouTubeToHtml5()


var timeTilDelete = 0;



if (loadedSelectedCount == 1){

   timeTilDelete = damageGifCount1;

}




if (loadedSelectedCount == 2){

    timeTilDelete = damageGifCount2;
 
 }



 if (loadedSelectedCount == 3){
  
    timeTilDelete = damageGifCount3;
  
 }






 
setTimeout(function() {
    eliminationHandler();
    document.getElementById('attackPopover').style.display="none";
    document.getElementById(BCurrentSelected).style.display="none";
 
    document.getElementById(DCurrentSelected).style.display="none";
    document.getElementById("battlePointCountWrapper").style.display = "none";
    document.getElementById("battlePointCount").innerHTML = battlePointCount;

    setTimeout(function() {
        document.getElementById(DCurrentSelected).style.display="block";
        document.getElementById(BCurrentSelected).style.display="inline-block";
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




document.getElementById('attackVideo').setAttribute("data-yt2html5", "https://youtu.be/7Z2Xxq4irJA");



new YouTubeToHtml5()

setTimeout(function() {
    
    document.getElementById('attackPopover').style.display='block';
},1000);



function detailsTank(){
    details.open = true
    document.getElementById('attackPopover').style.display="block";
}


var timeTilDelete = 0;


if (loadedSelectedCount == 1){

    timeTilDelete = tankGifCount1;

 
 }
 
 
 
 
 if (loadedSelectedCount == 2){
 
     timeTilDelete = tankGifCount2;
 
  }
 
 
 
  if (loadedSelectedCount == 3){

    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = tankGifCount3;
 
  }
 
 
 
 

  
 setTimeout(function() {
    eliminationHandler();
   
     document.getElementById('attackPopover').style.display="none";
    
     details.removeAttribute("open");
     document.getElementById(BCurrentSelected).style.display="none";
     
     document.getElementById(DCurrentSelected).style.display="none";
     document.getElementById("battlePointCountWrapper").style.display = "none";
     document.getElementById("battlePointCount").innerHTML = battlePointCount;
  
     setTimeout(function() {
         document.getElementById(DCurrentSelected).style.display="block";
         document.getElementById(BCurrentSelected).style.display="inline-block";
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



document.getElementById('attackVideo').setAttribute(data-yt2html5, "Gif/" + currentGifId + loadedSelectedCount + ".gif");






var timeTilDelete = 0;
document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";

if (loadedSelectedCount == 1){
    timeTilDelete = supportGifCount1;
    battlePointCount = battlePointCount - currentBattlePointCount;

 }
 
 
 
 
 if (loadedSelectedCount == 2){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = supportGifCount2;
     battlePointCount = battlePointCount - currentBattlePointCount;

  }
 
 
 
  if (loadedSelectedCount == 3){
    document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";
     timeTilDelete = supportGifCount3;
 
  }
 
 
 
 
 
 
  
 setTimeout(function() {
    eliminationHandler();
    
     document.getElementById('attackPopover').style.display="none";
     document.getElementById(BCurrentSelected).style.display="none";
    
     document.getElementById(DCurrentSelected).style.display="none";
     document.getElementById("battlePointCountWrapper").style.display = "none";
     document.getElementById("battlePointCount").innerHTML = battlePointCount;

     setTimeout(function() {
         document.getElementById(DCurrentSelected).style.display="block";
         document.getElementById(BCurrentSelected).style.display="inline-block";
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