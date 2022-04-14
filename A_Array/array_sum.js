function arraySum(nbr) {
    let number = 0;
    for (let i = 0; i < nbr.length; i++) {
        number += nbr[i];
    }
    return number;
}
 console.log(arraySum([6,2,3]));
 console.log(arraySum([7,6,-5,2]));
 console.log(arraySum([8]));
 console.log(arraySum([]));