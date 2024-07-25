let stAray = [
    {
        id: 1,
        name: 'nischal baniya',
        email: 'nischal@gmail.com'
    },

    {
        id: 2,
        name: 'bibek baniya',
        email: 'bibek@gmail.com'
    }
]

function addUser(no: number, name: string, email: string){
    stAray.push({
        id: no,
        name: name,
        email
    })

    return stAray;
}

class DBMYSQL {
    constructor(){}

    async registerUser(no: number, name: string, email: string){
        const data = await addUser(no, name, email);
        console.log('User Added successfully');
        
        return data;
    }
}

const addobj = new DBMYSQL().registerUser(3,'newuser', 'newusere@gmail.com').then(res => console.log(res)
).catch(err => console.log(err)
)
