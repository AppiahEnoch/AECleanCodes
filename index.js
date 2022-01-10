function getUserInput(){
    let userInput=document.querySelector("#userInput");
    let realInput=userInput.value

    let response=document.querySelector("#response")
    userInput.value=''
    
    response.innerHTML="YOU ENTERED "+realInput;
   

    
   
    
    }




