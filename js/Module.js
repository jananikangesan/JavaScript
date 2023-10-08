//Module

//method 1 importing functions
import {earnMoney} from "./NewModule.js";
import {growMoney as grow , giveMoney as give} from "./NewModule.js";

console.log(earnMoney());
console.log(give());
console.log(grow());

//method 2
import * as ab from "./NewModule.js";

console.log(ab.earnMoney());  //in function should remove default;
console.log(ab.giveMoney());
console.log(ab.growMoney());

//class method
import Subscriber from "./NewModule.js";

const me=new Subscriber("abc");

console.log(me.emailme());

//higher order function

import {posts} from './ModuleExample.js';

posts.forEach((post)=>{
    console.log(post);
});

console.clear(); //clear the console
const filteredPosts =posts.filter((post)=>{
    return post.userId===2;
});
console.log(filteredPosts);

const mappedPosts=filteredPosts.map((post)=>{
    return post.id;
});
console.log(mappedPosts);


