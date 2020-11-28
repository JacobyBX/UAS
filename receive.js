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

        var theglobalHealth = "21"


    
         var mgnCount = msg.includes("Player1");
        if (mgnCount == true){

            var initial1 = msg.includes("Initialization");
            if (initial1 == true){
                document.getElementById('player1Name').innerHTML = msg.substr(66);
                alert("Character Name1: " + msg.substr(66))
                document.getElementById('player1Health').innerHTML = msg.substring(58, 63);
                document.getElementById('player1Image').src= "Characters/" + msg.substr(66) + ".png"
                var someObj = {};
                var foo = msg.substr(66) + "Health";
                window.someObj[foo] = msg.substring(55, 59);
                alert("Health Of Character: " + someObj[foo]);
            }


            var swapCount = msg.includes("Swap");
            if(swapCount == true){
            document.getElementById('player1Image').src= "Characters/" + msg.substr(62) + ".png"
            document.getElementById('player1Name').innerHTML = msg.substr(62);
            document.getElementById('player1Health').innerHTML = msg.substring(55, 59);
            theglobalHealth = msg.substring(60, 64);
        }
            var abilityCount = msg.includes("Move");
            if(abilityCount == true){
               
                alert("Health Of Character: " + someObj2[foo2]) ;
                

var attackCount = msg.includes("Attack");
if(attackCount == true){
    alert("An Attack Was Started By Player 1 | " +  msg.substring(53, 55) + " Damage");
    someObj2[foo2] = someObj2[foo2] - int(msg.substring(53, 55));
    document.getElementById('player2Health').innerHTML = someObj2[foo2];
}

var statCount = msg.includes("Stat Boost");
if(statCount == true){
    alert("A Stat Change Was Started By Player 1 |" +  msg.substring(53, 55) + " Stat")
}

var enemyStatCount = msg.includes("Enemy Stat");
if(enemyStatCount == true){
    alert("An Enemey Stat Change Was Started By Player 1 |" +  msg.substring(53, 55) + " Stat Effect")
}


            }
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