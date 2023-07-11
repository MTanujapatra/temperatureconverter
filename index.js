const CelsiusE1=document.getElementById("Celsius")
const FahrenheitE1=document.getElementById("Fahrenheit")
const KelvinE1=document.getElementById("Kelvin")




function computeTemp(){
  const currentValue= +event.target.value;
  switch (event.target.name) {
    case "Celsius":
  const currentValue= +event.target.value;
  document.getElementById("Kelvin").value=currentValue + 273.15;
  document.getElementById("Fahrenheit").value=currentValue * 1.8 +32;
      break;
      case "FahrenheitE1":
        CelsiusE1.value=(currentValue - 32) /1.8;
        KelvinE1.value=(currentValue -32) / 1.8 + 273.15;
      break;
      case "Kelvin":
        CelsiusE1.value=currentValue -  273.15;
      FahrenheitE1.value=(currentValue -273.15) * 1.8 + 32;
      break;
  
  
    default:
      break;
  }
}