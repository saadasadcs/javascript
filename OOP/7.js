// TOPIC : static Method

/**
  NOTE :

    when you use the static keyword on a method then it accessible to that class only ,

    in this case :

     static getUser()
    {
        console.log(`ID : ${this.id} , NAME : ${this.name}`)
    }

    in the parent then it is not accessible to their child
 */

class user
{
    constructor(id, name)
    {
        this.id = id;

        this.name = name;

    }

    static getUser()
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

// userOne.getUser() // not accessible

userOne.getStudent()

