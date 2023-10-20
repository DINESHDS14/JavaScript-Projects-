const amount = 10000
function takeValue(){
    var credit = document.getElementById('input2').value
   document.write("Amount Credited "+(amount+credit))
}
function getValue(){
    var deposit = document.getElementById('input3').value
    document.write("Amount Depoited "+(amount-deposit))
}
