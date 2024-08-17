const sapId = 3214

/*

NOTES:

Cannot be re-declared in the same scope and cannot be updadted

i.e 
    sapId = 1522 // not allowed



*/


let studentEmail = "cs021@js.com"

let student_Course_Name;


// NOTES: LET --> Cannot be re-declared in the same scope. But can be updated


studentEmail = "js@cs.com"

studentPassword = "21212121"

studentCity = "KARACHI"


var studentPassword = "12345"

studentCity = "LHR" //  By default take it as var 

/*

NOTES:

    Can be re-declared in the same scope.

    Prefer not to use var, because of issue in block scope and functional scope


*/



console.table([sapId, studentEmail, studentPassword, studentCity, student_Course_Name])