javascript: ((function(){
    var consoleJS = document.createElement('script');

    consoleJS.src = "//rawgit.com/lucky7id/consoleJS/master/lib.js";
    document.getElementsByTagName('head')[0].appendChild(consoleJS);
    setTimeout(function() {console.log('consoleJS loaded'); }, 1000);
})());void(0);