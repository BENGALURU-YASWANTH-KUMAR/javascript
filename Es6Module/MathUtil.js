//ES6 Module =An external that contains reusable code
 // that can be imported into other javascript files.
 // write reusable code for many different apps
 // can consain variables, classes,functions.. and more
 // introduced as part of ECMASCRIPT  2015 update


 export const pi=3.14159;
 
export function getCircumference(radius){
    return 2*pi*radius;
 }

export function getArea(radius)
 {
    return pi*radius*radius;
 }
 export function getVolume(radius)
 {
    return 4*pi*radius*radius;
 }