/*

NOTE :
    Purpose: 
        
        Object.getOwnPropertyDescriptor tells you details about a specific property of an object.


    How to Use It:
        
        Call it with the object and the property name.
        
        Example: 
            Object.getOwnPropertyDescriptor(myObject, 'myProperty').


    What It Shows:
    
        value: The property's value.
        writable: Whether you can change the value.
        enumerable: Whether the property shows up in loops.
        configurable: Whether you can delete the property or change its settings.


*/

// console.log(Math.PI)

// Math.PI = 3.14 // cannot change the value of PI because it is defined under the hood

// console.log(Math.PI) 



//Reason

// const a = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(a)




// Activity

const student = {
    name : "Saad",

    sapId : 7010,

    course : "JS",

    getdetails : function ()
    {
        console.log(`NAME : ${this.name} , ID : ${this.sapId} , COURSE : ${this.course}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(student, "name"))




// Object.defineProperty( student , "name" , {
    
//     writable : false,

//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(student, "name"))





for (const [key, value] of Object.entries(student)) {

    if( typeof value !== 'function')
    {
        console.log(`${key}, ${value}`)

    }
    
}
