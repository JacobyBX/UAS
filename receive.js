(function () {

    var lastPeerId = null;
    var peer = null; // Own peer object
    var peerId = null;
    var conn = null;
    var recvId = document.getElementById("receiver-id");
    var status = document.getElementById("status");
    var message = document.getElementById("message");
    var standbyBox = document.getElementById("standby");
    var goBox = document.getElementById("go");
    var fadeBox = document.getElementById("fade");
    var offBox = document.getElementById("off");
    var sendMessageBox = document.getElementById("sendMessageBox");
    var sendButton = document.getElementById("sendButton");
    var clearMsgsButton = document.getElementById("clearMsgsButton");

    var swapButton = document.getElementById("swapButton")
    
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
            recvId.innerHTML = "ID: " + peer.id;
            status.innerHTML = "Awaiting connection...";
        });
        peer.on('connection', function (c) {
            // Allow only a single connection
            if (conn) {
                c.on('open', function() {
                    c.send("Already connected to another client");
                    setTimeout(function() { c.close(); }, 500);
                });
                return;
            }
    
            conn = c;
            console.log("Connected to: " + conn.peer);
            status.innerHTML = "Connected";
            document.getElementById("match-popup-btns").style.display="none";
            document.getElementById("qrcode").style.display="none";
            document.getElementById("connectedSound").play();
            document.getElementById("shareCodeP").style.display="none";
            document.getElementById("receiver-id").style.display="none";
            var delayInMilliseconds = 2000; //1 second

setTimeout(function() {
  document.getElementById("matchPopup").style.display="none"
}, delayInMilliseconds);
            ready();
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
     * Triggered once a connection has been achieved.
     * Defines callbacks to handle incoming data and connection events.
     */
    function ready() {
        conn.on('data', function (data) {
            console.log("Data recieved");
            var cueString = "<span class=\"cueMsg\">Cue: </span>";
            switch (data) {
                case 'Go':
                    go();
                    addMessage(cueString + data);
                    break;
                case 'Fade':
                    fade();
                    addMessage(cueString + data);
                    break;
                case 'Off':
                    off();
                    addMessage(cueString + data);
                    break;
                case 'Reset':
                    reset();
                    addMessage(cueString + data);
                    break;
                default:
                    addMessage("<span class=\"peerMsg\">Peer: </span>" + data);
                    break;
            };
        });
        conn.on('close', function () {
            status.innerHTML = "Player Left<br>Awaiting connection...";
            conn = null;
            start(true);
        });
    }
    
    function go() {
        standbyBox.className = "display-box hidden";
        goBox.className = "display-box go";
        fadeBox.className = "display-box hidden";
        offBox.className = "display-box hidden";
        return;
    };
    
    function fade() {
        standbyBox.className = "display-box hidden";
        goBox.className = "display-box hidden";
        fadeBox.className = "display-box fade";
        offBox.className = "display-box hidden";
        return;
    };
    
    function off() {
        standbyBox.className = "display-box hidden";
        goBox.className = "display-box hidden";
        fadeBox.className = "display-box hidden";
        offBox.className = "display-box off";
        return;
    }
    
    function reset() {
        standbyBox.className = "display-box standby";
        goBox.className = "display-box hidden";
        fadeBox.className = "display-box hidden";
        offBox.className = "display-box hidden";
        return;
    };
    
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

       if(msg.includes("Player2 1 Init")){
         

           document.getElementById("BTank").src = "Characters/" + msg.substring(50, 63) + ".png";
           document.getElementById("BtitleTank").innerHTML = msg.substring(50, 63)
       }

       if(msg.includes("Player2 2 Init")){
        

        document.getElementById("BDamage").src = "Characters/" + msg.substring(50, 63) + ".png";
        document.getElementById("BtitleDamage").innerHTML = msg.substring(50, 63)
    }

    if(msg.includes("Player2 3 Init")){
       

        document.getElementById("BSupport").src = "Characters/" + msg.substring(50, 63) + ".png";
        document.getElementById("BtitleSupport").innerHTML = msg.substring(50, 63)
    }


    if(msg.includes("Player2 1 Health")){
       
        oponentTankHealth = parseInt(msg.substring(52, 63))

      enemyHealth1 = parseInt(msg.substring(52, 63)) 
 document.getElementById('P2TankHealth').innerHTML = parseInt(msg.substring(52, 63)) 
    }

    if(msg.includes("Player2 2 Health")){
       
        oponentDamageHealth = parseInt(msg.substring(52, 63))

      enemyHealth2 = parseInt(msg.substring(52, 63)) 
 document.getElementById('P2DamageHealth').innerHTML = parseInt(msg.substring(52, 63)) 
    }

    if(msg.includes("Player2 3 Health")){
       
        oponentSupportHealth = parseInt(msg.substring(52, 63))
   
      enemyHealth3 = parseInt(msg.substring(52, 63)) 
 document.getElementById('P2SupportHealth').innerHTML = parseInt(msg.substring(52, 63)) 
    }

    if(msg.includes("Player2 Healing 1")){
        
        alert("healing 1");

    }

    if(msg.includes("Player2 Healing 2")){
       
        alert("healing 2");

    }

    if(msg.includes("Player2 Healing 3")){
       
        alert("healing 3");
        
    }


       //Player 2 Video Start

       if(msg.includes("Player2 Video")){
           window.local2VideoLength = msg.substring(49, 53)
           window.local2Video = msg.substring(54, 85)
       }

       if(msg.includes("Player2 Start")){
     
        document.getElementById('attackVideo').setAttribute("data-yt2html5", local2Video)
        videoState = true;
            document.getElementById('attackPopover').style.display='block';
            setTimeout(function() {
            
                document.getElementById('attackVideo').currentTime = parseInt(msg.substring(49, 53));
                alert(msg.substring(49, 53))
            },1000);

            setTimeout(function() {
            
                document.getElementById('attackPopover').style.display="none"
            },parseInt(local2VideoLength));
       }







        //Player 2 Health Damage

        if(msg.includes("Player1 1 Health")){
            localHealthMesh1 = msg.substring(52, 63);
            document.getElementById('P1TankHealth').innerHTML = msg.substring(52, 63);
            document.getElementById("CTank").classList.remove("popIn");
            document.getElementById("CTank").classList.add("shake");
            document.getElementById("CTank").classList.add("duration-1200");
            document.getElementById("CTank").style.display="none";
            setTimeout(function(){
                document.getElementById("CTank").style.display="block";
            }, local2VideoLength);
        }
    
        if(msg.includes("Player1 2 Health")){
            localHealthMesh2 = msg.substring(52, 63);
            document.getElementById('P1DamageHealth').innerHTML = msg.substring(52, 63);
            document.getElementById("CDamage").classList.remove("popIn");
            document.getElementById("CDamage").classList.add("shake");
            document.getElementById("CDamage").classList.add("duration-1200");
            document.getElementById("CDamage").style.display="none";
            setTimeout(function(){
                document.getElementById("CDamage").style.display="block";
            }, local2VideoLength);
        }
    
        if(msg.includes("Player1 3 Health")){
            localHealthMesh3 = msg.substring(52, 63);
            document.getElementById('P1SupportHealth').innerHTML = msg.substring(52, 63);
            document.getElementById("CSupport").classList.remove("popIn");
            document.getElementById("CSupport").classList.add("shake");
            document.getElementById("CSupport").classList.add("duration-1200");
            document.getElementById("CSupport").style.display="none";
            setTimeout(function(){
                document.getElementById("CSupport").style.display="block";
            }, local2VideoLength);
        }

           // Elimination Check

    if(msg.includes("Locked In 2")){
        window.lockedin2 = true;
     }
 
     if (lockedin2 == true && lockedin1 == true){
        document.getElementById("lockin-indicator").innerHTML = "Match Starting...";
         document.getElementById('gameZone').style.display='block';document.getElementById('startTheBattle').style.display='none';battleStarted = true
     }

 
       
   
         var mgnCount2 = msg.includes("Player2");
        if (mgnCount2 == true){

            var initial2 = msg.includes("Initialization");
            if (initial2 == true){
                document.getElementById('player2Name').innerHTML = msg.substr(66);
                alert("Character Name2: " + msg.substr(66))
                document.getElementById('player2Health').innerHTML = msg.substring(58, 63);
                document.getElementById('player2Image').src= "Characters/" + msg.substr(66) + ".png"
                var someObj2 = {};
                var foo2 = msg.substr(66) + "Health";
                window.someObj2[foo2] = msg.substring(58, 63);;
                alert("Health Of Character2: " + someObj2[foo2]);
            }

            var swapCount2 = msg.includes("Swap");
            if(swapCount2 == true){
            document.getElementById('player2Image').src= "Characters/" + msg.substr(62) + ".png"
            document.getElementById('player2Name').innerHTML = msg.substr(62);
            document.getElementById('player2Health').innerHTML = msg.substring(55, 59);
            theglobalHealth2 = msg.substring(55, 59);
        }
            var abilityCount2 = msg.includes("Move");
            if(abilityCount2 == true){

               

var attackCount2 = msg.includes("Attack");
if(attackCount2 == true){
    alert("An Attack Was Started By Player 1 |" +  msg.substring(53, 55) + " Damage");
    someObj[foo] = someObj[foo] - int(msg.substring(53, 55));
    document.getElementById('player2Health').innerHTML = someObj[foo];
}

var statCount2 = msg.includes("Stat Boost");
if(statCount2 == true){
    alert("A Stat Change Was Started By Player 1 |" +  msg.substring(53, 55) + " Stat")
}

var enemyStatCount2 = msg.includes("Enemy Stat");
if(enemyStatCount2 == true){
    alert("An Enemey Stat Change Was Started By Player 1 |" +  msg.substring(53, 55) + " Stat Effect")
}


            }
        }
        }
    
    
    
    function clearMessages() {
        message.innerHTML = "";
        addMessage("Msgs cleared");
    }
    
    // Listen for enter
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
            console.log("Sent: " + msg)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg);
        } else {
            console.log('Connection is closed');
            alert("Connection Error Please Reconnect")
        }
    };


