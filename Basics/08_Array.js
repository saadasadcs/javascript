// ARRAY IN JS


const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["ironman", "flash"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);



// Array methods

myArr.push(6)

// console.log(myArr)



myArr.push(7)

// console.log(myArr)



myArr.pop()

// console.log(myArr)



myArr.unshift(8) // just like push method, but insert at 0 index

// console.log(myArr)



myArr.shift()

// console.log(myArr) // just like pop method, but remove from 0 index


// console.log(myArr.includes(5)); // the value 5 exist in array or not 


// const newArr = myArr.join()

// console.log(myArr);

// console.log( newArr);




let myArry1 = [1, 2, 3, 4, 5];

// console.log(myArry1.indexOf(3)); 


let myArry2 = [1, 2, 4, 5];

// console.log(myArry2.indexOf(3)); // Output: -1


/*

NOTE :

    The indexOf method in JavaScript is used to find the first occurrence
    of a specified value in an array and returns its index. If the value is
    not found, it returns -1.

*/





/*
NOTE:

    slice method creates a new array by copying a portion
    of an existing array, without modifying the original array.


    The slice method takes two arguments:
        
        Start index (inclusive) - The index at which to start the extraction.

        End index (exclusive) - The index at which to stop the extraction. 
        (This index is not included in the returned array.)


*/

let myArrry = [10, 20, 30, 40, 50];

// console.log("A ", myArrry); 

const myn1 = myArrry.slice(1, 3);

// console.log(myn1); 

// console.log("B ", myArrry); 



/*
NOTE :

Splice method directly alters the array it is called on. (Removes elements from the original array.)

splice modifies the original array and returns the removed elements.

slice does not modify the original array and returns a new array based on the specified indices.

*/


const myn2 = myArrry.splice(1, 3) 

// console.log("C ", myArrry);

// console.log(myn2);


// Splice

let array1 = [1, 2, 3, 4, 5];

array1.splice(2, 2);  // Start at index 2, remove 2 elements

// console.log(array1); // Output: [1, 2, 5]


let array2 = [1, 2, 5];

array2.splice(2, 0, 3, 4); // Start at index 2, remove 0 elements, add 3 and 4

// console.log(array2); // Output: [1, 2, 3, 4, 5]



let array3 = [1, 2, 3, 4, 5];

array3.splice(2, 2, 'a', 'b'); // Start at index 2, remove 2 elements, add 'a' and 'b'

// console.log(array3); // Output: [1, 2, 'a', 'b', 5]


/*
NOTES :

    splice(start, deleteCount): Removes elements from the original array.

    splice(start, deleteCount, item1, item2, ...): Removes elements and adds new elements.

    splice(start, 0, item1, item2, ...): Adds elements without removing any.
*/





const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);




// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);



//SPREAD OPERATOR

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);




// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);





console.log(Array.isArray("Saad")) // To check if a given value is an array.



console.log(Array.from("Saad"))

/*

NOTE :
        Array.from creates a new array instance from an array-like or iterable object.

        "Saad" is a string, which is an iterable object. Each character of the string
        
        will be turned into an element in the array.

*/




// console.log(Array.from({name: "Saad"})) 

/*

NOTE :

Array.from({ name: "Saad" }) results in an empty array because the object is not iterable.

Explanation:

        Array.from expects an object that has a length property or is iterable (like strings, arrays, or maps).

        { name: "Saad" } is a plain object without length or iterable properties, so Array.from cannot create an
        array from it and returns an empty array.


*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

