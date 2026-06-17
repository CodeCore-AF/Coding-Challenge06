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
class Manager extends Employee{
    constructor(name, department, teamSize){
        super(name, department);
        this.teamSize = teamSize;
    }

    //Overwriting describe method.
    describe(){
        return `The Manager, ${this.name}, works in the ${this.department} on a team of ${this.teamSize}`
    }
};

//sample employee instances
const emp1 = new Employee("Jack Black", "Public Relations")
const emp2 = new Employee("Sarah Goodwill", "Engineering")
const emp3 =  new Manager("Mary Hall", "Operations", 8)

//new Company Class.
class Company{
    constructor(){
        //Empty array
        this.employees = [];
    }
    //method ot add employees to array
    addEmployee(emp){
        this.employees.push(emp);
    }
    //method to list each employees descriptions
    listEmployees(){
        for (let individual of this.employees) {
    
            console.log(individual.describe());
        }
    }
}

//sample company instance
const BandL = new Company();
BandL.addEmployee(emp1);
BandL.addEmployee(emp2);
BandL.addEmployee(emp3);

BandL.listEmployees()