// for main display when button is pressed
function display(num){

    result.value +=num // += used to add append the values in the

}

//AC btton-. when ac button is pressed display should be empty

function clearAll(){
    result.value=""
}

//backspace: when button pressed last value in the display get deleted
// slice=  first index=0. last index =-1; tetuen the string with out last value
function back(){
    result.value=result.value.slice(0,-1)
}

// when "=" button is pressed
// use predifned eval method. if the input is wrong display 
//"error " for one sec

function equal(){
    try{
    result.value=eval(result.value)
    }
    catch (error)// catch with out "(error)" also working
    {
        result.value="error"
        setTimeout(()=>{
            result.value=""
        },1000)

    }
}