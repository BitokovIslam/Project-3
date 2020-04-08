var arr = [5, 5, 5, 5, 5, 5, 5, 5, 5]
var result = arr.reduce(function (sum, current) {
    return sum + current;
}, 0);

// Реализуйте функцию sum (result)
console.log(result); // 45