//logic on which if the any cell of the matrix is 0 then its respective column and row to be zero.

function RowColumnZero(arr: number[][]){
    let rowelement = new Array(3).fill(false);
    let columnelement = new Array(3).fill(false);
    // let newmatrix: number[][];

    //checking on the each of the cell contains zero value or not

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === 0){
                rowelement[i] = true;
                columnelement[j] =  true;
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(rowelement[i]){
            for(let j = 0; j < arr.length; j++){
                arr[i][j] = 0
            }
        }
    }

    for(let j = 0; j < arr.length; j++){
        if(columnelement[j]){
            for(let i = 0; i < arr.length; i++){
                arr[i][j] = 0;
            }
        }
    }

    return arr;
    
}

let matrix3dimension = [
    [1,2,3],
    [4,5,0],
    [7,8,9]
]

console.table(RowColumnZero(matrix3dimension));
