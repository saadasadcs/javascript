
function sayMyName(){
    console.log("Hello Saad")
}

// sayMyName()






function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

// addTwoNumbers(10, 25)






function TwoNumbers(number1, number2){

    // let result = number1 + number2
    
    // return result
    
    return number1 + number2
}

const result = TwoNumbers(3, 5)

// console.log("Result: ", result);






function loginUserMessage(username = "Saad")
{
    if(!username)
        {
            console.log("PLease enter a username");
       
            return
        }
    
    return `${username} just logged in`
}

// console.log(loginUserMessage())

// console.log(loginUserMessage("ASAD"))







function calculateCartPrice(val1, val2, ...num1){
    
    // return val1

    // return val2

    return num1

}

// console.log(calculateCartPrice(200, 400, 500, 2000))

/*

NOTE :

    The ...num1 parameter is a rest parameter that collects all remaining arguments into an array


    EXPLAINATION

        val1 is assigned the value 200.

        val2 is assigned the value 400.

        num1 collects the remaining arguments into an array. In this case, num1 becomes [500, 2000].
*/








const user = {
    username: "SAAD",
    id: 215
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.id}`);
}

// handleObject(user)

/*
NOTE :

    Function Call with Existing Object:

    Pass a pre-defined object to the function.
*/

// handleObject({
//     username: "Asad",
//     id: 309
// })

/*
NOTE :

    Function Call with Inline Object:

        Pass an object created directly within the function call.
*/







const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));