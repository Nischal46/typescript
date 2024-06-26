//variable with type inference

let personname: string = 'nischal';
const ageVerified: boolean = true;

//typescript provides us the type safety

interface Mobile {
    mobileBrand: string,
    manufactureNumber: string,
    manufactureYear: number
}

const mobileObject: Mobile = {
    mobileBrand: 'Oppo',
    manufactureNumber: 'XFDSFSD78568',
    manufactureYear: 2020
}

// console.log(mobileObject);

//array

// in js there is dynamic inserting of value in array but here there is static here we can onlu insert string in the array.
let studentArray: string[] = [];
studentArray.push('nischal');
studentArray.push('baniya');


// console.log('The array of the student are', studentArray);

// in the case of handling of the api request from db
//using interface
interface ApiRequest {
    status: string,
    statusNumber: number,
    data: GetRequest[]
}

interface GetRequest {
    username: string,
    useremail: string
}

const userdata: [ApiRequest] = [{
        status: 'success',
        statusNumber: 201,
        data: [
            {
                username: 'nischal',
                useremail: 'nisal@gmail.com'
            }

        ]
    }]

// console.log(userdata);


//using type aliases
//it is mostly used to handle the complex types such as objects and arrays

type acceptnumber = number
type acceptstring = string
type acceptarray = string[];

type handleAPIRequest = {
    name: acceptstring,
    age: acceptnumber,
    email: acceptstring,
    hobbies: acceptarray
}

const userdetails: handleAPIRequest = {
    name: 'nischal',
    age: 22,
    email: 'nischal@gmail.com',
    hobbies: ['singing', 'playing']
}

// console.log('using type aliases', userdetails);

//enum: it is used for the defining and unchangable value for the type safety

enum MobileConfiguration {
    registrationNumber = '3423SSFDF4',
    registrationYear = 2020
}

const mobiledetais = MobileConfiguration.registrationNumber;

console.log('Accessing enum value', mobiledetais);

//tuple: it is great because we can accept only the defined datatypes and length in array. datatypes can be different

let tupleArray : [number, string, boolean];
tupleArray = [1, 'user123', true];

// some real world projects related to enum and tuple

enum ROLES{
    ADMIM = 'admin',
    USER = 'user',
    GUESTS = 'guests'
}

const userDetails = [
    {
        id: 1,
        name: 'kshitiz',
        roles: 'user'
    },

    {
        id: 2,
        name: 'utsab',
        roles: 'user'
    },

    {
        id: 3,
        name: 'jems',
        roles: 'guests'
    },

    {
        id: 4,
        name: 'chill pill',
        roles: 'admin'
    }
]

interface userDetailsInference{
    id: number,
    name: string,
    roles: string
}

function handleUserRoles(role: string): unknown[]{
    let object: userDetailsInference[] = [];
    switch(role){
        case ROLES.ADMIM:
            object = userDetails.map((el, ind) => el)
            break;
        // case ROLES.USER:

        case ROLES.USER:
            object = userDetails.filter(el => el.roles === 'user')
            break;

        case ROLES.GUESTS:
            object = userDetails.filter(el => el.roles === 'guests')
            break;

        default:
            console.log('Invalid input command');
            break;      
    }
    return object;
}

// const userObject = handleUserRoles(ROLES.USER) as userDetailsInference[];
// console.log(userObject);

//type casting: it is a way to tell the transcript compiler to check value of specific types
interface APIResponse{
    id: number,
    username: string,
    useremail: string
}

const newfun = (id: number, username: string, useremail: string): unknown => {
    return {id, username, useremail}
}

// const fnCallObject = <APIResponse>newfun(1, 'nischal', 'nisal@gmail.com');
// console.log(fnCallObject);
 

//declaring generic types
function Greeting<T>(name: T): T{
    return name;
}

const obj = <string>Greeting('nischal');
console.log(obj);

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const logobj = loggingIdentity({ length: 10, value: "Hello" });
console.log(logobj);