// Send Damage

document.getElementById("selectionGrid").onclick = function () {
    if (conn && conn.open) {
        setTimeout(function(){
            var msg6 = "Player2" + " " + 1 + " Health " + document.getElementById('P2TankHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg6);
            console.log("Sent: " + msg6)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg6);
        }, 3000);
        setTimeout(function(){
            var msg7 = "Player2" + " " + 2 + " Health " + document.getElementById('P2DamageHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg7);
            console.log("Sent: " + msg7)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg7);
        }, 3000);
        setTimeout(function(){
            var msg8 = "Player2" + " " + 3 + " Health " + document.getElementById('P2SupportHealth').innerHTML;
            sendMessageBox.value = "";
            conn.send(msg8);
            console.log("Sent: " + msg8)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg8);
        }, 3000);
        setTimeout(function(){
            var msg12 = "Player1" + " Video " + timeTilDelete + " " + currentVideoPlaying;
            sendMessageBox.value = "";
            conn.send(msg12);
            console.log("Sent: " + msg12)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg12);
        }, 3000);
        setTimeout(function(){
            var msg13 = "Player1" + " Start " + currentVideoStart;
            sendMessageBox.value = "";
            conn.send(msg13);
            console.log("Sent: " + msg13)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg13);
        }, 3000);
   //Player1 Video 7750 https://youtu.be/1qHvNesC57o
   //Player1 Start 84
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
            var msg4 = "Locked In 1";
            sendMessageBox.value = "";
            conn.send(msg4);
            console.log("Sent: " + msg4)
            addMessage("<span class=\"selfMsg\">Self: </span>" + msg4);
        }, 3000);
     window.lockedin1 = true;
document.getElementById("lockin-indicator").innerHTML = "Waiting for Opponent to Lock In...";
    
     
    } else {
        console.log('Connection is closed');
        alert("Connection Error Please Reconnect")
    }
};

    swapButton.onclick = function () {
        if (conn && conn.open) {
            var msg = "Player1 Swapped To: " + currentCharacterHealthClick + "Hp " + currentCharacterClick;
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
    
    initialize();
    })();

  