const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
const details = document.querySelector(".object-and-details > details");
window.currentAttackValue = 0;
window.currentBattlePointCount = 0;
window.local2VideoLength = "";
window.local2Video = "";
window.dmgState1 = false;
window.dmgState2 = false;
window.dmgState3 = false;
window.profileSelected= "";
window.userNameStatus = userStatus + " Username " + localStorage.getItem('Username');

document.getElementById('player1PreviewImg').src= "Banner/" + localStorage.getItem('ProfileIcon')  + ".png";
document.getElementById('player1Name').innerHTML =localStorage.getItem('Username')

if (mediaQuery.matches) {

}

setTimeout(function() {
    
  document.getElementById('welcome').style.display="none";
},4000);

window.profileIcon = localStorage.getItem('Username');

function authCheck(){
  if(profileSelected == true && document.getElementById("usernameInput").value.length >= 1){
    window.location='#';
    localStorage.setItem("useractive", false);
document.getElementById('register').style.display="none";
document.getElementById('welcome').style.display="block";
document.getElementById('welcomeName').innerHTML = localStorage.getItem('Username');
document.getElementById('skinSound').play();
document.getElementById('welcomeIcon').src="Banner/" + localStorage.getItem('ProfileIcon') + ".png";
document.getElementById('profileIcon').src='Banner/' + localStorage.getItem('ProfileIcon') + '.png';
document.getElementById('player1Name').innerHTML =localStorage.getItem('Username');
window.userNameStatus = userStatus + " Username" + localStorage.getItem('Username');
setTimeout(function() {

  document.getElementById('welcome').style.display="none";
},3000);

  }else{


  
    if(profileSelected == ""){
      document.getElementById('negativeSound').play();
      alert("Error: Please Select A Profile Icon")
    } 
    if(document.getElementById("usernameInput").value.length == 0){
      document.getElementById('negativeSound').play();
      alert("Error: Please Enter A Username")
    } 
  }
}



window.videoState = false;
window.currentVideoPlaying = "";
window.currentVideoStart = ""

function videoCheck() {
if(videoState == true){
    new YouTubeToHtml5();
    console.log("Video Added");
    videoState = false;
}
console.log("Video Check....")

    setTimeout(videoCheck, 1000);
}

videoCheck();


function EliminationCheckL() {

    if(localHealthMesh1 < 1){
        document.getElementById("player1CH").style.filter="saturate(0)"; 
        document.getElementById("player1CH").style.opacity="0.5"; 
        document.getElementById("player1CH").style.pointerEvents = "none"; 
     
      }else{
        console.log("Character Not Eliminated By Action")
      }
  
      if(localHealthMesh2 < 1){
        document.getElementById("player2CH").style.filter="saturate(0)"; 
        document.getElementById("player2CH").style.opacity="0.5"; 
        document.getElementById("player2CH").style.pointerEvents = "none";  
      }else{
        console.log("Character Not Eliminated By Action")
      }
  
      if(localHealthMesh3 < 1){
        document.getElementById("player3CH").style.filter="saturate(0)"; 
        document.getElementById("player3CH").style.opacity="0.5"; 
        document.getElementById("player3CH").style.pointerEvents = "none";
      }else{
        console.log("Character Not Eliminated By Action")
      }

    console.log("Elimination Check....")
    
        setTimeout(EliminationCheckL, 4000);
    }
    
    EliminationCheckL();
    



