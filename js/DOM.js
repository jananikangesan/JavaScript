// DOM --> Document Object Model

const view1=document.getElementById('view1');
console.log(view1);

const view2=document.querySelector('#view2');
console.log(view2);

//view1.style.display='none';  //hiding view1 section

//view2.style.display='flex';

const views=document.getElementsByClassName('view');
console.log(views);

const sameViews=document.querySelectorAll('.view');
console.log(sameViews);

const divs=view1.querySelectorAll('div');//select div from view1 section. which mean we have already select particular section in view1 and stored it in variable view1. after that we select div from selected view1 section. 
console.log(divs);

const sameDivs=view1.getElementsByTagName('div');// selecting the <div> from selected view1 section
console.log(sameDivs);

const evenDivs=view1.querySelectorAll('div:nth-of-type(2n)');
console.log(evenDivs);

evenDivs[4].style.backgroundColor='purple';

for(let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.width='150px';
    evenDivs[i].style.backgroundColor='green';
}

const navText=document.querySelector('nav h1');
console.log(navText);
navText.textContent='Hello World!';  //textContent--> replace the text by another text

const navBar=document.querySelector("nav");
navBar.innerHTML='<h1>Computer</h1> <p> Subscribe ! click bell icon </p>'
console.log(navBar);

navBar.style.justifyContent="space-evenly";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);console.log(evenDivs[0].previousSibling.previousSibling);

