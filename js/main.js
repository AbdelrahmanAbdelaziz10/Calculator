let input = document.querySelector("#cal");
let btn = document.querySelectorAll("button");

function Clear(){
    input.value="";
}
function Delete(){
    input.value=input.value.slice(0,-1);
}
function display(num){
    input.value+= num;
}
function calc(){
    try{
        input.value =eval(input.value);
    } catch(err){
        input.value="Error";
    }
}

// let string="";
// let arr = Array.from(btn);

// arr.forEach(button=>{
//     button.addEventListener("click",(e)=>{
//         if (e.target.innerHTML== '='){
//             string = eval(string);
//             input.value= string;
//         } else if (e.target.innerHTML == 'AC'){
//             input.value ="";
//         }else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0 , string.length-1);
//             input.value= string;
//         } 
//             string += e.target.innerHTML;
//             input.value = string;
        
//     })
// })

