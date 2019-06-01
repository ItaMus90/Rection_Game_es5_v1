var player = {

    score:0

};


//UI variables
var container = document.querySelector(".container");
var score = document.querySelector(".score");
var str_game = document.querySelector(".str_game");


//function 

str_game.addEventListener("click",function(){

    str_game.style.display = "none";
    var runTime = Math.random() * 2000 + 1000;

    setTimeout(makeItem, runTime);

});


function makeItem() {

    var boundary = container.getBoundingClientRect();
    var div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = Math.random() * boundary.width + "px";
    div.style.top = Math.random() * boundary.height + "px";
    div.style.width = Math.random() * 40 + 10 + "px";
    div.style.height = Math.random() * 40 + 10 + "px";
    div.style.borderRadius = "10%";
    div.style.cursor = "grab";
    div.style.backgroundColor = "#" + Math.random().toString().substr(-6);
    div.style.border = "1px solid #000";
    div.str_time = Date.now();

    div.addEventListener("click",function(){

        var end_time = Date.now();
        var diff = (end_time - div.str_time) / 1000;
        
        score.innerHTML = "Clicked in " + diff + " seconds"
        //str_game.style.display = "block";
        clearTimeout(div.timer);
        makeItem();
        container.removeChild(div);
    
    });

    div.timer = setTimeout(function(){

        container.removeChild(div);
        makeItem();

    },1000);

    container.appendChild(div);

}