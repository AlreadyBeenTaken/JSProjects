//1)convert celsius to fahrenheit

function convertToF(celsius) {
	let fahrenheit;
	fahrenheit = celsius * 9 / 5 + 32;
	console.log("Given", celsius, "equals");
	return fahrenheit;
}

console.log(convertToF(36));