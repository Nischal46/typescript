interface User {
    name: string;
    email: string;
    password: string;
}

class UserManagement {
    private users: User[] = [];

    async CreateUser(name: string, email: string, password: string): Promise<User> {
        const newUser: User = { name, email, password };
        this.users.push(newUser);
        return newUser;
    }

    async LoginUser(email: string, password: string): Promise<boolean> {
        const user = this.users.find(user => user.email === email && user.password === password);
        return user !== undefined;
    }

    async GetAllUser(): Promise<User[]> {
        return this.users;
    }

    async createDocument() {
        const user = await this.CreateUser('nischal', 'nishal@node.js', 'admin');
        console.log('User created:', user);
    }
}

// Example usage:
(async () => {
    const userManager = new UserManagement();
    await userManager.createDocument();
    const users = await userManager.GetAllUser();
    console.log('All users:', users);
    const isLoggedIn = await userManager.LoginUser('nishal@node.js', 'admin');
    console.log('Login successful:', isLoggedIn);
})();


async function getIPFunction(){
    try {
    
        const response = await fetch('https://api.ipify.org?format=json');
        // console.log(response.text());
    
        const data = await response.text();
        console.log(data);
        
        
    } catch (error) {
        console.log('Error caught ', error);
    }    
    }