var main = document.querySelector("#main")
var img = document.querySelector("#page>img")

main.addEventListener("mousemove",function(dets){
    img.style.top = 1-dets.y*0.05 + "px"
    img.style.left= 1-dets.x*0.05 + "px"
})