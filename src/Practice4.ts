const bcrypting = require("bcryptjs");

let PasswordStoreDB: unknown;
async function PasswordEncrypter(pass: string): Promise<string> {
    const encryptPass = await bcrypting.hash(pass, 10);
    return encryptPass;
}

PasswordEncrypter('hello')
    .then((res) => {
        PasswordStoreDB = <string>res
        console.log(PasswordStoreDB);
        PasswordChecker('hello');
    })
    .catch((err) => console.log(err)
    )

async function PasswordChecker(pass: string) {

    const passChecker = await bcrypting.compare(pass, PasswordStoreDB);
    console.log(passChecker);

    if (passChecker) console.log('Password matched');
    else console.log('Password doesnot match');

}



