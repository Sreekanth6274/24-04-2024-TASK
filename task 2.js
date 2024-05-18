let randomBtn = document.querySelector('#color4');
let randomBtn2 = document.querySelector('#color2');
let randomBtn3 = document.querySelector('#color4');
// let randomBtn4 = document.querySelector('#color');


randomBtn.onclick = () => {
    let num = Math;

    let randomNum1 = num.random() * 255;
    let greenColor  = num.floor(randomNum1);
    
    
    let randomNum2 = num.random() * 255;
    let redColor = num.floor(randomNum2);

    
    let randomNum3 = num.random() * 255;
    let blueColor = num.floor(randomNum3);

     randomBtn2.style.backgroundColor = `rgb(${greenColor}, ${redColor}, ${blueColor})`
    randomBtn3.style.backgroundColor = `rgb(${greenColor}, ${redColor}, ${blueColor})`
    randomBtn4.style.backgroundColor = `rgb(${greenColor}, ${redColor}, ${blueColor})`
}
