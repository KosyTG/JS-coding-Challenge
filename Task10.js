// Task 10 Create a function that filters out negative numbers

let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

 

let positive_array = numbers.filter(function(value) {

    return value >= 0; });


console.log(positive_array);


Output = [0, 1, 5, 12, 19, 20]