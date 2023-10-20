let character = document.getElementById("character");
let block = document.getElementById("block");

document.addEventListener("keydown",function(event){
if(event.key === " "){
    jump();
} 
if(event.key==="Enter"){
    block.classList.add("animate_block");
}
});

function jump(){
    if(character.classList !== "animate"){
    character.classList.add("animate");
    }

    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

const checkdead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("Top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
 
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 230){
        block.classList.remove("animate_block");
        alert(" GAME OVER ");
    }

},10);