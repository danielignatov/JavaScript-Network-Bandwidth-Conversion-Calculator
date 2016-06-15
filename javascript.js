// Code written by Daniel Ignatov
//    code.danielignatov.com

function convert() {
	// Notify that the function is called.
	console.log("Function \"convert()\" called.")

	// Declaring and getting values
	var inputValue = document.getElementById("input").value;
	var kbpsValue;
	var outputValue;
	var outputString;
	var convertFrom = document.getElementById("convert-from").value;
	var convertTo = document.getElementById("convert-to").value;

	// Check if the input value to be calculated is correct
	// TODO

	// Convert input value to kbps
	switch(convertFrom) {
		case "Kbps": kbpsValue = inputValue; break;
		case "KB/s": kbpsValue = inputValue * 8; break;
		case "Mbps": kbpsValue = inputValue * 1000; break;
		case "MB/s": kbpsValue = inputValue * 8000; break;
		case "Gbps": kbpsValue = inputValue * 1000000; break;
		case "GB/s": kbpsValue = inputValue * 8000000; break;
	}

	// Convert input kbps value to output value
	switch(convertTo) {
		case "Kbps": outputValue = kbpsValue; break;
		case "KB/s": outputValue = kbpsValue / 8; break;
		case "Mbps": outputValue = kbpsValue / 1000; break;
		case "MB/s": outputValue = kbpsValue / 8000; break;
		case "Gbps": outputValue = kbpsValue / 1000000; break;
		case "GB/s": outputValue = kbpsValue / 8000000; break;
	}

	outputString = inputValue + " " + convertFrom + " = " + outputValue + " " + convertTo;

	// Notify calculation done
	console.log("Calculation done, output should display.")

	document.getElementById("output-display").innerHTML = outputString;
}