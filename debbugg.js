//3 type of errors - syntax, runtime, semantic (logical)
//typeof
three = "3";
seven = 7;
console.log(typeof(seven), typeof(three));

//catch misspelled variables/functions, uclosed brackets etc.
let myArray = [1, 2, 3, 4];
let arraySum = myArray.reduce((previous, current)=>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//function error
function nine() {
	return 9;
}

let nine1 = nine; //return function
let nine2 = nine(); //return number
console.log(typeof(nine1), typeof(nine2));

//create matrix
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row=[];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);