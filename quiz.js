function check() {
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var result=document.getElementById('result');
  var quiz=document.getElementById("quiz");
   if (q1=="James"){c++}
   if (q2=="Casey"){c++}
 
  
     
    if (c<=1) {
       result.textContent='Your score is ${c}. Try again.
    }
     else{result.textContent='Your score is ${c}. You passed.
    }

}
