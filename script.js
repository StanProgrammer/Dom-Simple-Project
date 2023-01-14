// DOM=DOCUMENT OBJECT MODEL
//Whole html file is stored as object and this is called dom
//it is referrred as document
//document is object
// Accessing elements
// 1. getElementById 
//innerHtml returns only html content of element
// const a=document.getElementById('heading').innerHTML;
// document.getElementById(2).innerHTML='Atib'
// console.log(a)

//2. getElementsByTagName
// const b=document.getElementsByTagName('h1')
// const c=b[1].innerHTML
// console.log(b)

//3. getElementsByClassName
// const d=document.getElementsByClassName('div')
// document.getElementsByClassName('div').innerHTML='Atib'
// console.log(d)

//4. querSelector
// const a=document.querySelector('#heading')
// console.log(a)

//5.queryselectorAll


//Tranverse Dom
// const heading=document.querySelector('.heading');
// const parent=heading.parentNode;
// console.log(parent)

// const parent=document.querySelector('.parent')
// const child=parent.childNodes
// console.log(child)

// 3. nextElementSiblings
// const h11=document.querySelector('.heading');
// const h33=h11.nextElementSibling
// console.log(h33)
// console.log(h11.previousElementSibling)

// Manipulation 
// const heading=document.querySelector('.heading');

// // to change the text inside html 
// heading.innerHTML='My Name is Khan'

// // to change color 
// heading.style.color='yellow';

// // to change font 
// heading.style.fontSize='100px'

// // to add class
// heading.classList.add('title');

// // to remove class 
// heading.classList.remove('title');


//Create elements
// const heading=document.createElement('h1');
// // console.log(heading)
// heading.innerHTML='My name is Atib';
// heading.classList.add('h1');
// const parent=document.querySelector('.parent')
// parent.appendChild(heading)

// const subheading=document.createElement('h3');
// subheading.innerHTML='this is second heading';
// subheading.classList.add('sub');

// // to add before heading 
// // (pos,element to insert)
// heading.insertAdjacentElement('beforebegin',subheading)


// Dom Events 
// change
const button=document.querySelector('#btn');
const heading=document.querySelector('#heading');

//event is by default object created
button.addEventListener('click',function(event){
    heading.style.color='red';
    console.log('button clicked',event);
    
})







