const myObj={
    name:"computer",
    content:['earn','grow','give'],
    sub:function(){
        console.log('Thanks for clicking bell icon');
    }
};

console.log(myObj);
myObj.sub();

const sendJson=JSON.stringify(myObj); //it convert object to json
console.log(sendJson);

const receiveJson=JSON.parse(sendJson); //it convert json to object
console.log(receiveJson);

 