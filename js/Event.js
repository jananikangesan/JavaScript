const view=document.querySelector('#view2');
console.log(view);

const div=view.querySelector('div');
const h2=div.querySelector('h2');

//syntax
//addEventListeners(event.function,useCapture)

const doSomething =()=>{
    alert('doing Something');
};
//adding events
h2.addEventListener('click',doSomething,false);
//removing events
h2.removeEventListener('click',doSomething,false);

h2.addEventListener('click',(event)=>{
    console.log(event.target);
    event.target.textContent="hello";
});

// h2.addEventListener('click',function (event){
//     console.log(event.target);
//     event.target.textContent="hello";
// });

document.addEventListener(
    "readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("complete");
        }
    }
);

