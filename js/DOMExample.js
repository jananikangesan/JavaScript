const view1=document.getElementById('view1');
console.log(view1);

const view2=document.querySelector('#view2');
console.log(view2);

view1.style.display='none';
view2.style.display='flex';
view2.style.flexDirection='row';
view2.style.flexWrap='wrap';
view2.style.margin='10px';
console.log(view2.lastElementChild);
view2.lastElementChild.remove();//remove element

const createDiv=(parent,iter)=>{
    const newDiv=document.createElement('div');//creating new elements.

    newDiv.textContent=iter;
    newDiv.style.width='100px';
    newDiv.style.height='100px';
    newDiv.style.margin='10px';
    newDiv.style.backgroundColor='yellow';
    newDiv.style.color='black';
    newDiv.style.display='flex';
    newDiv.style.justifyContent='center';
    newDiv.style.alignItems='center';
    view2.append(newDiv);
}
for(let i=1;i<=12;i++){
    createDiv(view2,i);
}



