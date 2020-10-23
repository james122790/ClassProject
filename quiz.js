function check() {
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;

   if (q1=="James") {c++}
   if (q2=="Casey") {c++}
 
  
 if(c==0){
 result.textContent='You got 0 correct. Where you even trying?'}
      
 if(c==1){
 result.textContent='You got 1 correct. You can do better than that!'}

 if(c==2){
 result.textContent='Perfect Score!'
}

}
