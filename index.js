/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputUser = document.getElementById("display-input")
let inputDisplay = document.querySelectorAll(".input-display")
let calculateFeet = document.getElementById("cal-feet")
let calculateMeter= document.getElementById("cal-meter")
let calculateGallon = document.getElementById("cal-gallons")
let calculateLiter = document.getElementById("cal-liter")
let calculatePound = document.getElementById("cal-pound")
let calculateKilo = document.getElementById("cal-kilo")
let changeTheme = document.getElementById("supermain");
let mainLengthTheme = document.querySelectorAll(".main-length")    
const converBtn = document.getElementById("convert-btn");
let paragraphElements = document.querySelectorAll(".paraps")
let h2Elements = document.querySelectorAll(".h2p")


inputUser.addEventListener("click", function(){
    inputUser.value =""
})
converBtn.addEventListener("click", function(){
    // console.log(inputValue);

    //display all input values 
    let inputValue = inputUser.value;
    for (let i = 0; i < inputDisplay.length; i++){
        inputDisplay[i].textContent = inputValue;
    }
    
    //calculate feet
    calculateFeet.textContent=  (inputValue * 3.281).toFixed(2) 
    //calculate meter
    calculateMeter.textContent = (inputValue/3.281).toFixed(2) 
    //calculate Gallons
    calculateGallon.textContent = (inputValue*0.264).toFixed(2)
    //calculate Liters
    calculateLiter.textContent = (inputValue/0.264).toFixed(2)
    //calculate pound
    calculatePound.textContent =(inputValue*2.204).toFixed(2)
    //calculate Kilo
    calculateKilo.textContent =(inputValue/2.204).toFixed(2)

    inputUser.removeAttribute('placeholder');
    inputUser.textContent = " "
    inputUser.value = ""
    console.log(inputUser.getAttribute('placeholder'));
})

function rgbToHex(rgb) {
    // Remove the "rgb(" and ")" parts of the string and split the values into an array
    let rgbValues = rgb.substring(4, rgb.length-1).split(", ");
    // Convert the decimal values to hexadecimal and pad with zeros if necessary
    let hexValues = rgbValues.map(function(value) {
      let hex = Number(value).toString(16);
      if(hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    });
    // Combine the hexadecimal values into a string and add the "#" prefix
    let hexString = "#" + hexValues.join("");
    return hexString;
  }
  


const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
  
  let currentColor = window.getComputedStyle(changeTheme).backgroundColor;



  let hexColor = rgbToHex(currentColor);

//   body.classList.toggle('light-theme');
//   body.classList.toggle('dark-theme');
     console.log(hexColor);
     
  
      
     

    if(hexColor === "#f5ebeb"){
        changeTheme.style.backgroundColor = "#1f2937";
       for (let i = 0; i < mainLengthTheme.length; i++) {
              mainLengthTheme[i].style.backgroundColor = "#273549"
        
        
       }
       for (let i = 0; i < paragraphElements.length; i++) {
        paragraphElements[i].style.backgroundColor = "#273549"
        paragraphElements[i].style.color = "#FFFFFF"
  
  
 }
 for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.backgroundColor = "#273549"
    h2Elements[i].style.color = "#CCC1FF"


}

    //    paragraphElement.style.backgroundColor = "#273549";
    //    h2Element.style.backgroundColor = "#273549";

    }
    else if(hexColor === "#1f2937")
    {
        changeTheme.style.backgroundColor = "#f5ebeb";
        for (let i = 0; i < mainLengthTheme.length; i++) {
            mainLengthTheme[i].style.backgroundColor = "#FFFFFF"
      
      
     }
      
     for (let i = 0; i < paragraphElements.length; i++) {
        paragraphElements[i].style.backgroundColor = "#FFFFFF"
        paragraphElements[i].style.color = "#000"
  
  
 }
 for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.backgroundColor = "#FFFFFF"
    h2Elements[i].style.color = "#000"

}
       


    //  paragraphElement.style.backgroundColor = "#FFFFFF";
    //    h2Element.style.backgroundColor = "#FFFFFF";
    }

  const sunIcon = document.querySelector('#theme-toggle .fa-sun');
  const moonIcon = document.querySelector('#theme-toggle .fa-moon');
  sunIcon.classList.toggle('d-none');
  moonIcon.classList.toggle('d-none');
}
