// TOPIC : Call function

/*

Explaination :

so when you use  SetUsername(username) you only pass the reference but not holding it.

when function call it moves to their execution context environment ,

when run comes out of the execution context environment and then it delete its

execution context environment ,

So to avoid this we use the following syntax to hold a copy execution context environment 

SetUsername.call(this, username)





*/


function SetUsername(username){
   
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // holds the reference of SetUsername() execution context 
   
    this.email = email
    this.password = password
}

const user = new createUser("saad", "saadasad@cs.com", "123")

console.log(user);
