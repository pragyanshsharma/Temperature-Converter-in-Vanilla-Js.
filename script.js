//fetching the elements and storing values (can also use getElementById since we have ids)
let cel = document.querySelector("#celsius");
let fel = document.querySelector("#fahrenheit");
let kel = document.querySelector("#kelvin");

//how function will work
//This function will be called whenever a user types in any input field
//event parameter is an event object automatically passed by the browser
//event.target - the element that triggered the event (which input field was changed)
//event.target.value -current value in that input field
//event.target.name -name attribute of that input field
function computeTemp (event){ 
    let crrval = +event.target.value; //get text from input , + converts string to number, stores it

    //switch checks if triggered the input?, by looking at name attribute
    switch (event.target.name) { 
        //we will make 3 cases, for each one,other two conversions, 
        //.toFixed(2) rounds ro 2 decimal places and converts to string
        case "celsius":
            kel.value = (crrval + 273.32).toFixed(2);
            fel.value = (crrval * 1.8 + 32).toFixed(2);  
            break;
        case "fahrenheit":
            cel.value = ((crrval - 32) / 1.8).toFixed(2);
            kel.value = ((crrval - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            cel.value = (crrval - 273.32).toFixed(2);
            fel.value = ((crrval - 273.32) * 1.8 + 32).toFixed(2);
        break;
        default:
        break;    
  }
    }
