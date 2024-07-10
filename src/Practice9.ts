//Read only 

class LicenseRegistration{
    readonly registrationNo: number;
    custmerName: string;
    private customerAddress: string;
    customerEmail: string;

    constructor(name: string, address: string, email: string){
        this.registrationNo = Math.floor(Math.random() * 1233243);
        this.custmerName = name;
        this.customerAddress = address;
        this.customerEmail = email;
    }
}

const user1 = new LicenseRegistration('Karun Karki', 'Dhapakhel', 'karun@gmail.com');
console.log(user1);




