// TOPIC : getter and setter using function


function user(name, id)
{
    this._name = name;

    this._id = id;

    Object.defineProperty(this, 'name', {
        get: function(){

            return this._name.toUpperCase()

        },

        set: function(value)
        {
            this._name = value

        }
    })

    Object.defineProperty(this, 'id', {
        get: function(){

            return this._id

        },

        set: function(value)
        {
            this._id = value

        }
    })

}

const student = new user('Saad', 215)

console.log(student)