// recurison is an alternative to loops
console.log("hello world");
// known as iterative programming
for (let x = 0; x < 10; x++) {
    console.log(x);
}
console.log('----------recurisve solution---------')
function printX(x, limit) {
    // base case: recurison should stop when x is 10
    if (x == limit) {
        return; // stop the function if x is 10
    }
    // each step in process
    console.log(x);

    // recursive call and the problem is shrunk each time
    printX(x+1, limit);
}
printX(0, 5)

function sum(n) {
    let total =  0;
    for (let i = 0; i < n+1; i++) {
        total += n;
    }
    return total;
}