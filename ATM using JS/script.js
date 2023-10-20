const form = document.querySelector('#form')
const input = document.querySelector('#input1')

function storeInput(){
    const inputArray = [];
    const input1 = document.getElementById('input1')
    const value1 = input1.value;

    inputArray.push(value1);
    if(value1 == 1234){
        console.log("password is correct")
       document.getElementById("demo").innerHTML = "correct password"
    }
    else{
        console.log("incorrect password")
    }
}