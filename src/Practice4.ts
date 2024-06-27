const bcrypting = require("bcryptjs");
const jwt = require('jsonwebtoken');

let PasswordStoreDB: unknown;
async function PasswordEncrypter(pass: string): Promise<string> {
    const encryptPass = await bcrypting.hash(pass, 10);
    return encryptPass;
}

// PasswordEncrypter('hello')
//     .then((res) => {
//         PasswordStoreDB = <string>res
//         console.log(PasswordStoreDB);
//         PasswordChecker('hello');
//     })
//     .catch((err) => console.log(err)
//     )

async function PasswordChecker(pass: string) {

    const passChecker = await bcrypting.compare(pass, PasswordStoreDB);
    console.log(passChecker);

    if (passChecker) console.log('Password matched');
    else console.log('Password doesnot match');

}

let secretjwt = '3423dsfdsfs'
let token: unknown;

function JWTProvider(payload: string) : string{
    token = <string>jwt.sign({payload}, secretjwt, {expiresIn: '1h'});
    console.log(token);
    
    return <string>token;
}

function verifyToken(): void{
    let jwtcheckin: unknown;
    try {
        jwtcheckin = <boolean>jwt.verify(token, secretjwt);
        console.log('jwt successfully verified');
    } catch (error) {
        console.log(error);
        console.log('failed to verify jwt token');
    }
}

JWTProvider('jwtsender');
verifyToken();






