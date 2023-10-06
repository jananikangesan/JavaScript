// let email="abc@gmail.com";

// console.log(email.slice(0,email.indexOf("@")));

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("abcde@gmail.com"));

// function toProperCase(name){
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
// }

// const toProperCase = function (name){
//         return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
//     }

const toProperCase = (name) =>{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}

console.log(toProperCase("aPpLe oRangE"));


