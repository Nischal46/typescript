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

async function UPDATEDOCUMENT(){

    const DBConnection = await dbPool.getConnection();

    try {
        const updateSQL = `UPDATE USERS SET user_role = ? WHERE user_name = ?`;
        const insertValues = ['admin', 'nischal'];
        const [result] = await DBConnection.execute(updateSQL, insertValues);
        console.log('Successfully updated documents', result);
        
    } catch (error) {
        console.log('Error while updating documents', error);
        
    }
    finally{
        DBConnection.release();
    }
}

async function DELETEDOCUMENTS(){
    const DBConnection = await dbPool.getConnection();

    try {
        const deleteSQL = `DELETE FROM USERS WHERE user_role = ?`;
        const deleteValues = ['guest'];
        const [result] = await DBConnection.execute(deleteSQL, deleteValues);
        console.log('Successfully delete documents', result);
        
    } catch (error) {
        console.log('Error while deleting documents', error);
        
    }
    finally{
        DBConnection.release();
    }

}

async function GETALLDOCUMENTS(){
    const DBConnection = await dbPool.getConnection();

    try {
        const getSQL = `SELECT * FROM USERS`;
        const result = await DBConnection.execute(getSQL);
        console.log('Successfully get documents', result[0]);
        
    } catch (error) {
        console.log('Error while get documents', error);
        
    }
    finally{
        DBConnection.release();
    }
}

(async() => {



        const choice: number = +input.question('Enter a choice: ');
        console.log('you have entered choice :', choice);
    
    
        if (choice === 1) {
    
            INSERTDOCUMENT();
        }

        else if(choice === 2){
            UPDATEDOCUMENT();
        }

        else if(choice === 3){
            DELETEDOCUMENTS();
        }

        else if(choice === 4){
            GETALLDOCUMENTS()
        }
    
        else {
            console.log('Invalid choice');
    
        }
    

    
})()

