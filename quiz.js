function check() {
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var result=document.getElementById('result');
  var quiz=document.getElementById("quiz");
   if (q1=="A"){c++}
   if (q2=="B"){c++}
 
  
     
     if(c<=3){
      result.textContent='Your result is${c}. You have failed my test.'
  }  else {
      result.textContent='Your result is${c}. You have passed my test.'
  }
