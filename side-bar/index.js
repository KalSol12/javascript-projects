document.querySelector('.berger-btn').addEventListener('click',()=>{
    const navLink=document.querySelector('.nav-header');
   navLink.style.display=navLink.style.display==='block'?
   'none' :'block';
});
document.querySelector('#cancel').addEventListener('click',()=>{
    const navLink=document.querySelector('.nav-header');
    navLink.style.display='none';
})