import mysql from 'mysql2/promise';
import input from 'readline-sync';

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practicingQuery'
})

let bool: boolean = true;

async function INSERTDOCUMENT() {
    const DBConnection = await dbPool.getConnection();

    if(DBConnection){
        console.log('Connected successfully Database');
    }
    else{
        console.log('Connection Failed Database');
        
    }

    try {
        const insertSQL = `INSERT INTO USERS (user_name, user_email, user_password, user_role) VALUES (?, ?, ?, ?)`;
        const insertValues = ['suresh', 'suresh@gmail.com', 'rootuser', 'guest' || 'active'];
        const [result] = await DBConnection.execute(insertSQL, insertValues);
        console.log('Successfully inserted documents', result);

    } catch (error) {
        console.log('Error while inserting document: ', error);
    }
    finally {
        DBConnection.release();
    }
}

(async() => {



        const choice: number = +input.question('Enter a choice: ');
        console.log('you have entered choice :', choice);
    
    
        if (choice === 1) {
    
            INSERTDOCUMENT()
        }
    
        else {
            console.log('Invalid choice');
    
        }
    

    
})()

