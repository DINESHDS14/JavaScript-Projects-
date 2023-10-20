const calculate = document.getElementById("calculate")
const dobinput = document.getElementById("dob-input")
const result = document.getElementById("result")

calculate.addEventListener('click', ()=>{
const dob = new Date(dobinput.value)
if(isValiddate(dob)){
    const age = calculateAge(dob);
    result.innerHTML=`<strong> Your age is </strong><br>
    ${age.years}Years <br> ${age.months} Months <br> ${age.days} days <br>
    <br>`
}
else{
    result.textContent = " please enter valid date of birth"
}
})

function isValiddate(date){
    return date instanceof Date && !isNaN(date)
}

function calculateAge(date){
    const today = new Date();
    let years = today.getFullYear() - date.getFullYear()
    let months = today.getMonth() - date.getMonth()
    let days = today.getDate() - date.getDate()

    if(months < 0 || (months===0 && today.getDate() < date.getDate())){
        years--
        months+=12;
    }
    if(days < 0){
        months--
        const prevMonthDate = new Date(today.getFullYear(),today.getMonth()-1,date.getDate())
        days = Math.floor((today-prevMonthDate / (1000 * 60 * 60 * 24)))
    }
return{
    years,
    months,
    days
};

}