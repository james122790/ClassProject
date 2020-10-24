function check() {
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  

   if (q1=="Rolling") {c++}
   if (q2=="AirBNB Experiences") {c++}
   if (q3=="Skycanner") {c++}
   if (q4=="AirBNB") {c++}
   if (q5=="Amsterdam") {c++}
 
  
 if(c==0){
 result.textContent='You got 0 correct. Where you even trying?'
 }
      
 if(c==1){
 result.textContent='You got 1 correct. You can do better than that!'
 }

 if(c==2){
 result.textContent='You got 2 correct. Are you even trying?'
}
  
   if(c==3){
 result.textContent='You got 3 correct. Thats atleast more than half.'
}
  
   if(c==4){
 result.textContent='You got 4 correct. Hey, thats passing!'
}
  
   if(c==5){
 result.textContent='Perfect Score! I never knew Anne Frank was in Amsterdam either.'
}

}





        
