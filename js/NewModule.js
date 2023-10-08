export function earnMoney(){
    return "science";
};

export const growMoney=()=>{
    return "Maths";
};

export const giveMoney=()=>{
    return "English";
};

// export default earnMoney;
// export { growMoney , giveMoney };


//class example

export default class Subscriber{
    constructor(name){
        this._name=name;
    }
    emailme(){
        return `Hi I am ${this._name}, emailed to contact`;
    }
}