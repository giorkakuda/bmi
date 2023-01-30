
function calcBmi() {
    let height =document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let res = document.getElementById('res')
    
    bmi = weight / height ** 2;
    
    if (bmi < 18.5) {return res.innerHTML = 'Your BMI is: '+ bmi.toFixed(2) +'. Underweight', document.body.style.background = "rgb(173,230,216)"}
    if (bmi < 24.9) {return res.innerHTML = 'Your BMI is: '+ bmi.toFixed(2) +'. Normal', document.body.style.background = "rgb(0,128,0"}
    if (bmi < 29.9) {return res.innerHTML = 'Your BMI is: '+ bmi.toFixed(2) +'. Overweight', document.body.style.background = "rgb(255,255,0"}
    if (bmi < 39.9) {return res.innerHTML = 'Your BMI is: '+ bmi.toFixed(2) +'. Obese', document.body.style.background = "rgb(255,69,0)"}
    if (bmi > 40) {return res.innerHTML = 'Your BMI is: '+ bmi.toFixed(2) +'. Extremly obese', document.body.style.background = " rgb(255,0,0)"}  
}




