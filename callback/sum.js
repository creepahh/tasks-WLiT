function sumOfNumbers(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    callback(sum);
}


sumOfNumbers(4, function(result) {
    console.log("Sum using callback: " + result); 
});
