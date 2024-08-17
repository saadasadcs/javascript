// Topics : Object Literals, this, constructor, new


// Object Literals


// const studentDetails = {

//     name : "Saad",

//     id: "701078",

//     course : "JS",

// }

// console.log(studentDetails.name)





// this -> means currnt context


// const stackAbb = {

//     m : "mongoDb",

//     e : "express",

//     r : "react",

//     n : "node",

//     mern : function()
//     {
//         console.log(` MERN stands for : ${this.m}, ${this.e}, ${this.r}, ${this.n} `)
//     }
    
// }

// console.log(stackAbb)

// console.log(stackAbb.mern())

// console.log(this) // when use in global scope (out of context) return a empty object




// constructor function  -> new ( always gives you a new instance everytime means give a new copy everytime)

/*

NOTES :

        Steps

        1 - Create Object: new creates a new empty object (the instance).

        2 - Call Constructor: The constructor function runs with this new object as this.

        3 - Set Up Properties: The constructor sets properties and methods on this new object.

        4 - Return Object: The new object is returned. If the constructor returns another object,
            that’s what gets returned; otherwise, the new object is returned by default.



        
    Simple Explaination :  ( when you add the new keyword )

    

    1 - first empty {} object is created which is called an instance

    2 - second constructor function is called because of new keyword

        what it does -> 
            packs all the arguments inside it and give it to you

    3 - in the third step this keyword whatever arguments you have
        written get injected insie it

    4 - you get the arguments



*/


function UserDetails(username, id, isLoggedIn)

{
    this.username = username;

    this.id = id;

    this.isLoggedIn = isLoggedIn

    this.greeting = function()
    
    {
        console.log(`Welcome ${this.username}`);

    }

    return this // so it is implicitly defined either you return or not -> (by default behaviour)
}

// const userOne = UserDetails("Saad", 12, true)

// const userTwo = UserDetails("Asad", 11, false)

// console.log(userOne);

/*

Point To Be Noted :

    So, you haven't call userTwo but userTwo has over-wright the values, when you did not use 
    the new ( constructor function ) keyword 

*/


const userOne = new UserDetails("Saad", 12, true)

const userTwo = new UserDetails("Asad", 11, false)

console.log(userOne)

console.log(userTwo)



