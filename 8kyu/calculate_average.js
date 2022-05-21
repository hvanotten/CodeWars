/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

// calculate the average of an array of numbers
// add up array and div by array.length
// need a conditional or something to address 0

let find_average = function (array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum/array.length
}