let  copyBtn = document.querySelector(".copyRGB");
let colorValue = document.querySelector("span");
let body = document.querySelector("body");
let p = document.querySelector("p");

body.addEventListener("click", function(){

    p.style.display = "none";
    
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    colorValue.innerHTML = `rgb(${r}, ${g}, ${b})`

    var brightness = (r * 0.299) + (g * 0.587) + (b * 0.114);

    if(brightness > 128) {
        colorValue.style.color = "black";
        copyBtn.style.color = "black";
    }
    else {
        colorValue.style.color = "white";
        copyBtn.style.color = "white";
    }
copyBtn.addEventListener("click", function(e){
    e.stopPropagation();
    navigator.clipboard.writeText(`rgb(${r}, ${g}, ${b})`)
    
    copyBtn.textContent = "Copied!";
    setTimeout(function(){
        copyBtn.textContent = "Copy";
    }, 700);
})
})





