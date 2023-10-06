//objects

const myPizza={
    size:'medium',
    crust:'original',
    bake:function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza.bake();

//classes
class Pizza{
  
    constructor(typePizza,crustPizza,sizePizza){
        this.size=sizePizza;
        this.crust=crustPizza;
        this.type=typePizza;
        this.toppings=[];
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(toppingsPizza){
        this.toppings.push(toppingsPizza);
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
    }
}

const anotherPizza=new Pizza("margarita","original",'medium');
anotherPizza.setToppings("sausage");
anotherPizza.setToppings("eggs");
console.log(anotherPizza.getToppings());
anotherPizza.bake();


