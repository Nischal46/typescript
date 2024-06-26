// type inference

let language: string = 'typescript'; //explicit type of defining variable

let experience: number = 12;

const isVerified: boolean = true;

let firstname = 'Bob'
firstname = 'john'

let anything:any = 'special';
anything = 34;
anything = true;
anything = 'congratulations'

// array

let numberArray: any[] = [];

numberArray.push('nischal');
numberArray.push(3)

console.log(numberArray);

//object

let object: any = {}

object.stname = 'nischal';
object.stage  = 24;

console.log(object);

//there are special types in typescript and they are any, unknown, never, null and undefined
// let notassignable: never = 'true';

//any refuses to check the type safety and acts similar as the js code
//whereas unknown acts similar as any but it is much safer
//nerver is rarely used and in some cases in generics

let yvalue: undefined | string = undefined;
console.log('initial value of y: ', yvalue);


yvalue = 'valuechanged';
console.log('later value of y: ', yvalue);

yvalue = undefined;
console.log('final value of y: ', yvalue);

let objectcopy: unknown = {};

//repititve type assertion

(objectcopy as {details: string}).details = 'pdf';
(objectcopy as {storage: string | number}).storage = 120;

console.log(objectcopy);

//we can also make type assertion more reuse

type details = {
    name: string,
    grade: number,
    email: string
}


let stobject: unknown = {};

(stobject as {name: string}).name = 'nischal';
(stobject as {grade: number}).grade = 16;
(stobject as {email: string}).email = "nisal@gmail.com",
(stobject as {name2: string}).name2 = 'ravy';


console.log(stobject);






