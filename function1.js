const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


//Sorted array
let sortedAges = ages.slice().sort((a, b) => a - b);


//Length of array   
let length = sortedAges.length;


// Finding min and max age
let min = Math.min(...sortedAges);
let max = Math.max(...sortedAges);


//finding median age
let median;
let middleIndex = length / 2;
if (length % 2 == 0) {
    median = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
    median = sortedAges[Math.floor(middleIndex)];
}


//Finding average age
let sum = sortedAges.reduce((total, age) => total + age, 0);
let avgAges = sum / length;


//Finding range of ages
let range = max - min;


//Comparing min - averae and max - average
let minAvg = min - avgAges;
let maxAvg = max - avgAges;
if (Math.abs(minAvg) > Math.abs(maxAvg)) {
    compare = "Min - Average is greater";
} else if (Math.abs(minAvg) < Math.abs(maxAvg)) {
    compare = "Max - Average is greater";
} else {
    compare = "Min - Average and Max - Average are equal";
}


console.log("Sorted ages is ", sortedAges);
console.log("Min age is ", min);
console.log("Max age is ", max);
console.log("Median age is ", median);
console.log("Average age is ", avgAges);
console.log("The range is ", range);
console.log(compare);