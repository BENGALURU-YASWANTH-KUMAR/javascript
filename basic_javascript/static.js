//static =keyword that defines properties or methods that belong
// to a class itself rather tham the objects created from
// that class 9class owns anything static ,not the objects)

class StaticExample {
    static PI= 3.14; // Static property
    static getdiamerter(radius) {
        return 2 * radius; // Static method
    }
    static getcircumference(radius) {
        return 2 * this.PI * radius; // Static method using static property
    }
}
console.log(StaticExample.PI); // Outputs: 3.14
console.log(StaticExample.getdiamerter(5)); // Outputs: 10
console.log(StaticExample.getcircumference(5)); // Outputs: 31.400

class user{
    static usercount=0; // Static property to keep track of user countco
    constructor(username)
    {
        this.username=username;
        user.usercount++; // Increment user count when a new user is created
    }
}

const user1=new user("yaswanth");
const user2=new user("john");   
console.log(user.usercount); // Outputs: 2 (total number of users created)      
console.log(user1.username); // Outputs: yaswanth
console.log(user2.username); // Outputs: johnv