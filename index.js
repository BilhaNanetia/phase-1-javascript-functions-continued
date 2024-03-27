
function saturdayFun(activity = 'roller-skate') {
    return "This Saturday, I want to ${activity}!";
}
saturdayFun();

//Call the function with the default argument
function saturdayFun (activity = "roller-skate") {
    return (This Saturday, I want to ${activity}!);
}


//Call the function with the default argument
function mondayWork (activity ="go to the office") {
    return (This Monday, I will ${activity}.);
}

function wrapAdjective (symbol = '*') {
    return function (adjective){
        return You are ${symbol}${adjective}${symbol}! ;
    }
}