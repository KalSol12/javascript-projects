 
 const hexval=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','F','E'];

var btn=document.getElementById("btn");
var color=document.querySelector(".color");


btn.addEventListener("click",function () {
    var hex="#";
 for (let index = 0; index <6; index++) {

    hex+=hexval[getrandemNum()];
    color.textContent=hex;

    
 }

    document.body.style.backgroundColor=hex;
    
})
function getrandemNum() {
    return Math.floor(Math.random()*hexval.length);

    
}