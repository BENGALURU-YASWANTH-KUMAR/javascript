// class =(ES6) is a feature provides a more structured and cleaner way to
///    work with objects compared to traditional constructor functions
// ex,static keyword,encapsulation,inheritance,polymorphism


class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayInfo(){
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }

    calculatetotal(saletax){
        return this.price+(this.price*saletax);
    }
}

const laptop=new product("Laptop", 1200);
laptop.displayInfo(); // Outputs: Product Name: Laptop, Price: $1200

console.log(`Total Price with Tax: $${laptop.calculatetotal(0.1)}`); // Outputs: Total Price with Tax: $1320