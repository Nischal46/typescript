// rest parameter in function

function restparameterconcept(...numbers: number[]){
    console.log(numbers);
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    console.log("Total is: ", total);
}

restparameterconcept(12, 32, 43,)