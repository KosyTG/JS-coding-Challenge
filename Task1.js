// Task 1. calculate the sum of numbers in an array

function sumArray(arr) {
    let total = 0;
     
    for (i = 0; i < arr.length; i++) {
     total += arr[i];
    }
    return total;
    }
    
    console.log(sumArray([1, 2, 3, 10, 28, 99, 48, 994, 28839]));