function addMember(name, imageUrl, role, ability1, ability2,ability3,gif1,gif2,gif3, abilitystat1,abilitystat2, abilitystat3, mcCount , abilitytype1, abilitytype2, abilitytype3, bpoint1, bpoint2, bpoint3, health, vid1,vid2,vid3,vStart1,vStart2,vStart3){
    if(mcCount == 1){
      document.getElementById("ATank").src= imageUrl;
      document.getElementById("CTank").src= imageUrl;
      document.getElementById("CtitleTank").innerHTML = name;
     document.getElementById("titleTank").innerHTML = name;
document.getElementById('previewHealth1').innerHTML = health;
window.localHealthMesh1 = health;

window.tankSkin = imageUrl;
    
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

     window.tankVideo1 = vid1;
     window.tankVideo2 = vid2;
     window.tankVideo3 = vid3;

     window.tankVideoStart1 = vStart1
     window.tankVideoStart2 = vStart2
     window.tankVideoStart3 = vStart3


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

     window.supportSkin = imageUrl;

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

     window.supportVideoStart1 = vStart1
     window.supportVideoStart2 = vStart2
     window.supportVideoStart3 = vStart3

     window.supportBattlePoint1 = bpoint1; 
     window.supportBattlePoint2 = bpoint2; 
     window.supportBattlePoint3 = bpoint3; 

     window.supportVideo1 = vid1;
     window.supportVideo2 = vid2;
     window.supportVideo3 = vid3;

     window.UsupportHealth1 = health;
    }
    if(mcCount == 2){
      document.getElementById("ADamage").src= imageUrl;
      document.getElementById("CDamage").src= imageUrl;
      document.getElementById("CtitleDamage").innerHTML = name;
      document.getElementById("titleDamage").innerHTML = name;
      document.getElementById('previewHealth2').innerHTML = health;
      window.localHealthMesh2 = health;

      window.damageSkin = imageUrl;
    
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

     window.damageVideoStart1 = vStart1
     window.damageVideoStart2 = vStart2
     window.damageVideoStart3 = vStart3

     window.damageVideo1 = vid1;
     window.damageVideo2 = vid2;
     window.damageVideo3 = vid3;

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

     
window.p1U = userStatus + " " + 1 + " Init " + tankSkin + 
" "  + document.getElementById("titleTank").innerHTML.toLowerCase();


window.p2U = userStatus + " " + 2 + " Init " + damageSkin + 
" "  + document.getElementById("titleDamage").innerHTML.toLowerCase();


window.p3U = userStatus + " " + 3 + " Init " + supportSkin + 
" "  + document.getElementById("titleSupport").innerHTML.toLowerCase();


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







window.timeTilDelete = 0;



if (loadedSelectedCount == 1){

   timeTilDelete = damageGifCount1;
   currentVideoPlaying = damageVideo1;
   currentVideoStart = damageVideoStart1;
   document.getElementById('attackVideo').setAttribute("data-yt2html5", damageVideo1);
    new YouTubeToHtml5()
        document.getElementById('attackPopover').style.display='block';
        setTimeout(function() {
        
            document.getElementById('attackVideo').currentTime = damageVideoStart1;
        },1000);
}




if (loadedSelectedCount == 2){

    timeTilDelete = damageGifCount2;
    currentVideoPlaying = damageVideo2;
    currentVideoStart = damageVideoStart2;
    document.getElementById('attackVideo').setAttribute("data-yt2html5", damageVideo2);
     new YouTubeToHtml5()
         document.getElementById('attackPopover').style.display='block';
         setTimeout(function() {
         
             document.getElementById('attackVideo').currentTime = damageVideoStart2;
         },1000);
 
 }



 if (loadedSelectedCount == 3){
  
    timeTilDelete = damageGifCount3;
  currentVideoPlaying = damageVideo3;
  currentVideoStart = damageVideoStart3;
    document.getElementById('attackVideo').setAttribute("data-yt2html5", damageVideo3);
    new YouTubeToHtml5()
        document.getElementById('attackPopover').style.display='block';
        setTimeout(function() {
        
            document.getElementById('attackVideo').currentTime = damageVideoStart3;
        },1000);
 }






 
setTimeout(function() {
    eliminationHandler();
    document.getElementById('attackPopover').style.display="none";
    document.getElementById(BCurrentSelected).style.display="none";

    document.getElementById('attackVideo').setAttribute("data-yt2html5", "https://youtu.be/iAqdQQv-gLQ");

    new YouTubeToHtml5()
 
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











var timeTilDelete = 0;


if (loadedSelectedCount == 1){

    timeTilDelete = tankGifCount1;
currentVideoPlaying =tankVideo1
currentVideoStart = tankVideoStart1;
    document.getElementById('attackPopover').style.display='block';
    document.getElementById('attackVideo').setAttribute("data-yt2html5", tankVideo1);
new YouTubeToHtml5()
    setTimeout(function() {
    
        document.getElementById('attackVideo').currentTime = tankVideoStart1;
    },1000);
 }
 
 
 
 
 if (loadedSelectedCount == 2){
 
     timeTilDelete = tankGifCount2;
currentVideoPlaying = tankVideo2;
currentVideoStart = tankVideoStart2;
     document.getElementById('attackVideo').setAttribute("data-yt2html5", tankVideo2);
     new YouTubeToHtml5()
         document.getElementById('attackPopover').style.display='block';
         setTimeout(function() {
         
             document.getElementById('attackVideo').currentTime = tankVideoStart2;
         },1000);
         alert(timeTilDelete)
  }
 
 
 
  if (loadedSelectedCount == 3){
    timeTilDelete = tankGifCount3;
currentVideoPlaying = tankVideo3;
currentVideoStart = tankVideoStart3;
    document.getElementById('attackVideo').setAttribute("data-yt2html5", tankVideo3);
    new YouTubeToHtml5()
        document.getElementById('attackPopover').style.display='block';
        setTimeout(function() {
        
            document.getElementById('attackVideo').currentTime = tankVideoStart3;
        },1000);
 
  }
 
 
 
 

  
 setTimeout(function() {
    eliminationHandler();
   
     document.getElementById('attackPopover').style.display="none";

     document.getElementById('attackVideo').setAttribute("data-yt2html5", "https://youtu.be/iAqdQQv-gLQ");

     new YouTubeToHtml5()
    

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








var timeTilDelete = 0;
document.getElementsByClassName("select-cover")[0].style.marginTop = "0px";

if (loadedSelectedCount == 1){
    timeTilDelete = supportGifCount1;
currentVideoPlaying = supportVideo1;
currentVideoStart = supportVideoStart1;
    document.getElementById('attackVideo').setAttribute("data-yt2html5", supportVideo1);
    new YouTubeToHtml5()
        document.getElementById('attackPopover').style.display='block';
        setTimeout(function() {
        
            document.getElementById('attackVideo').currentTime = supportVideoStart1;
        },1000);
 }
 
 
 
 
 if (loadedSelectedCount == 2){

    timeTilDelete = supportGifCount2;
currentVideoPlaying = supportVideo2;
currentVideoStart = supportVideoStart2;
    document.getElementById('attackVideo').setAttribute("data-yt2html5", supportVideo2);
    new YouTubeToHtml5()
        document.getElementById('attackPopover').style.display='block';
        setTimeout(function() {
        
            document.getElementById('attackVideo').currentTime = supportVideoStart2;
        },1000);

  }
 
 
 
  if (loadedSelectedCount == 3){
    timeTilDelete = supportGifCount3;
currentVideoPlaying = supportVideo3;
currentVideoStart = supportVideoStart3;
    document.getElementById('attackVideo').setAttribute("data-yt2html5", supportVideo3);
    new YouTubeToHtml5()
        document.getElementById('attackPopover').style.display='block';
        setTimeout(function() {
        
            document.getElementById('attackVideo').currentTime = supportVideoStart3;
        },1000);
 
  }
 
 
 
 
 
 
  
 setTimeout(function() {
    eliminationHandler();

    document.getElementById('attackVideo').setAttribute("data-yt2html5", "https://youtu.be/iAqdQQv-gLQ");

    new YouTubeToHtml5()
    
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


// Elimination Handler

function eliminationHandler(){
    if(enemyHealth1 < 1){
      document.getElementById("enemyh1Container").style.filter="saturate(0)"; 
      document.getElementById("enemyh1Container").style.opacity="0.5"; 
      document.getElementById("enemyh1Container").style.pointerEvents = "none"; 
   
    }else{
      console.log("Character Not Eliminated By Action")
    }

    if(enemyHealth2 < 1){
      document.getElementById("enemyh2Container").style.filter="saturate(0)"; 
      document.getElementById("enemyh2Container").style.opacity="0.5"; 
      document.getElementById("enemyh2Container").style.pointerEvents = "none";  
    }else{
      console.log("Character Not Eliminated By Action")
    }

    if(enemyHealth3 < 1){
      document.getElementById("enemyh3Container").style.filter="saturate(0)"; 
      document.getElementById("enemyh3Container").style.opacity="0.5"; 
      document.getElementById("enemyh3Container").style.pointerEvents = "none";
    }else{
      console.log("Character Not Eliminated By Action")
    }




    if(localHealthMesh1 < 1){
        document.getElementById("player1CH").style.filter="saturate(0)"; 
        document.getElementById("player1CH").style.opacity="0.5"; 
        document.getElementById("player1CH").style.pointerEvents = "none"; 
     
      }else{
        console.log("Character Not Eliminated By Action")
      }
  
      if(localHealthMesh2 < 1){
        document.getElementById("player2CH").style.filter="saturate(0)"; 
        document.getElementById("player2CH").style.opacity="0.5"; 
        document.getElementById("player2CH").style.pointerEvents = "none";  
      }else{
        console.log("Character Not Eliminated By Action")
      }
  
      if(localHealthMesh3 < 1){
        document.getElementById("player3CH").style.filter="saturate(0)"; 
        document.getElementById("player3CH").style.opacity="0.5"; 
        document.getElementById("player3CH").style.pointerEvents = "none";
      }else{
        console.log("Character Not Eliminated By Action")
      }
  }

 