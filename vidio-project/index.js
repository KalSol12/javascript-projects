const btn=document.querySelector(".switch-btn");
console.log(btn);
const videocontainer=document.querySelector('.video-container');

btn.addEventListener('click',function () {
    console.log("kal berta")
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        videocontainer.pause();
    }
    else
    {
        btn.classList.remove('slide');
        videocontainer.play();
    }
    
})