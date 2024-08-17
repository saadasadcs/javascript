// singleton

// Object.create



// object literals

const sapId = Symbol("key1")


const JsUser = {
    name: "Saad",
    
    "full name": "Saad Asad",

    [sapId]: 7012,
    
    age: 18,
    
    location: "Lahore",
    
    email: "saadasad@cs.com",
    
    isLoggedIn: false,
    
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)


// console.log(JsUser["email"])


// console.log(JsUser["full name"])


// console.log(JsUser[sapId])



// JsUser.email = "msaad@cs.com"

// Object.freeze(JsUser) // Not Able to update - rewrite into JS USER obJect

JsUser.email = "softwareEnginner@se.com"

// console.log(JsUser);





JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());



/*

EXPLAINATION :

    console.log(JsUser.greeting()):
    
    What It Does: 
        
    It calls the greeting method.
    
    Inside greeting: It prints "Hello JS user".

    Return Value: 
    
    Since greeting doesn’t return anything, it returns undefined.
    
    Console Output:
    
    First, "Hello JS user" is printed by greeting.
    
    Then, console.log prints the return value of greeting(), which is undefined
    
    
    */


   
   
// console.log(JsUser.greetingTwo());



/*
EXPLAINATION :

    console.log(JsUser.greetingTwo()):

    What It Does: 
        
        It calls the greetingTwo method.

        Inside greetingTwo: It prints "Hello JS user, Saad".

    Return Value: 

        Since greetingTwo doesn’t return anything, it returns undefined.

    Console Output:
    
        First, "Hello JS user, Saad" is printed by greetingTwo.
    
        Then, console.log prints the return value of greetingTwo(), which is undefined.
*/




const regularUser = {
   
    email: "sa@gmail.com",
   
    fullname: 
    
    {
        userfullname: 
       
        {
            firstname: "SAAD",
            
            lastname: "ASAD"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);





// Initial objects
const obj1 = {1: "a", 2: "b"};

const obj2 = {3: "a", 4: "b"};

const obj3 = {5: "a", 6: "b"};



// Using Object.assign to merge obj1 and obj2

const mergedWithAssign = Object.assign({}, obj1, obj2);

// console.log("Merged with Object.assign:", mergedWithAssign);



// Using spread syntax to merge obj1 and obj2

const mergedWithSpread = {...obj1, ...obj2};

// console.log("Merged with spread syntax:", mergedWithSpread);





// Merge objects with a different syntax (e.g., nested objects)

const nestedMerge = { obj1, obj2 };

// console.log("Nested merge:", nestedMerge);