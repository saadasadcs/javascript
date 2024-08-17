// TOPIC : CLASSES IN JS



// Without Class Syntax

// function setUser(id, name, email)
// {
//     this.id = id ;

//     this.name = name;

//     this.email = email;

// }


// setUser.prototype.getUser = function ()
// {
//     return `ID : ${this.id} , NAME : ${this.name} , EMAIL : ${this.email}`
// }

// const user = new setUser("12" , "saad", "saad@cs.com")

// console.log(user.getUser())





// With Class Syntax ( ES6 )

class setUser {

    constructor ( id, name, email)
    {
        this.id = id;

        this.name = name;

        this.email = email;
    }

    getUser()
    {
        return `ID : ${this.id} , NAME : ${this.name} , EMAIL : ${this.email}`
    }
}

const user = new setUser(11, "asad", "cs@gmail.com")

console.log(user.getUser())



