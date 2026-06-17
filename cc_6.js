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
};

//Manager subclass of employee.
Manager extends Employee{
    constructor(name, department, teamSize){
        super(name, department);
        this.teamSize = teamSize;
    }

    //Overwriting describe method.
    describe(){
        return `The Manager,${this.name}, works in the ${this.department} on a team of ${this.teamSize}`
    }
};