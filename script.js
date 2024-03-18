let display = document.getElementById("display");

function clearDisplay(){
    display.value = ""; 
}

function backSpace(){
    
}

function appendToDisplay(input){
    display.value += input; 
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}

function square(){
    calculate();
    display.value = Math.pow(display.value,2);
}

function root(){
    calculate();
    display.value = Math.sqrt(display.value);
}