// printing the multiple table of even number only

for(let i = 1; i<=10; i++){
    if(i%2 == 0){
        console.log(`3 * ${i} = ${3*i}`);
    }
}

function Process1(inp1: string, inp2: string): string;
function Process1(inp1: number, inp2: number): number;

function Process1(inp1: any, inp2: any): any{
    let sum = inp1 + inp2;
    return sum;
}


console.log(Process1(3,4));
console.log(Process1('Nischal', 'Baniya'));

