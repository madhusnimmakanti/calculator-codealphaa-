const display=document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;

}
function clearDisplay(){
    display.value=""; 
}
function clearlast(){
    string=string.substring(0,string.length-1);
    input.value=string;
}
function calculate(){
    try{
        display.value=eval(display.value);

    }
    catch(error){
        display.value="Error";
    }
}