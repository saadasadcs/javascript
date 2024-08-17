// console.log(2 > 1);

// console.log(2 >= 1);

// console.log(2 < 1);

// console.log(2 == 1);

// console.log(2 != 1);





// console.log("2" > 1);

// console.log("02" > 1);

/*
NOTES :

    In JavaScript, the > operator performs type coercion if the operands are
    of different types, converting them to numbers before making the comparison. 
*/





// console.log(null > 0);

// console.log(null == 0);

// console.log(null >= 0);

/*

NOTES :

    null > 0 results in false because null coerces to 0, and 0 is not greater than 0.

    null == 0 results in false because null is not equal to 0 (only loosely equal to undefined).

    null >= 0 results in true because null coerces to 0, and 0 is equal to 0 in this comparison.
*/






// console.log(undefined == 0);

// console.log(undefined > 0);

// console.log(undefined < 0);

/*
NOTES:

    undefined == 0 results in false because undefined is not loosely equal to 0.


    undefined > 0 results in false because undefined coerces to NaN, and NaN is not a valid number for comparison.

    undefined < 0 results in false for the same reason: undefined coerces to NaN, and NaN is not comparable.

*/





console.log("2" === 2);

console.log("SAAD" === "SAAD");

/*
NOTES :

    ===  ( Both values are of the same type and value )

*/