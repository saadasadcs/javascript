// TOPIC : INHERITENCE


// OLD SCHOOL SYNTAX

const User = {
    name: "SAAD",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,
   
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(Teacher.__proto__ = User)

//NEW SYNTAX

Object.setPrototypeOf(TeachingSupport , Teacher)
