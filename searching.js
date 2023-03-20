
//creating mainNav div and appending it to navbar
const mainNav=document.createElement('div')
mainNav.classList.add('main-nav')

//creating search input element and setting its attributes and appending it to mainNav
const input=document.createElement('input')
input.classList.add('search-field')
input.setAttribute('type','text')
input.setAttribute('placeholder','Search here...')
mainNav.appendChild(input)

//creating a function button div that will hold 2 buttons 
const functionBtn=document.createElement('div')
functionBtn.classList.add('function-btn')


//Name ---->1. search
// search button will fetch a api request and load cards 
const btn1=document.createElement('button')
btn1.classList.add('sort-1')
btn1.id='search'
btn1.innerHTML='Search'
functionBtn.appendChild(btn1)


//Name ---->2. clearSearch
// clear search button will clear the input field and load cards again by step 1 api
const btn2=document.createElement('button')
btn2.classList.add('sort-1')
btn2.classList.add('clear')
btn2.id='clear-src'
btn2.innerHTML='clear search'
functionBtn.appendChild(btn2)

//appending functionBtn line no:14---> to mainNav
mainNav.appendChild(functionBtn)
nav.appendChild(mainNav)

//adding event listener to btn1 and checking if the input field value in empty of not
//if its not empty then making fetch request and clearing all the cards and sending new data
// to loadCards() function  
btn1.addEventListener('click',(e)=>{
    if(input.value=='')return

    
    fetch(`https://dummyjson.com/products/search?q=${input.value}`).then(res=>res.json()).then(data=>{
        let m= data.products
        clearMainBox()
        loadCards(m)

    })

})

//adding event listener to btn2 
// and empty input filed and load clear all the cards 
//then making fetch request and clearing all the cards and sending new data
// to loadCards() function  
btn2.addEventListener('click',(e)=>{
    fetch('https://dummyjson.com/products?limit=15').then(res=>res.json()).then(data=>{
        let m=data.products
        clearMainBox()
        loadCards(m)


    })
    input.value=''

})