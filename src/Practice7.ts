
function RowColumnZero(arr: number[][]): number[][]{
    let rowZero = new Array(3).fill(false);
    let columnZero = new Array(3).fill(false);

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === 0){
                rowZero[i] = true;
                columnZero[j] = true
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(rowZero[i]){
            for (let j = 0; j < arr.length; j++){
                arr[i][j] = 0;
            }
        }
        
    }

    for(let j = 0; j < arr.length; j++){
        if(columnZero[j]){
            for (let i = 0; i < arr.length; i++){
                arr[i][j] = 0;
            }
        }    
    }

    return arr
}

let matrix3by3: number[][] = [
[1, 1, 1],
[1, 1, 1],
[1, 1, 0]
];

console.table(RowColumnZero(matrix3by3));

