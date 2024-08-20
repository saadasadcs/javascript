/*
    REDUCE METHOD

*/



const myNums = [1, 2, 3]

const myTotal = myNums
                
                .reduce(function (acc, currval) 
                
                {
    
                    console.log(`acc: ${acc} and currval: ${currval}`);
        
                    return acc + currval
                }
                
                , 0)


/*
NOTE :

    Detailed Execution

    First Iteration:

        acc = 0 (initial value)

        currval = 1 (first element of the array)

        Output: acc: 0 and currval: 1

        acc + currval = 0 + 1 = 1

        acc is updated to 1

        
    Second Iteration:


        acc = 1 (result from the first iteration)
    
        currval = 2 (second element of the array)

        Output: acc: 1 and currval: 2

        acc + currval = 1 + 2 = 3

        acc is updated to 3


    
    Third Iteration:

        acc = 3 (result from the second iteration)

        currval = 3 (third element of the array)

        Output: acc: 3 and currval: 3

        acc + currval = 3 + 3 = 6

        acc is updated to 6

      
    Final Result
        
        The reduce method returns the final value of acc after processing
        
        all elements of the array. In this case, myTotal will be 6.

*/