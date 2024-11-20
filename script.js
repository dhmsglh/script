function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const conversionType = document.getElementById("conversionType").value;
  let result;

  if (isNaN(inputValue)) {
    result = "Masukkan nilai yang valid.";
  } else {
    switch (conversionType) {
      case "kmToMiles":
        result = (inputValue * 0.621371).toFixed(2) + " mil";
        break;
      case "milesToKm":
        result = (inputValue / 0.621371).toFixed(2) + " km";
        break;
      case "celsiusToFahrenheit":
        result = ((inputValue * 9) / 5 + 32).toFixed(2) + " °F";
        break;
      case "fahrenheitToCelsius":
        result = (((inputValue - 32) * 5) / 9).toFixed(2) + " °C";
        break;
      default:
        result = "Pilih jenis konversi.";
    }
  }

  document.getElementById("outputValue").innerText = result;
}
