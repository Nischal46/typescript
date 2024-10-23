// difference between interface and alias in object

{

    //using type alias
    type Person = {
        name: string;
        email: string;

    }

    function greet(person: Person){
        return "Hello " + person.name; 
    }

    const result = greet({
        name: 'nischal',
        email: "baniyanisal12@gmail.com"
    })
    

    console.log(result);
    

    //using interface

    interface PersonInterface {
        name: string,
        email: string
    }

    function Details(person: PersonInterface){
        return "Hello " + person.name + ". Your email address is " + person.email;
    }

    const res = Details({
        name: 'nischal',
        email: "baniyanisal12@gmail.com"
    })

    console.log(res);
    

}