import input from "readline-sync";
const bcrypt = require('bcryptjs');

let arrRecord = [];
let bool:boolean = true;

function AppManual(): void{
    console.log(`
        ----------------Travel App-----------------
        1) Registration
        2) Login
        3) Update password
    `)
}


async function PasswordEncypter(password: string) {
    const response = await bcrypt.hash(password, 10);
    return response;
}

while(bool){
    AppManual();

    const userchoice: number = +(input.question('Enter choice: '));

    switch(userchoice){
        case 1:
            const name: string = input.question("Enter user name");
            const pass: string = input.question("Enter user pass");

            if(name !== "" && pass !== ""){
               const username: string = name;
               let userpass: any;
               PasswordEncypter(pass)
               .then((res) => console.log(res)
               
               )
               .catch((err) => console.log(err)
               )
              if(userpass !== "" || userpass !== undefined){
                console.log('Registered successfully');
                arrRecord.push({username, userpass});
              }
            }
            console.log(arrRecord);

            break;

        // case 2:
        //     const uname: string = input.question("Enter user name");
        //     const upass: string = input.question("Enter user pass"); 

        
        
        }
}