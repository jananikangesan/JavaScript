document.addEventListener(
    "readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("complete");
            initApp();
        }
    }
);

const initApp=()=>{
    const view=document.querySelector('#view2'); 
    const div=view.querySelector('div');
    const h2=div.querySelector('h2');
/*** 
    view.addEventListener('click',(event)=>{
        //view.style.backgroundColor='purple';
        event.target.style.backgroundColor='purple';
   // },true); //when put true changes have been done from outside to inside
    });***/

    view.addEventListener('click',(event)=>{
       
        // view.classList.add('purple');
        // view.classList.remove('darkblue');
        view.classList.toggle('purple');
        view.classList.toggle('darkblue');
  
    });


    div.addEventListener('click',(event)=>{
        //div.style.backgroundColor='blue';
        // event.target.style.backdgroundColor='blue';
        
        div.classList.toggle('black');
        div.classList.toggle('green');
    });

    h2.addEventListener('click',(event)=>{
       // event.stopPropagation();
       // event.target.textContent='Hello World';
       const myText=event.target.textContent;
       myText==='subscribe'?(event.target.textContent='Hello World'):(event.target.textContent='subscribe');
    });

   /* const nav=document.querySelector('nav');

    nav.addEventListener('mouseover',(event)=>{
        event.target.classList.add('height100');
    });
    nav.addEventListener('mouseover',(event)=>{
        event.target.classList.remove('height100');
    });*/

};