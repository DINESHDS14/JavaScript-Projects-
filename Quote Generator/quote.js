let tap= document.getElementById('tap');
let element = document.getElementById("element");

let quotes=[
    "What's stopping you !",
    "Have a firm handshake",
    "Life is better than when you sing about bananas",
    "Always do anything for love,but don't do that",
    "When faced with a choice do both",
    "It is easy to sit up and take notice",
    "What's difficult is getting up andd taking action"
    ];
tap.addEventListener('click',function(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    element.innerHTML = randomQuote;
})