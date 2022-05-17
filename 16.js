// console.log("working...");

// const StudentPrototype = {

//        calcAge(){   
//         console.log(2022 - this.bYear);
//     },
//     initialise(fname, lname, bYear){
//         this.fname = fname;
//         this.lname = lname;
//         this.bYear = bYear;
//     }
// }
// const honey = Object.create(StudentPrototype);
// console.log(honey)
// honey.initialise = ("honey","tambi",1999);
// honey.lname =("honey");
// honey.calcAge();

// const PersonPrototype= Object.create(StudentPrototype);
// console.log(PersonPrototype);

// PersonPrototype.initialise = function(fname,lname,byear,course){
//     StudentPrototype.initialise.call(this,fname,lname,byear);
//     this.course = course;
// }
// PersonPrototype.initialise = function(){
//     console.log(`my name ${this.fname}${this.lname} and my course is ${this.course}`);
// }

// const jay = Object.create(PersonPrototype);
// console.log(jay);
// jay.initialise("Jay","Dubey",1986,"CSE");
// console.log(jay);
// jay.calcAge();
// jay.introduce();

// console.log(jay.__proto__);
// console.log(jay.__proto__.__proto__);

//closures - closure is not something that we create manually, or explicit . it happens automatically in certain situations whiich we need to recognize.
//closures makes a function rember all the varibles that existed at the function birthplace initally.
//any function always has access to the variable environment of the execution context in which the function was created.

const ticketBoking = function(){
    let passengerCount = 0;

    return function (){
        passengerCount++;
        console.log(`the passenger Count is ${passengerCount}`);
    };
};

const bookie = ticketBoking();
// console.log(bookie);
bookie();
bookie();
bookie();
