function convert() {
  var weightInput = document.getElementById("weightInput");
  var resultSpan = document.getElementById("resultSpan");
  var conversionSelect = document.getElementById("conversionSelect");
  
  var weight = parseFloat(weightInput.value);
  var conversionType = conversionSelect.value;
  
  if (isNaN(weight)) {
    resultSpan.textContent = "Enter a valid weight.";
    return;
  }
  
  var result;
  
  if (conversionType === "kgToLb") {
    result = weight * 2.2046;
  } else if (conversionType === "lbToKg") {
    result = weight * 0.4536;
  } else {
    resultSpan.textContent = "Select a valid conversion type.";
    return;
  }
  
  resultSpan.textContent = result.toFixed(2);
}
