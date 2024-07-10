//Read only 

class LicenseRegistration {
    readonly registrationNo: number;
    custmerName: string;
    private customerAddress: string;
    customerEmail: string;

    constructor(name: string, address: string, email: string) {
        this.registrationNo = Math.floor(Math.random() * 1233243);
        this.custmerName = name;
        this.customerAddress = address;
        this.customerEmail = email;
    }
}

// const user1 = new LicenseRegistration('Karun Karki', 'Dhapakhel', 'karun@gmail.com');
// console.log(user1);

//class and inheritence

class ApplyforCategory extends LicenseRegistration {

    category!: string;
    age!: number;

    constructor(name: string, address: string, email: string, category: string, age: number) {
        const response = ApplyforCategory.checkeligibility(age)
        if (response === "Eligible to apply") {
            super(name, email, address);
            this.category = category;
            this.age = age;
        }

        else {
            throw new Error("Dear customer you are not eligible for applying driving license")
        }
    }

    static checkeligibility(age: number): string {
        if (age > 18) {
            return 'Eligible to apply'
        }
        else return 'Not eligible to apply'
    }
}

try {
    const user1 = new ApplyforCategory('Karun Karki', 'Dhapakhel', 'karun@gmail.com', 'A', 19);
    console.log(user1);

} catch (error: any) {
    console.log(error.message);
}




