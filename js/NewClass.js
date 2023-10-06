class Pizza{
  
    constructor(sizePizza){
        this.size=sizePizza;
        this.crust='original';
       
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustPizza){
        this.crust=crustPizza;
    } 
}

class specialPizza extends Pizza{
    constructor(sizePizza){
        super(sizePizza);
        this.type='Margarita';
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`)
    }
}

const myspecialPizza=new specialPizza('medium');
myspecialPizza.slice();