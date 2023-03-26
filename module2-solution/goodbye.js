(function (window) {

    var goodbyespeaker = new object();
    var speakword = "goodbye" ;
    goodbyespeaker.speak = function (name){
        console.log(speakword + " " + name);
    };
    
    window.goodbyespeaker = goodbyespeaker ;
    }) ();