(function () {

    var lastPeerId = null;
    var peer = null; // own peer object
    var conn = null;
    var recvIdInput = document.getElementById("receiver-id");
    var status = document.getElementById("status");
    var message = document.getElementById("message");
    var goButton = document.getElementById("goButton");
    var resetButton = document.getElementById("resetButton");
    var fadeButton = document.getElementById("fadeButton");
    var offButton = document.getElementById("offButton");
    var sendMessageBox = document.getElementById("sendMessageBox");
    var sendButton = document.getElementById("sendButton");
    var clearMsgsButton = document.getElementById("clearMsgsButton");
    var connectButton = document.getElementById("connect-button");
    var cueString = "<span class=\"cueMsg\">Cue: </span>";

    /**
     * Create the Peer object for our end of the connection.
     *
     * Sets up callbacks that handle any events related to our
     * peer object.
     */
    function initialize() {
        // Create own peer object with connection to shared PeerJS server
        peer = new Peer(null, {
            debug: 2
        });

        peer.on('open', function (id) {
            // Workaround for peer.reconnect deleting previous id
            if (peer.id === null) {
                console.log('Received null id from peer open');
                peer.id = lastPeerId;
            } else {
                lastPeerId = peer.id;
            }

            console.log('ID: ' + peer.id);
        });
        peer.on('disconnected', function () {
            status.innerHTML = "Connection lost. Please reconnect";
            console.log('Connection lost. Please reconnect');

            // Workaround for peer.reconnect deleting previous id
            peer.id = lastPeerId;
            peer._lastServerId = lastPeerId;
            peer.reconnect();
        });
        peer.on('close', function() {
            conn = null;
            status.innerHTML = "Connection destroyed. Please refresh";
            console.log('Connection destroyed');
        });
        peer.on('error', function (err) {
            console.log(err);
            alert('' + err);
        });
    };

    /**
     * Create the connection between the two Peers.
     *
     * Sets up callbacks that handle any events related to the
     * connection and data received on it.
     */
    function join() {
        // Close old connection
        if (conn) {
            conn.close();
        }

        // Create connection to destination peer specified in the input field
        conn = peer.connect(recvIdInput.value, {
            reliable: true
        });

        conn.on('open', function () {
            status.innerHTML = "Connected to: " + conn.peer;
            console.log("Connected to: " + conn.peer);
     
            
            
setTimeout(function() {
  

        document.getElementById("matchPopup").style.display="none";
        window.lockedin1 = false;
        window.lockedin2 = false;
   
  }, 1000);

            // Check URL params for comamnds that should be sent immediately
            var command = getUrlParam("command");
            if (command)
                conn.send(command);
        });
        // Handle incoming data (messages only since this is the signal sender)
        conn.on('data', function (data) {
            addMessage("<span class=\"peerMsg\">Peer:</span> " + data);
        });
        conn.on('close', function () {
            status.innerHTML = "Player Left";
        });
    };

    /**
     * Get first "GET style" parameter from href.
     * This enables delivering an initial command upon page load.
     *
     * Would have been easier to use location.hash.
     */
    function getUrlParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return null;
        else
            return results[1];
    };

    /**
     * Send a signal via the peer connection and add it to the log.
     * This will only occur if the connection is still alive.
     */
     function signal(sigName) {
        if (conn && conn.open) {
            conn.send(sigName);
            console.log(sigName + " signal sent");
            addMessage(cueString + sigName);
        } else {
            console.log('Connection is closed');
        }
    }




    function addMessage(msg) {
        var now = new Date();
        var h = now.getHours();
        var m = addZero(now.getMinutes());
        var s = addZero(now.getSeconds());

        if (h > 12)
            h -= 12;
        else if (h === 0)
            h = 12;

        function addZero(t) {
            if (t < 10)
                t = "0" + t;
            return t;
        };

        message.innerHTML = "<br><span class=\"msg-time\">" + h + ":" + m + ":" + s + "</span>  -  " + msg + message.innerHTML;

        if(msg.includes("Player1 1 Init")){
         

            document.getElementById("BTank").src = msg.substring(50, 63);
            document.getElementById("BtitleTank").innerHTML = msg.substring(63);
        }
 
        if(msg.includes("Player1 2 Init")){
         

         document.getElementById("BDamage").src =  msg.substring(50, 63);
         document.getElementById("BtitleDamage").innerHTML =msg.substring(63);
     }
 
     if(msg.includes("Player1 3 Init")){
   
 
         document.getElementById("BSupport").src = msg.substring(50, 63);;
         document.getElementById("BtitleSupport").innerHTML =msg.substring(63);
     }
 
 
     
    if(msg.includes("Player1 1 Health")){
       
        oponentTankHealth = parseInt(msg.substring(52, 63))
  
      enemyHealth1 = parseInt(msg.substring(52, 63)) 
 document.getElementById('P2TankHealth').innerHTML = parseInt(msg.substring(52, 63)) 
    }

    if(msg.includes("Player1 2 Health")){
       
        oponentDamageHealth = parseInt(msg.substring(52, 63))
 
      enemyHealth2 = parseInt(msg.substring(52, 63)) 
 document.getElementById('P2DamageHealth').innerHTML = parseInt(msg.substring(52, 63)) 
    }

    if(msg.includes("Player1 3 Health")){
       
        oponentSupportHealth = parseInt(msg.substring(52, 63))
  
      enemyHealth3 = parseInt(msg.substring(52, 63)) 
 document.getElementById('P2SupportHealth').innerHTML = parseInt(msg.substring(52, 63)) 
    }

    if(msg.includes("Player1 1 Healing")){
        alert("Testing");
        alert(msg.substring(53, 63))
        document.getElementById('P2TankHealth').innerHTML = msg.substring(53, 63);
        document.getElementById("healingBadgeTankP2").style.display="block";
        setTimeout(function(){
          document.getElementById("healingBadgeTankP2").style.display="none";;
      }, 8000);
    
    }

    if(msg.includes("Player1 2 Healing")){
        document.getElementById('P2DamageHealth').innerHTML = msg.substring(53, 63);
        document.getElementById("healingBadgeDamageP2").style.display="block";
        setTimeout(function(){
          document.getElementById("healingBadgeDamageP2").style.display="none";;
      }, 8000);

    }

    if(msg.includes("Player1 3 Healing")){
        document.getElementById('P2SupportHealth').innerHTML = msg.substring(53, 63);
        document.getElementById("healingBadgeSupportP2").style.display="block";
        setTimeout(function(){
          document.getElementById("healingBadgeSupportP2").style.display="none";;
      }, 8000);

    }



    
       //Player 1 Video Start

       if(msg.includes("Player1 Video")){
        window.local2VideoLength = msg.substring(49, 53)
        window.local2Video = msg.substring(54, 85)
    }

    if(msg.includes("Player1 Start")){
  
     document.getElementById('attackVideo').setAttribute("data-yt2html5", local2Video)
     videoState = true;
         document.getElementById('attackPopover').style.display='block';
         setTimeout(function() {
         
             document.getElementById('attackVideo').currentTime = parseInt(msg.substring(49, 53));
         },1000);

         setTimeout(function() {
         
             document.getElementById('attackPopover').style.display="none"
         },parseInt(local2VideoLength));
    }






    //Player 2 Health Damage

    if(msg.includes("Player2 1 Health")){
        localHealthMesh1 = msg.substring(52, 63);
        document.getElementById('P1TankHealth').innerHTML = msg.substring(52, 63);
        document.getElementById("CTank").classList.remove("popIn");
        document.getElementById("CTank").classList.add("shake");
        document.getElementById("CTank").classList.add("duration-1200");
        document.getElementById("CTank").style.display="none";
        setTimeout(function(){
            document.getElementById("CTank").style.display="block";
        }, 1000);
    }

    if(msg.includes("Player2 2 Health")){
        localHealthMesh2 = msg.substring(52, 63);
        document.getElementById('P1DamageHealth').innerHTML = msg.substring(52, 63);
        document.getElementById("CDamage").classList.remove("popIn");
        document.getElementById("CDamage").classList.add("shake");
        document.getElementById("CDamage").classList.add("duration-1200");
        document.getElementById("CDamage").style.display="none";
        setTimeout(function(){
            document.getElementById("CDamage").style.display="block";
        }, 1000);
    }

    if(msg.includes("Player2 3 Health")){
        localHealthMesh3 = msg.substring(52, 63);
        document.getElementById('P1SupportHealth').innerHTML = msg.substring(52, 63);
        document.getElementById("CSupport").classList.remove("popIn");
        document.getElementById("CSupport").classList.add("shake");
        document.getElementById("CSupport").classList.add("duration-1200");
        document.getElementById("CSupport").style.display="none";
        setTimeout(function(){
            document.getElementById("CSupport").style.display="block";
        }, 1000);
    }


 
     if(msg.includes("Locked In 1")){
       lockedin1 = true;
    }

    if (lockedin1 == true && lockedin2 == true){
        document.getElementById("lockin-indicator").innerHTML = "Match Starting...";
        document.getElementById('gameZone').style.display='block';document.getElementById('startTheBattle').style.display='none';battleStarted = true;
        message.innerHTML = "";
        addMessage("Msgs cleared");
    }
    

        var theglobalHealth = "21"
    
        var someObj = {};
        var foo = msg.substr(62) + "Health";
        someObj[foo] = msg.substring(55, 59);
       
       
            
                 var mgnCount = msg.includes("Player1");
                if (mgnCount == true){
        
                    var swapCount = msg.includes("Swap");
                    if(swapCount == true){
                    document.getElementById('player1Image').src= "skins/" + msg.substr(62) + ".png"
                    document.getElementById('player1Name').innerHTML = msg.substr(62);
                    document.getElementById('player1Health').innerHTML = msg.substring(55, 59);
                    theglobalHealth = msg.substring(55, 59);
                }
                    var abilityCount = msg.includes("Move");
                    if(abilityCount == true){
        
        var attackCount = msg.includes("Attack");
        if(attackCount == true){
           
            someObj2[foo2] = someObj2[foo2] - int(msg.substring(41, 50))
        }
        
        var statCount = msg.includes("Stat Boost");
        if(statCount == true){
         
        }
        
        var enemyStatCount = msg.includes("Enemy Stat");
        if(enemyStatCount == true){
           
        }
        
        
                    }
                }
                var someObj2 = {};
        var foo2 = msg.substr(62) + "Health";
        someObj2[foo2] = msg.substring(55, 59);
     
     
            
                 var mgnCount2 = msg.includes("Player2");
                if (mgnCount2 == true){
        
                    var swapCount2 = msg.includes("Swap");
                    if(swapCount2 == true){
                    document.getElementById('player2Image').src= "skins/" + msg.substr(62) + ".png"
                    document.getElementById('player2Name').innerHTML = msg.substr(62);
                    document.getElementById('player2Health').innerHTML = msg.substring(55, 59);
                    theglobalHealth2 = msg.substring(55, 59);
                }
                    var abilityCount2 = msg.includes("Move");
                    if(abilityCount2 == true){
        
        var attackCount2 = msg.includes("Attack");
        if(attackCount2 == true){
           
           
        }
        
        var statCount2 = msg.includes("Stat Boost");
        if(statCount2 == true){
            
        }
        
        var enemyStatCount2 = msg.includes("Enemy Stat");
        if(enemyStatCount2 == true){
            
        }
        
        
                    }
                }
    };

    function clearMessages() {
        message.innerHTML = "";
        addMessage("Msgs cleared");
    };

    // Send Damage

document.getElementById("selectionGrid").onclick = function () {
    if (conn && conn.open) {
        setTimeout(function(){
            var msg6 = "Player1" + " " + 1 + " Health " + document.getElementById('P2TankHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg6);
            console.log("Sent: " + msg6)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg6);
        }, 3000);
        setTimeout(function(){
            var msg7 = "Player1" + " " + 2 + " Health " + document.getElementById('P2DamageHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg7);
            console.log("Sent: " + msg7)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg7);
        }, 3000);
        setTimeout(function(){
            var msg8 = "Player1" + " " + 3 + " Health " + document.getElementById('P2SupportHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg8);
            console.log("Sent: " + msg8)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg8);
        }, 3000);
        setTimeout(function(){
            var msg12 = "Player2" + " Video " + timeTilDelete + " " + currentVideoPlaying;
            sendMessageBox.value = "";
            conn.send(msg12);
            console.log("Sent: " + msg12)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg12);
        }, 3000);
        setTimeout(function(){
            var msg13 = "Player2" + " Start " + currentVideoStart;
            sendMessageBox.value = "";
            conn.send(msg13);
            console.log("Sent: " + msg13)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg13);
        }, 3000);
     
    } else {
        console.log('Connection is closed');
        alert("Connection Error Please Reconnect")
    }
};


    
  // Send message
  document.getElementById("lockInCharacter").onclick = function () {
    if (conn && conn.open) {
        setTimeout(function(){
            var msg = p1U;
        sendMessageBox.value = "";
        conn.send(msg);
        console.log("Sent: " + msg)
        addMessage("<span class=\"selfMsg\">Self: </span>" + msg);
        }, 1000);
        setTimeout(function(){
            var msg2 = p2U;
            sendMessageBox.value = "";
            conn.send(msg2);
            console.log("Sent: " + msg2)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg2);
        }, 2000);
        setTimeout(function(){
            var msg3 = p3U;
            sendMessageBox.value = "";
            conn.send(msg3);
            console.log("Sent: " + msg3)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg3);
        }, 3000);
        setTimeout(function(){
            var msg6 = Healthp1U;
            sendMessageBox.value = "";
            conn.send(msg6);
            console.log("Sent: " + msg6)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg6);
        }, 3000);
        setTimeout(function(){
            var msg7 = Healthp2U;
            sendMessageBox.value = "";
            conn.send(msg7);
            console.log("Sent: " + msg7)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg7);
        }, 3000);
        setTimeout(function(){
            var msg8 = Healthp3U;
            sendMessageBox.value = "";
            conn.send(msg8);
            console.log("Sent: " + msg8)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg8);
        }, 3000);
        setTimeout(function(){
            var msg4 = "Locked In 2";
            sendMessageBox.value = "";
            conn.send(msg4);
            console.log("Sent: " + msg4)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg4);
        }, 3000);
     window.lockedin2 = true;
     document.getElementById("lockin-indicator").innerHTML = "Waiting for Opponent to Lock In...";

     
    } else {
        console.log('Connection is closed');
        alert("Connection Error Please Reconnect")
    }
};



