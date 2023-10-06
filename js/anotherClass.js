//Factory Function
function pizzaFactory(sizePizza){
    const crust='original';
    const size=sizePizza;
    return {
        bake:()=>console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza=pizzaFactory('small');
myPizza.bake();

class Pizza{
  
    constructor(sizePizza){
        this._size=sizePizza;   //_size is a private variable
        this._crust='original'; //_variablename denotes private variable
       
    }
    getCrust(){
        return this._crust;
    }
    setCrust(crustPizza){
        this._crust=crustPizza;
    } 
}