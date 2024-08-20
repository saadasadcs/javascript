/* 
   CALLBACK FUNCTION 
*/


const user = {
    username: "saad",
    id: 9951,

    welcomeMessage: function() 
                    {
                        console.log(`${this.username} , welcome to website`);
            
                        console.log(this);
                    }   

}

// user.welcomeMessage()

// user.username = "Asad"

// user.welcomeMessage()

// console.log(this);






function name()
{
    let username = "Saad Asad"

    console.log(this.username);
}

// name()

/*
NOTE :

    username is a local variable inside the name function.

    this in this context refers to the global object (like window in browsers).

    There is no username property on the global object, so this.username is undefined.
*/



const person = {
    username: "Saad Asad",
    name() {
        console.log(this.username);
    }
};

// person.name();

/*

NOTE:

    person is an object with a property username and a method name.

    Inside the name method, this refers to the person object.

    this.username correctly refers to person.username, which is "Saad Asad".
*/







/* 
    ARROW FUNCTION ( CALLBACK )
*/

// SYNTAX 1

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3, 4))




//SYNTAX 2 

const subTwo = (num1, num2) =>  num1 - num2

// console.log(subTwo(3, 4))




// SYNTAX 3

const mulTwo = (num1, num2) => ( num1 * num2 )

// console.log(mulTwo(3, 4))





//SYNTAX 4

const addName = (username) => ({username: username})
console.log(addName("Saad Asad"))




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()