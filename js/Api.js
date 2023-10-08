//Web Storage API

document.addEventListener(
    "readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("complete");
            initApp();
        }
    }
);

const initApp=()=>{
    const myContent=['earn','grow','give'];
    const myObject={
        name:'abc',
        myContent:['earn','grow','give'],
        logName:function(){
            console.log(this.name);
        }

    };
        //can change it to localStorage. sessionstroge is better than localstorage.
    window.sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
    const key=sessionStorage.key(1);
    console.log(key);
    const mySessionData=JSON.parse(sessionStorage.getItem('mySessionStore'));
    console.log(mySessionData);
};