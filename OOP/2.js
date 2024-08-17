// TOPIC: this and Prototype

/*

NOTE:

    Default behaviour of JS is protoype 

        POINT TO BE NOTED:

            agr usse ( JAVASCRIPT ) Ko koi cheez nahi mill rahi to wo oper se oper search
            krti h k jb tk usse  NULL VALUE  na mill jaye

                i.e child to parent, parent to grandparent, grandparent to great grandparent
                    and so on until unless -----> NULL

            Protoype ki wja se hi new, this, class, inheritence mili h
    

    Everyting in JS REFER TO OBJECT :
        
        functions, Arrays, Strings   ---------->     Object    ---------->      NULL 

*/





//EX 1 ( fucntion is a function but also a object depend on the use case )

// const sum = function(a , b)
// {
//     return a + b 
// }

// sum.numberUpdate = 4

// console.log(sum( 11 , 12))

// console.log(sum.numberUpdate)




// Ex 2

let username = "Saad Asad     "

String.prototype.totalLength = function(){
    console.log(`${this}`);
    console.log(`Total length of a string is: ${this.trim().length}`); // Remove the extra spaces
}

username.totalLength()
"Kamran".totalLength()
"Ali".totalLength()






// EX 3 (use of this and prototype in a function)

// function createUser(username, id)
// {
//     this.username = username

//     this.id = id
// }

// createUser.prototype.increment = function ()
// {
//     this.id++
// }

// createUser.prototype.getDetails = function ()
// {
//     console.log(`NAME : ${this.username} and ID : ${this.id}`)
// }

// const userOne = new createUser("Saad" , 12 )

// userOne.getDetails()






//EX 4

/*
    NOTE :

    Object.prototype is a prototype object that all objects inherit from.
    When you add a method to Object.prototype, it becomes available to all
    objects derived from Object.

*/

// const name = [

//     { 
//         name: "Asad"
        
//     },

//     { 
//         name: "Ali"
        
//     }
// ] 

// const studentRecord = {
//     name : "Saad",
    
//     course : "JS",

//     getStudentRecord : function (){
//         console.log(`NAME : ${this.name} ,  Course : ${this.course}`)
//     }
// }

// Object.prototype.helloStudent = function ()
// {
//     console.log(`Hello ${this.name} , Welcome`)
// }

// studentRecord.helloStudent() 

// name.forEach(element => {
//     element.helloStudent()
// });





//Ex 5


let heroArry = ["thor", "spiderman"]


let heroObject = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.one = function(){
    console.log(`Hello, I am available to all objects derived from Object`);
}

Array.prototype.two = function(){
    console.log(`Hello, i am available to Array Only as derived from Array`);
}

// heroObject.one()

// heroArry.one()

// heroObject.two() // gives error because two method available to Array Only as it is derived from Array

// heroArry.two()


/*

NOTE:

    DEFAULT BEHAVIOUR:

                         NULL
                         
                          ^
                          |

                        OBJECTS

                          ^
                          |
                    
                FUNCTIONS , ARRAYS , STRINGS


*/






