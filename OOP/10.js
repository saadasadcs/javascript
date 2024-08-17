// TOPIC : getter and setter using Class

/*
    In JavaScript, we often use an underscore (_) in variable names
    to show that a property is intended to be "private" or internal
    to the object. 
    This is just a convention and doesn't actually prevent access.

*/


class user{
    constructor(name,id)
    {
        this.name = name;

        this.id = id;
    }

    set name(value) 
    {
        this._name = value
    }

    get name()
    {
        return this._name.toUpperCase()
    }

    set id(value)
    {
        this._id = value
    }

    get id()
    {
        return this._id
    }

    
}

const student = new user ("Saad" , 1452)

console.log(student)