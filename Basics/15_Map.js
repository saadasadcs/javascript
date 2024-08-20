// Maps

const map = new Map()

map.set('PAK', "Pakistan")

map.set('USA', "United States of America")

map.set('Fr', "France")

map.set('UK', "United Kingdom")


// console.log(map);


// for (const [key, value] of map) 
//     {
    
//         // console.log(key, ' --> ', value);

//     }




    

// const myObject = {
    
//     game1: 'NFS',

//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) 
    
//     {
    
//         console.log(key, ' ---> ', value);
//     }



/*
NOTE :

    In JavaScript, objects don’t have a direct iterable format that works with the
    
    for...of loop. To iterate over an object's properties, you should use Object.entries()
    
    to get an array of key-value pairs.
*/


const myObject1 = {

    game1: 'NFS',

    game2: 'Spiderman'
};

for (const [key, value] of Object.entries(myObject1)) 

    {
    
        console.log(key, ' ---> ', value);

    }
