//getters=special method that makes a property readable
//setters=special method that makes a property writable
//getters and setters are used to control access to an object's properties
//validate and modify a value when reading or writing a property


class rectangle
{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }

    set width(value)
    {
        if(value>0)
        {
            this._width=value; // Using _ to indicate a private property
        }
        else
        {
            console.log("Width must be positive");
        }
    }

    set height(value)
    {
        if(value>0)
        {
            this._height=value; // Using _ to indicate a private property
        }
        else
        {
            console.log("Width must be positive");
        }
    }

    get width()
    {
        return `${this._width.toFixed(1)}`;
// Accessing the private property
        //return this._width !== undefined ? `${this._width.toFixed(1)}` : "Invalid width";
    }
    get height()
    {
        return this._height;// Accessing the private property
    }
}

const rect=new rectangle(10,20);
console.log(rect.width); // width must be positive, so it won't change
rect.width=15; // Setting a valid width
console.log(rect.height); // Outputs: 20
console.log(rect.width); // Outputs: 15