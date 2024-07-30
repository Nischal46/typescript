// for loop 

interface LoginInterface {
    name: string,
    email: string,
    contact: number,
    iseligible: boolean
}

let array: LoginInterface[] = [
    {
        name: 'nischal',
        email: 'baniyanisal@gmail.com',
        contact: 98736487473,
        iseligible: true
    }, 
    {
        name: 'bibek',
        email: 'bibek@gmail.com',
        contact: 9857655765,
        iseligible: true
    },
    {
        name: 'karun',
        email: 'karun@gmail.com',
        contact: 98567557545,
        iseligible: true
    }
]

//using traditional for loop

for(let i = 0; i < array.length; i++){
    console.log(`${i+1}) ${array[i].name}`); 
}

for (const it of array) {
    console.log(`Welcome ${it.name} and your email address is ${it.email}`);
}


class EmployeeRegistration implements LoginInterface {

    constructor(public name: string, public email: string, public contact: number, public iseligible: boolean){
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.iseligible = iseligible;
    }

    getdetails(): {}{
        return {
            empName: this.name,
            empEmail: this.email
        }
    }


}

const empobj = new EmployeeRegistration('niiischal', 'nisal@gmail.com', 9867567876, true);
console.log(empobj);

const fncallobj = empobj.getdetails()
console.log(fncallobj);

