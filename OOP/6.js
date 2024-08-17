// TOPIC : INHERITENCE (ES6)

class user
{
    constructor(id, name)
    {
        this.id = id;

        this.name = name;

    }

    getUser()
    {
        console.log(`ID : ${this.id} , NAME : ${this.name}`)
    }
}


class student extends user
{
    constructor(id, name, courseName)
    {
        super(id , name);

        this.courseName = courseName;

    }

    getStudent()
    {
        console.log(`ID : ${this.id}, NAME : ${this.name} , You have been Enrolled in ${this.courseName}`)
    }

} 

const userOne = new student(11, "asad", "JS")

// userOne.getStudent()

// userOne.getUser()



/*
    NOTE:

        const userTwo = new user(11, "asad", "JS") 
        
        userTwo.getStudent()

        Should cause error beacuse inheritence approach is bottom to up,
        not up to bottom

*/

