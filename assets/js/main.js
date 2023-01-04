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


// x >= 10 && y <= 10 
// 10 >= 10 and 15 <= 10 // true false     false
console.log(x >= 10 && y <= 10) // false


// x * z == 100 || x * y > 100 
// 10 * 20 == 100 or 10 * 15 > 100 // false true  true
console.log(x * z == 100 || x * y > 100) // true


let a = true
console.log(a)
let b = false
console.log(b)
let c = true
console.log(c)
console.log(a + " " + b) // true false  ohne Farbe = String Text
console.log(a, b) // true false    in Farbe  = Boolean
console.log(a + b) // 1             in Farbe 

// a + b 
console.log(a+b) // 1           in Farbe

// a & b 
console.log(a & b) // 0         in Farbe
console.log(a && b) // false    in Farbe

// a | b
console.log(a | b) // 1         in Farbe
console.log(a || b) // true     in Farbe


!(a & b) 
console.log(!(a & b)) // true       in Farbe  = Boolean
console.log(!(a && b)) // true       in Farbe  = Boolean

console.log(!(a | b)) // false       in Farbe  = Boolean
console.log(!(a || b)) // false       in Farbe  = Boolean

console.log(!(a & b)) // false       in Farbe  = Boolean
console.log(!(a && b)) // false       in Farbe  = Boolean

