let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

//take the array, for each button in the array add an event listener that listens for clicks.
//catch the button clicked into 'e', and switch case for each possible value
buttons.map( button => {
 button.addEventListener('click', (e) => {
  switch(e.target.innerText){
   case 'C': 
   display.innerText = ''; 
   break;
   case '←':
    if(display.innerText){                //if back arrow, remove 1 from end of string in display
     display.innerText = display.innerText.slice(0 , -1);
    } 
   break;
   case '=':
    try{
     display.innerText = eval(display.innerText);     
    } catch{
     display.innerText = "Error";
    }
    break;
   default: display.innerText += e.target.innerText;
  }
 })
});
