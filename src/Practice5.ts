//generator function

import { log } from "console";

let colorRandom : string[] = ['red', 'green', 'blue', 'yellow', 'brown', 'gray']

function *GeneratorFunction(){
    yield colorRandom[Math.floor(Math.random() * colorRandom.length)];
}

// const loopingfunction = setInterval(()=>{
//     const colorGenerator = GeneratorFunction();
//     const nextcolor = colorGenerator.next().value;
//     console.log('Color found : ', nextcolor);
    
// }, 3000)

let customerDBRecord = [
    {
        id: 1,
        customerName: 'John',
        customerAccountNo: 15643,
        balance: 1232343,
        accPIN: 1233
    },

    {
        id: 2,
        customerName: 'Nischal Baniya',
        customerAccountNo: 12345,
        balance: 123243325345,
        accPIN: 1456
    }
]

class BankAccountDetails{
    public customerAccountName: string;
    private customerAccountNo: number;
    private customerAccountPIN: number;

    constructor(cusAccName: string, cusAccBalance: number, cusAccPin: number){
        this.customerAccountName = cusAccName;
        this.customerAccountNo = cusAccBalance;
        this.customerAccountPIN = cusAccPin;
    }

    static checkLogin(accno: number, pin: number){
        const response:any = customerDBRecord.find(cl => cl.customerAccountNo === accno && cl.accPIN === pin)
        
        response ? log('Log in successfull') : log('Invalid credentials');

        return new BankAccountDetails(response?.customerName, response?.balance, response?.accPIN)
    }

    getCustomerDetails(): void{
        console.log(`
            -----------------------Account Details-----------------------
            Account Name: ${this.customerAccountName}
            Account Balance: ${this.customerAccountNo}
            Account PIN: ${this.customerAccountPIN}
            `);
        
    }
}

// const classObject = new BankAccountDetails('Nischal Baniya', 123434545435, 1234);

// // classObject.customerAccountName = "Nirmala Baniya"
// classObject.customerAccountBalance = 234324324343244;
// log(classObject);
// classObject.getCustomerDetails();

const obj = BankAccountDetails.checkLogin(123457, 1456);
obj.getCustomerDetails();