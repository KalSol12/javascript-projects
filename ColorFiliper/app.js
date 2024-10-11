const colors=["green","Red","rgba(133,122,200)","#f15025"];


const btn=document.querySelector("#btn");
var color=document.querySelector(".color");


  btn.addEventListener("click",function () {
    var randomNumnber=getrandemNum();
document.body.style.backgroundColor=colors[randomNumnber];
color.textContent=colors[randomNumnber];
console.log("11");
    
});

function getrandemNum() {
    return Math.floor(Math.random()*colors.length);

    
}
