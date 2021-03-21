const correctAnswer=['B','B','B','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
form.addEventListener('submit',e=>{
   e.preventDefault();
   let score=0;
   const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
   // check answers 
   userAnswers.forEach((answer,index)=>{
      if(answer===correctAnswer[index]){
         score+=25;
      }
   });
  //show result on page.
  scrollTo(0,0);
  result.classList.remove('d-none');
  
  let output=0;
  const timer=setInterval(() => {
   result.querySelector('span').textContent=`${output}%`;
   if(output==score){
      clearInterval(timer);
   }
   else{
      output++;
   }
     
  }, 10);
});

//window object for automatically scrolling on the top of the window .
// console.log('hello!');
// console.log(document.querySelector('form'));
