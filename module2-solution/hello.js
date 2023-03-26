( function (window) {

    var hellospeaker = new object ();
    var speakword = "Hello" ;
    hellospeaker.speak = function(name){
        console.log(speakword + " " + name);
    };
    
    window.hellospeaker = hellospeaker ;
    
    })();