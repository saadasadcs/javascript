// TOPIC : getter and setter using objects


const User = {
    _email: 'hello@world.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const student = Object.create(User)
console.log(student.email);


/*
POINT TO BE NOTED :

    When you console.log(student.email); it calls the get email() method
    defined in the User object, which returns the _email property in uppercase.

*/