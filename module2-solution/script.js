( function () {

    var names = {John , Jay , Jack , Jude , Jean , Rosie , Richard , Jason}
    for ( var i =0 ; i<names.length; i++){
    var firstLetter = names[i].charAt(0).tolowerCase();
    if ( firstLetter == 'J' || firstLetter == 'j'){
     goodbyespeaker.speak()
    }
     
     else {
     hellospeaker.speak(names[i]);
     }
    
    }
    
    })();   