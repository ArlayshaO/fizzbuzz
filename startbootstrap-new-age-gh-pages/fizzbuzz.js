let pTag = document.getElementById("para");

//for loop 0-100
for(i = 0; i <= 100; i++){
  if( i % 3 === 0 && i % 5 == 0 )
   pTag.innerHTML += "FIZZBUZZ";   //print fizzbuzz if multiple of 3 or 5;
  
    
  else if( i % 3 == 0 )
    pTag.innerHTML += "FIZZ";   //print fizz if multiple of 3
  
  
   else if( i % 5 === 0 )
     pTag.innerHTML += "BUZZ";  //print buzz if multiple of 5
   
  
  else 
      pTag.innerHTML += i;   //print the number for anything else
  

pTag.innerHTML +="<br>"  //adds a break each time the for loop runs
}