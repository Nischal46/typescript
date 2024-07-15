//Generics in typescript : used for the reusable of the code

function getArrayDetails<T>(items: T[]){
    return new Array<T>().concat(items)
}

let numArray = getArrayDetails<number>([12,34,54,65,77,87]);
console.log('The number array detail is ', numArray);

let stringArray = getArrayDetails<string>(['nischal', 'baniya']);
console.log('The string array detail is ', stringArray);

//Accepting multiple generics

function DisplayDetails<T, U>(name: T, contact: U){
    return {name, contact}
}

let displayDetails = DisplayDetails<string, number>('Nischal Baniya', 9832343223);
console.log(displayDetails);



interface jsonObject<T, U, V>{
    username: T,
    contact: U,
    isActive: V
}

let a1: jsonObject<string, number, boolean> = {username: 'nischal', contact: 9843345465, isActive: true};
console.log(a1);

