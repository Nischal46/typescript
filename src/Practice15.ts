async function getIPFunction(){
try {

    const response = await fetch('https://api.ipify.org?format=json');
    // console.log(response.text());

    const data = await response.text();
    console.log(data);
    
    
} catch (error) {
    console.log('Error caught ', error);
}    
}

// getIPFunction();

// function DiagonalMatrix(arr: any[]): number{
//     let firstdiagonalsum: number = 0;
//     let seconddiagonalsum: number = 0;
//     let n = arr.length;

//     for(let i = 0; i < n; i++){
//         firstdiagonalsum += <number>arr[i][i];
//         seconddiagonalsum += <number>arr[i][n-1-i]
//     }

//     return Math.abs(firstdiagonalsum - seconddiagonalsum)
// }

// let arrayMatrix = [
//     [11,2,4],
//     [4,5,6],
//     [10,8,-12]
// ]

// const output = DiagonalMatrix(arrayMatrix);
// console.log(output);

// function plusMinus(arr: any) {
//     const n = arr.length;
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let zeroCount = 0;
    
//     // Count positive, negative, and zero values
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > 0) {
//             positiveCount++;
//         } else if (arr[i] < 0) {
//             negativeCount++;
//         } else {
//             zeroCount++;
//         }
//     }
    
//     // Calculate the ratios
//     const positiveRatio = positiveCount / n;
//     const negativeRatio = negativeCount / n;
//     const zeroRatio = zeroCount / n;
    
//     // Print the ratios to 6 decimal places
//     console.log(positiveRatio.toFixed(6));
//     console.log(negativeRatio.toFixed(6));
//     console.log(zeroRatio.toFixed(6));
// }

// Example usage:
// const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

