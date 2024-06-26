//typescript annotation
// it is to specify the types of the variables. Example are
let item: string = 'watch'; //string variable
let exerciseRepitition: number = 12; //number variable
let isUserVerified: boolean = true; //boolean variable

//similary in the function parameter also
function UserDetails(name: string){}

//declaring type annotation in object
let object1 : {
    id: number,
    item: string,
    price: number
}

object1 = {
    id: 1,
    item: 'earpod',
    price: 2500
}

//type inference:-> it checks automatically the types of the variable
let objName = "Typescript";

//typescript variables

//var is a variable which can be redeclared as it behaves global scopes and it repeats redundency
var num = 12;
var num = 34;

//let is a variable which is a block scope that cannot be redeclare
let word = "tetris";
// let word = "challenging"; //it gives error by compiler
word = "challenging"; //but it is mutable. value can be changed

//const const is a variable which is block scope which can neither be redeclare nor mutable

const difficulties = "extreme";
// difficulties = "easy"; //cannot reassign value as it is constant

//typescript data types

//string
//split()

let numtoString = 'one, two, three, four, five';
console.log(numtoString.split(', '));

// replace()
let programmer = 'Hello Programmers'
console.log(programmer.replace('Programmers', "TYpescript Programmers"));
console.log(programmer.replace(/Hello/gi, "Hello All"));

//type assertion:-> it is used to denote type by using <>

let number = <number>3;

interface JSONResponse {
    status: string,
    data: any[],
    message: string
}

let jsonObject = <JSONResponse>{
    status: 'success',
    data: [
        {
            id: 1,
            username: "nischal",
            useremail: "nisal@gmail.com"
        }
    ],
    message: "fetched data successfully"
};

console.log('Type assertion in object', jsonObject);

function FSONFn(status: string, data: any[], message: string): JSONResponse{
return {status, data, message}
}

const fncall = FSONFn('success', ['js', 'ts'], 'successfull');
console.log(fncall);

//generics

function getArray<T>(items: T[]){
    return `Items passed from fn call are: ${items.join(', ')} !`;
}

const st1Array = getArray(['book', 'copy']);
console.log(st1Array);

const st2array = getArray([12, 43, 54]);
console.log(st2array);

//multi type variable in generics in fn

function MultiTypeGenerics<T, U>(name: T, contact: U): [T, U]{
    return [name, contact]
}

const callfn = MultiTypeGenerics<string, number>('nischal', 123);
console.log(callfn);










