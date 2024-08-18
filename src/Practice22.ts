// generics

function Procedure<T, U>(input1: T, input2: U): string{
    return `User had type ${input1} and ${input2}`;
}

console.log(Procedure(2, 3));
console.log(Procedure('nischal', 'baniya'));

//REST Parameters

function RestParameterConcept(...args: number[]){
for (const x of args) {
    console.log(`You have entered ${x}`);
    
}
}

RestParameterConcept(12,54,65,33,21)

//alternate to generics we can also do function overloading

function FunctionOverloadingConcept(inp1: string, inp2: string): string;
function FunctionOverloadingConcept(inp1: number, inp2: number): number;

function FunctionOverloadingConcept(inp1: any, inp2: any): any{
    return `You have entered ${inp1} and its type ${typeof inp1} and ${inp2} and its type ${typeof inp2}`
}


console.log(FunctionOverloadingConcept(7, 10));

console.log(FunctionOverloadingConcept('hello', 'world'));
