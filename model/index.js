const btn=document.querySelector('.btn');
const cancle=document.querySelector('.cancel');
btn.addEventListener('click',function () {
    document.querySelector('.header').style.visibility='hidden';
    document.querySelector('.header-2').style.visibility='visible'; 
})
cancle.addEventListener('click',function () {
    
    document.querySelector('.header').style.visibility='visible';
    document.querySelector('.header-2').style.visibility='hidden'; 
})
