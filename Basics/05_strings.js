const name = "SAAD"

const repoCount = 50

// console.log(name + repoCount + " Value");



// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('saad-cs-com')

// console.log(gameName[0]);

// console.log(gameName.__proto__); // gameName.__proto__ refers to String.prototype, which is the prototype object for all String objects.



// console.log(gameName.length);

// console.log(gameName.toUpperCase());



// console.log(gameName.charAt(5));

// console.log(gameName.indexOf('c'));



// const newString = gameName.substring(0, 4)

// console.log(newString);



const anotherString = gameName.slice(-8, 4)

// console.log(anotherString);

/*
NOTES :
    
    String.prototype.slice() Method:

        The slice() method in JavaScript is used to extract a portion of a string based on start and end indices.
        It can take two arguments:
        start: The starting index (inclusive).
        end: The ending index (exclusive).


    Handling Negative Indices:

        When a negative value is used for the start index, it is treated as an offset from the end of the string.

        For example, -8 means starting 8 characters from the end of the string.
        
    
    Given gameName is "saad-cs-com":

        The length of "saad-cs-com" is 11 characters.
        
        slice(-8, 4) is used, where:
    
        -8 refers to the position 8 characters from the end. For "saad-cs-com", this would be the 3rd character from the start (as 11 - 8 = 3), which is 'd'.

        4 is the end index, so it includes characters from index 3 up to (but not including) index 4.
*/




// const newStringOne = "   SAAD    "

// console.log(newStringOne);

// console.log(newStringOne.trim());





// const url = "https://saad.com/saad%20asad"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('saad'))

// console.log(url.includes('SoftwareEngineer'))

// console.log(gameName.split('-')); // gameName = 'saad-cs-com'