const btns=document.querySelectorAll('.btns');
const answer= document.querySelectorAll('.answer');
const Container=document.querySelectorAll('.container');
//  Container.forEach(function (question) {
//    //console.log(question);
//   const btn=  question.querySelector('.btns');
//   //console.log(btn);
//   btn.addEventListener('click',function () {
  
//  Container.forEach(function (item) {
   
//      console.log(item);
//       if (item!==question) {
//         item.classList.remove('show-answer');
        
//     }
//  });

//     question.classList.toggle('show-answer');
//   });
//  });






btns.forEach(function (btn) {
    btn.addEventListener('click',function (e) {
       const q=e.currentTarget.parentElement.parentElement;
     //  const style=   e.currentTarget.classList;
      // console.log(q);
    //    q.forEach(function (item) {
    //     console.log(item);

        
    //    })
  
   Container.forEach(function(item) {

    console.log(item);
    if (item!==q) {
        item.classList.remove('show-answer');
        
    }
   })

     
      q.classList.toggle("show-answer");
     
       
        
    })
    
})
