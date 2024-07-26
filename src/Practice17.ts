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