function check() {
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var result=document.getElementById('result');
  var quiz=document.getElementById("quiz");
   if (q1=="James"){c++}
   if (q2=="Casey"){c++}
 
  
     
    if (c=0) {
      result.textContent='You got 0 correct. Please try again.'
}

  if (c=1) {
      result.textContent='You got 1 correct. You can do better.'
}

 if (c=2) {
      result.textContent='You got 2 correct. Perfect Score!'
}

}
