let btn1=document.querySelector('.btn-1');
let btn2=document.querySelector('.btn-2');
let btn3=document.querySelector('.btn-3');
let btns=document.querySelectorAll('.btn');
let value= document.querySelector('.Counter');

 let count=0;
   



btns.forEach(function(item) {
    item.addEventListener('click',function (e) {
      const style=   e.currentTarget.classList;
if (style.contains("btn-1")) {
     count--;
}
else if (style.contains("btn-3")) {
    count++;
}
else if (style.contains("btn-2")) {
    count=0;
}
 value.textContent=count;
//value.textContent=count;
    })


})
/*

btn3.addEventListener('click', ()=>
{
    count+=1;
    document.querySelector('.Counter').textContent=count;

});


btn1.addEventListener('click', ()=>
    {
        count-=1;
        document.querySelector('.Counter').textContent=count;
    
    });
    
btn2.addEventListener('click', ()=>
    {
        count=0;
        document.querySelector('.Counter').textContent=count;
    
    });


    */

    