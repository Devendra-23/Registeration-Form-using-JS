
var form = document.getElementById("maindiv");

var btn = document.getElementById("showForm");

var close = document.getElementById("hide");

var loadingMessage = document.getElementById("loading-message");


btn.onclick = function() {

    setTimeout(()=>{
        form.style.display = "block";
        btn.style.display = "none";
    },5000);
};

close.onclick = function() {
    form.style.display = "none";
    btn.style.display = "block";
};

btn.addEventListener("click", function(){

    loadingMessage.style.display = "block";

    setTimeout(function(){

        loadingMessage.style.display="none";
    },5000);

    

});