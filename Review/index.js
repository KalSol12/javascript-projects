const reviews= [
   {id:1,
    img:"photo_2024-01-05_05-36-46.jpg",
    Name:"sol",
    job:"back-end",
    Text:
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit ,
          Ex obcaecati aspernatur sed  Iste nesciunt quam dicta blanditiis
           porro quia 
         natus esse delectus autem at 
          Magni consequuntur ut dolore vel veritatis`,},
          {id:2,
            img:"photo_2024-01-05_05-36-47 (2).jpg",
            Name:"israel",
            job:"front-end",
           Text:
                    `Lorem ipsum, dolor sit amet consectetur adipisicing elit ,
                  Ex obcaecati aspernatur sed  Iste nesciunt quam dicta blanditiis
                   porro quia 
                 natus esse delectus autem at 
                  Magni consequuntur ut dolore vel veritatis`,},
                  {id:3,
                    img:"photo_2024-01-05_05-36-47.jpg",
                    Name:"future",
                    job:"full-stack",
                   Text:
                            `Lorem ipsum, dolor sit amet consectetur adipisicing elit ,
                          Ex obcaecati aspernatur sed  Iste nesciunt quam dicta blanditiis
                           porro quia 
                         natus esse delectus autem at 
                          Magni consequuntur ut dolore vel veritatis`,}, 
         
];

const img=document.querySelector('#img');
const author=document.querySelector('#author');
const job=document.querySelector('#job');
const info=document.querySelector('#info');
const previes=document.querySelector('#previes');
const next=document.querySelector('#next');
const random=document.querySelector('#random-btn');


var currentcontent=0;
window.addEventListener("DOMContentLoaded",function () {
    
     showPerson();
    
})

previes.addEventListener('click',function() {
    currentcontent--;
    if (currentcontent<0) {
        currentcontent=reviews.length-1;
        
    }
  
    showPerson();
    
})
next.addEventListener('click',function() {
    currentcontent++;
    if (currentcontent>reviews.length-1) {
        currentcontent=0;
   } 
   
    showPerson();  
})
random.addEventListener('click',function() {
    currentcontent=Math.floor(Math.random()*reviews.length);
    showPerson();
    
})

function showPerson() {
    const item= reviews[currentcontent];
    img.src=item.img;
    author.textContent=item.Name;
    job.textContent=item.job;
    info.textContent=item.Text;
    
}

