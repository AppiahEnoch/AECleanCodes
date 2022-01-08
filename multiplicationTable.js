
var userNumber=0;
var disp;

const ii=document.getElementById("ta1");
function validateUseInput() {
  let userinput = document.getElementById("tf");



  if (userinput.value == 0) {
   
    alert("ENTER NUMBER");
    return false;

  } else {
    if (isNaN(userinput.value)) {
      //clear input
      userinput.value = "";
      alert("ONLY NUMBERS ARE ALLOWED!");
      return false;
    } else {
      //assign value

      userNumber=userinput.value;
    
      //clear input
      userinput.value = "";
      return true;
    }
  }
}


function getMultiplicationtable(){

    if(validateUseInput()){
      ii.innerHTML='';
      ii.style.visibility='visible'

     for(i=1;i<13;i++){
let r="   "+userNumber+"    X  "+i+ "  =  "+ i*userNumber;

      ii.append(r,'\n');

     }
    }
    else{
      ii.innerHTML='';
      ii.style.visibility='hidden'
      
    }
}
