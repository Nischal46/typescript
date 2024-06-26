//function overloading in ts

function OverloadingConcept(a:string, b:string): string;

function OverloadingConcept(a: number, b: number): number;

function OverloadingConcept(a: any, b:any): any {
    let result;
    if(typeof a === 'number' && typeof b === 'number'){
        result = a + b;
    }

    else{
        result = `You have entered ${a} and ${b}`;
    }
    return result;
}

// const stringadd = OverloadingConcept('hello', 'programmers');
// const numadd = OverloadingConcept(23, 43);

// console.log(stringadd, numadd);

//rest parameter concepts in fn

let usefulObject: string[] = ['mobile', 'laptop', 'earpod', 'bike'];

function RestParameterObject(greet: string, ...items: string[]){
    return greet + " " + items.join(", ") + "!";
}

const restParamObj = RestParameterObject('USeful items are', 'mobile', 'laptop', 'earpod', 'bike');
// console.log(restParamObj);

function RestParam2(greet:string, arr: string[]){
    return greet + " " + arr.join(", ") + "!";
}

const restParamObj2 = RestParam2('Hello', usefulObject);
// console.log(restParamObj2);

//type annotation

//type annotation of string variable
let video:string;
video = "mp4";
// video = "4k";
// console.log('type annotation of string variable', video);

//type annotation of object properties

let obj1 : {
    id: number,
    name: string
}

obj1 = {
    id: 1,
    name: 'nischal'
}

// console.log('type annotation of object properties', obj1);

//type assertion

// let number: number = 23;

let code = <string>'Typescript daily programming';
// console.log(code);

interface RegistrationObject{
    id: number,
    name: string,
    email: string,
    password: string
}

let userobj = <RegistrationObject>{
    id: 1,
    name: 'Nischal Baniya',
    email: 'nisal@gmail.com',
    password: 'abcdefgh'
};

// console.log(userobj);

//type inference
// it is analyzing of the typescript itself and checking of the types.

let randomArray = [12, 13, 23, 'a'];
randomArray.push(34);
randomArray.push('sds');
// randomArray.push(true);  // it gives error because ts analyzes with inference of the type
//it analyzes as the array is of union data types as number and string

//class

class APIResponse{
    // status: string;
    // statuscode: number;
    
    // constructor(ApiStatus: string, ApiStatusCode: number){
    //     this.status = ApiStatus;
    //     this.statuscode = ApiStatusCode;
    // }

    constructor(public status: string, protected statuscode: number){}
}

const classobj = new APIResponse('success', 200);
// console.log(classobj);

//usage of classes with private, protected and public modifiers

interface RegisterBankDetails{
    regno: string,
    cusName: string,
    cusBalance: number,
    pin: number
}

class BankAccount{
    public accNumber: string;
    public accHolderName: string;

    protected balance: number;
    private pin: number;
    
    constructor(regno: string, cusName: string, cusBalance: number, pin: number){
        this.accNumber = regno;
        this.accHolderName = cusName;
        this.balance = cusBalance;
        this.pin = pin;
    }

    public greetings(): void{
        console.log(`
            ***************ABC Bank********************
            Welcome for new customer
            Account Details
            Account Holder Name: ${this.accHolderName}:
            Account Number: ${this.accNumber}:
            Account Balance: ${this.balance}:
            Account PIN: ${this.pin}:
        `);   
    }

    private withdrawBehindConcept(amount: number): undefined{
        let result: any;
        if(amount > this.balance) result = 'unsifficent amount';
        else result = this.balance - amount;

        return result;
    }

    public withdrawMoney(withdrawamount: number): string{
        let responseToCustomer: string = "";
        let requestToWithdrawFn = this.withdrawBehindConcept(withdrawamount);
        
        if(typeof requestToWithdrawFn === "string"){
            responseToCustomer = "Insufficent money to withdraw from your account"
        }

        else if(typeof requestToWithdrawFn === "number"){
            responseToCustomer = `
            You account has been credited by ${withdrawamount}.
            Current Account Amount: ${requestToWithdrawFn}.
            `
        }

        return responseToCustomer;
    }

}

const bankObj = new BankAccount('123WERSDFDSF21321', 'Nischal Baniya', 25000, 4323);
bankObj.greetings();
console.log(bankObj.withdrawMoney(21000));