// Send Healing

document.getElementById("healingSelectionGrid").onclick = function () {
    if (conn && conn.open) {
        setTimeout(function(){
        if(enterState == "1"){
            setTimeout(function(){
                var msg6 = "Player2" + " " + 1 + " Healing " + document.getElementById('P1TankHealth').innerHTML;
                sendMessageBox.value = "";
                conn.send(msg6);
                console.log("Sent: " + msg6)
                addMessage("<span class=\"selfMsg\">Self: </span>" + msg6);
            }, 3000);
        }
        if(enterState == "2"){
        setTimeout(function(){
            var msg7 = "Player2" + " " + 2 + " Healing " + document.getElementById('P1DamageHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg7);
            console.log("Sent: " + msg7)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg7);
        }, 3000);
    }

    if(enterState == "3"){
        setTimeout(function(){
            var msg8 = "Player2" + " " + 3 + " Healing " + document.getElementById('P1SupportHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg8);
            console.log("Sent: " + msg8)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg8);
        }, 3000);
    }
}, 3000);

    } else {
        console.log('Connection is closed');
        alert("Connection Error Please Reconnect")
    }
};





    // Listen for enter in message box
    sendMessageBox.onkeypress = function (e) {
        var event = e || window.event;
        var char = event.which || event.keyCode;
        if (char == '13')
            sendButton.click();
    };
    // Send message
    sendButton.onclick = function () {
        if (conn && conn.open) {
            var msg = sendMessageBox.value;
            sendMessageBox.value = "";
            conn.send(msg);
            console.log("Sent: " + msg);
            addMessage("<span class=\"selfMsg\">Self: </span> " + msg);
        } else {
            console.log('Connection is closed');
        }
    };

    


    swapButton.onclick = function () {
        if (conn && conn.open) {
            var msg = "Player2 Swapped To: " + currentCharacterHealthClick + "Hp " + currentCharacterClick;
            sendMessageBox.value = "";
            conn.send(msg);
            console.log("Sent: " + msg)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg);
           console.log("<span class=\"selfMsg\">Self: </span>" + msg);
           closeBattleCard()
        } else {
            console.log('Connection is closed');
        }
    };
    

    // Clear messages box
    clearMsgsButton.onclick = function () {
        clearMessages();
    };
    // Start peer connection on click
    connectButton.addEventListener('click', join);

    // Since all our callbacks are setup, start the process of obtaining an ID
    initialize();
})();

