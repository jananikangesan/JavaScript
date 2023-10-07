//Errors and Error Handling

'use strict'
//const variable='abc';  //reference error
//console.log(variable);

//variable="apple"; //type error

// const makeError=()=>{
//     try{
//         const name='apple';
//         name='orange';
//     }catch(err){
//         console.log(err);
//         console.error(err); //error is displayed in red color
//         console.warn(err); //error is displayed in yellow color
//         console.table(err); //error is displayed in table format
//         console.error(err.name);
//         console.error(err.stack);
//     }
// };

const makeError=()=>{
    try{
        throw new customError('This is a custom Error');
    }catch(err){
        
        console.error(err.stack);
    }finally{
        console.log('....finally');
    }
};

makeError();

function customError(message){
    this.message=message;
    this.name='customError';
    this.stack=`${this.name}:${this.message}`;
}

