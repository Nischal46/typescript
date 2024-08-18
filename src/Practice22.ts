// generics

function Procedure<T, U>(input1: T, input2: U): string{
    return `User had type ${input1} and ${input2}`;
}

console.log(Procedure(2, 3));
console.log(Procedure('nischal', 'baniya'));

