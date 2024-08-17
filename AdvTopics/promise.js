/*

NOTES :

The Promise object represents the eventual completion (or failure)
of an asynchronous operation and its resulting value.


A Promise is in one of these states:

        pending: initial state, neither fulfilled nor rejected.
        fulfilled: meaning that the operation was completed successfully.
        rejected: meaning that the operation failed.

*/




// one Method

// const promise = new Promise( function (resolve, reject){

//     setTimeout( () => {

//         console.log("ASYNC TASK 1 ")

//         resolve() // is used to make connection to then

//     },1000)

// })

// promise.then( function () {

//     console.log("TASK 1 IS RESOLVED")

// })





//2nd Method


// new Promise( (resolve, reject) => {

//     setTimeout( () => {

//         console.log("Async Task 2")

//         resolve()

//     },1000)

// }).then( () => {
//     console.log("Task 2 Is Resolved ")
// })





// How to Pass values in promise

// const promiseTwo = new Promise( function (resolve, reject) {

//     setTimeout( () => {
        
//         console.log("Passing Values")

//         resolve( {

//             username : "saadiee",
//             id : "701078",
//             email : "saadiee@cs.com"
//         } )

//     },1000)

// })

// promiseTwo.then( (userDetails) => {

//     console.log(userDetails)

// })






// Chaining in promise

// const promiseThree = new Promise( function (resolve, reject) {

//     setTimeout( () => {

//         // let error = true

//         let error = false

//         if(!error)
//         {
//             resolve( {
                
//                 username : "saadiee",
//                 id : "701078",
//                 email : "saadiee@cs.com"

//             })
//         }

//         else
//         {
//             reject("Something went Wrong")
//         }

//     },1000)

// })


// promiseThree

// .then( function (userDetails) {

//     console.log(userDetails)

//     return userDetails.email

// })

// .then( function (email) {

//     console.log(email)

// })

// .catch( function (error) {

//     console.log(error)

// })

// .finally( function () {

//     console.log("The Promise is either resolved or rejected") // default behavior
// })







// either use async await


// const promiseFour = new Promise( function (resolve, reject) {

//     setTimeout( () => {

//         // let error = true

//         let error = false

//         if(!error)
//         {
//             resolve( {
                
//                 langauge : "JavaScript",

//                 filename : "JS"
               

//             })
//         }

//         else
//         {
//             reject("ERROR : Something went Wrong")
//         }

//     },1000)

// })

// async function consumePromise ()
// {
//     try{

//         const response = await promiseFour

//         console.log(response)

//     }

//     catch(error)
//     {
//         console.log(error)
//     }
// }

// consumePromise()







// fetch data from the api using async await


// async function getApiData() {

//     try {

//         const response = await fetch("https://api.github.com/users/saadasadcs")

//         // console.log(response)

//         const data = await response.json() // conversion

//         console.log(data)
        
//     } catch (error) {

//         console.log("Error : Something Went Wrong")
        
//     }
    
// }

// getApiData()






// fetch data using then and catch

fetch("https://api.github.com/users/saadasadcs")

.then( (response) => {

    return response.json()
})

.then( (data) => {
    
    console.log(data)
})

.catch( () => {

    console.log(" Error : Something Went Wrong in Fecthing Data from the URL ")
})

