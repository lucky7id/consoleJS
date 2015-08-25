;((function(){
    window.cat = function(id) {
        return JSON.parse(window.sessionStorage.getItem(id));
    };

    window.get$ = function() {
        var jq = document.createElement('script');
        jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(jq);
        setTimeout(function() {jQuery.noConflict(); console.log('jQuery loaded'); }, 1000);
    };
})())