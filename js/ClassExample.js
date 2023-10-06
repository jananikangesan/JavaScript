//classes

class Pizza{
    crust="original"; //public property
    #sauce="tomato";  //private property

    constructor(sizePizza){
        this.size=sizePizza;   
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustPizza){
        this.crust=crustPizza;
    } 
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }
}

const myPizza=new Pizza('small');
myPizza.bake();
console.log(myPizza.getCrust());
console.log(myPizza.crust);
