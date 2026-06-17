// Base employee class
class Employee{
    constructor(name, department){
        this.name = name;
        this.department =  department;
    }

    //Describe method that returns string discription to console.
    describe(){
        return `The employee, ${this.name}, works in the ${this.department} department`;
    }
}