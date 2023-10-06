//objects
//key-value pairs in curly braces

//example:1
const anotherObj={
    subscriber:true,
    no:10000,
    content:{
        earn:"JS",
        grow:"Stocks"
    },
    subdivisions:["Earn","Grow","Give"],
    action:function(){
        return `Earn by learning ${this.content.earn}`;
    }
};

console.log(anotherObj.no);
console.log(anotherObj.content);
console.log(anotherObj.content.earn);
console.log(anotherObj.subdivisions);
console.log(anotherObj["subscriber"]);
console.log(anotherObj.action());

//example:2

const vehicle ={
    door:2,
    engine:function(){
        return "aaaaaaaa";
    }
};

console.log(vehicle.engine());

const car=Object.create(vehicle); //car inherits vehicle
car.wheels=4;

console.log(car.engine());
console.log(car.wheels);

//override
car.engine=function(){
    return "bbbbbbb";
}

console.log(car.engine());

const tesla=Object.create(car);//tesla inherits car
console.log(tesla.door);

console.log(tesla.engine());