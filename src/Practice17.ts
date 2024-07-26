//declaring the interface so that the api request willn follow this steps

interface APIRequest {
    status: number,
    data: {
        name: string,
        email: string,
        contact: number
    }
}

function RegisterUser(name: string, email: string, contact: number) : APIRequest{
    if(!name || !email || !contact){
        throw new Error('Invalid credentials. Please provide all of them');
    }

    return {
        status: 200,
        data: {
            name, email, contact
        }
    }
}

async function mainfn(){
    try {
        const registerUser = await RegisterUser('nischal', 'nischal@gmail.com', 9843434343);
        console.log(registerUser);
        
    } catch (error: any) {
        console.log('Error caught: ', error.message);
        
    }
}

mainfn();

abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); 
        this.empCode = code;
    }

    find(name:string): Person { 
       
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display();

let emp2: Person = emp.find('Steve');