//concept of the interface in typescript

interface objectSchema {
    product: string,
    productcolor: string,
    available: boolean
}

const objectavailable: objectSchema = {
    product: 'Laptop',
    productcolor: 'black',
    available: true
}

console.log(objectavailable);

//we can use this interface in regards of the class also

class classobjectProduct{
    constructor(public product: string, public productcolor: string, public available: boolean){
        this.product = product;
        this.productcolor = productcolor;
        this.available = available
    }
} 

const classconstructorcall: objectSchema = new classobjectProduct('mobile', 'white', false);
console.log(classconstructorcall);

