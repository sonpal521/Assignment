/**
 * 
 * 01
 * Requirements: "1. Given 2 numbers as input. You need to find if they have opposite signs or not.
   Input -> +123, -12
   Output -> true
 * 

 */

function oppositeSigns(a, b)
    {
        return ((a ^ b) < 0);
    }
  
    let a = +123, b = -12;
    if (oppositeSigns(a, b) == true){

        console.log("Signs are opposite");
    }
        
    else{
        console.log("Signs are not opposite");

    }

    // Output: Signs are Opposite





/**
 * 2. Given 3 numbers. You need to find the smallest of three numbers without using comparison operators
Input -> 12,44,2
Output -> 2
 * 
 */



function min(x, y) {

    return y + ((x - y) & ((x - y) >> (32 * i - 1)))

}

function smallest(x, y, z) {

    return Math.min(x, Math.min(y, z));

}
let x = 12, y = 44, z = 2;

console.log("Smallest of 3 numbers is " +
    smallest(x, y, z));


    // Output: Smallest of 3 numbers is 2



    






    
      