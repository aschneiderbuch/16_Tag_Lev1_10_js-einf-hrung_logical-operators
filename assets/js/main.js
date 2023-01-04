let x = 10
let y = 15
let z = 20

// x > z && x > y
        // 10 > 20 && 10 > 15 
console.log( x > z && x > y ) // false
        // falsch && falsch 


// x != y 
        // 10 != 20 
console.log( x!= y ) // true
        // true

// z <= y || z >=x  
        // 20 <= 15 or 20 >= 10 
console.log(z <= y || z>=x) // true


// x == z || x != y 
// 10 == 20 or 10 != 15      false true    true
console.log(x == z || x!= y) // true