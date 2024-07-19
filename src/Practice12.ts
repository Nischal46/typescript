//create a class constructor and fetch 

class UserCreation {
    public username: string;
    public useremail: string;
    public userContact: number;
    public userPassword: string

    constructor(name: string, email: string, contact: number, password: string) {
        this.username = name;
        this.useremail = email;
        this.userContact = contact;
        this.userPassword = password
    }


    createUser() {

        try {
            if (this.username !== " " || this.useremail !== " " || this.userContact !== null || this.userPassword !== " ") {
                if (!this.useremail.includes('@') || !this.useremail.includes('.')) {
                    throw new Error('Invalid email')
                }
                else console.log('User created successfully');
                
            }

            else {
                throw new Error('error occured in creating user')


            }
        } catch (error: unknown) {
            if(error instanceof Error){
                console.log('Error Caught: ', error.message);
            }

            else{
                console.log('Error Caught: ', error);   
            }

        }
    }
}

const newObjectCreate = new UserCreation('nischal', 'nischal@gmailcom', 982333333333, 'root000000000000').createUser();
// console.log(newObjectCreate);
