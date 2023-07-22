let isHide = false
document.getElementById("font").addEventListener("input", fontColor)
document.getElementById("backgound").addEventListener("input", backgroundColor)
document.getElementById("speed").addEventListener("input", speedChange)
document.getElementById("size").addEventListener("input", fontSize)
document.getElementById("inpText").addEventListener("input", ({target})=>{document.getElementById("text").textContent = target.value})
// window.addEventListener("load", start)
document.getElementById("hide").addEventListener("click", ()=>{document.getElementById("settings").style.opacity = isHide? 0: 1; isHide = !isHide})
fontEl = document.getElementById("bigText")
TEXT_SPEED = 1
function move() {
    var wrapper = document.querySelector('#bigText'),
    marquee = document.querySelector('#text'),   
    wrapperWidth = wrapper.offsetWidth,
    marqueeWidth = marquee.scrollWidth;
    var currentTX = getComputedStyle(marquee).transform.split(',');
    if( currentTX[4] === undefined ) {
      currentTX = -1;
    } else {
      currentTX = parseFloat(currentTX[4]) - TEXT_SPEED;
    }
    
    if(-currentTX >= marqueeWidth) {
      marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
    
    } else {
      marquee.style.transform = 'translateX(' + currentTX + 'px)';
    }
  }
var interval = setInterval(move, 10);
function fontColor({target}) {
    
    let value = target.value
    fontEl.style.color = value
}
function backgroundColor({target}) {
    let value = target.value
    document.body.style.backgroundColor = value
}

function speedChange({target}) {

  TEXT_SPEED = target.value
console.log(target.value);
}
function fontSize({target}) {
    let value = target.value
    fontEl.style.fontSize = value + "px"
}

function start(ev) {
   
}



 