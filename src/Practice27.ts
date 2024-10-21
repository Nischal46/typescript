{
    class Employee{
        constructor(public id: number, public name: string, public designation: string){
            this.id = id;
            this.name = name;
            this.designation = designation;
        }
    }

    const classEmployeeObject = new Employee(123, 'nischal banuiya', 'senior fullstack developer');


    //we can also pass array directly

    const classEmployeeObjects = [
        new Employee(234, 'jenish magar', 'senior designer'),
        new Employee(456, 'prashant chaudhary', 'support service')
    ]

    console.log(classEmployeeObjects);
    
}