const bcryptingpass = require('bcryptjs');
interface APIProductResponse {
    status: string,
    statusNumber: number,
    message: string,
    data: unknown[]
}

interface data {
    productName: string,
    productPrice: number,
    productColor: string[]
}


const products = [
    {
        productName: 'Monitor',
        productPrice: 12000,
        productColor: ['black', 'silver']
    },

    {
        ProductName: 'Mouse',
        productPrice: 1500,
        productColor: ['black', 'blue', 'white', 'red']
    },

    {
        productName: 'cooler',
        productPrice: 2500,
        prodeuctColor: ['black', 'white']
    }
]


function filteringProduct(productArray: unknown[]): {} {
    productArray.filter(cl => cl);
    const dummyData: APIProductResponse = {
        status: 'success',
        statusNumber: 200,
        message: 'Data fetched successfully',
        data: productArray
    }

    return dummyData
}

console.log(filteringProduct(products));

async function PasswordHashing(password: string): Promise<string> {
    const passhass = await bcryptingpass.hash(password, 10);
    return passhass;
}

const userDetails1 = {
    name: 'nischal baniya',
    email: 'nischal.baniya@gmail.com',
    password: '123456root'
}

async function RegisterUserData({ name, email, password }: { name: string, email: string, password: string }): Promise<string | any[]> {
    // const {name, email, password} = userDetails1;

    if (name === " " || email === " " || password === " ") {
        return "Please fill all the credentials";
    }
    
    else{

        const response = await PasswordHashing(password);
        console.log('Password has been hashed: ', response);
        
        
        if(!response){
            return "Error occured"
        }

        return [
            {
                status: 'success',
                message: 'user created successfully'
            }
        ]
    }
}

RegisterUserData(userDetails1).then((res) => console.log(res)
).catch((err) => console.log(err)
)


