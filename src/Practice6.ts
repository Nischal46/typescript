function DiagonalMatrix(arr: any[]): number{
    let firstdiagonalsum: number = 0;
    let seconddiagonalsum: number = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++){
        firstdiagonalsum += <number>arr[i][i];
        seconddiagonalsum += <number>arr[i][n-1-i]
    }

    return Math.abs(firstdiagonalsum - seconddiagonalsum)
}

let arrayMatrix = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]

const output = DiagonalMatrix(arrayMatrix);
console.log(output);
