const mainNav=document.createElement('div')
mainNav.classList.add('main-nav')
const input=document.createElement('input')
input.classList.add('search-field')
input.setAttribute('type','text')
input.setAttribute('placeholder','Search here...')
mainNav.appendChild(input)

const functionBtn=document.createElement('div')
functionBtn.classList.add('function-btn')
const btn1=document.createElement('button')
btn1.classList.add('sort-1')
btn1.id='search'
btn1.innerHTML='Search'
functionBtn.appendChild(btn1)
const btn2=document.createElement('button')
btn2.classList.add('sort-1')
btn2.classList.add('clear')
btn2.id='clear-src'
btn2.innerHTML='clear search'
functionBtn.appendChild(btn2)

mainNav.appendChild(functionBtn)
nav.appendChild(mainNav)


btn1.addEventListener('click',(e)=>{
    if(input.value=='')return

    
    fetch(`https://dummyjson.com/products/search?q=${input.value}`).then(res=>res.json()).then(data=>{
        let m= data.products
        clearMainBox()
        loadCards(m)

    })

})

btn2.addEventListener('click',(e)=>{
    fetch('https://dummyjson.com/products?limit=15').then(res=>res.json()).then(data=>{
        let m=data.products
        clearMainBox()
        loadCards(m)


    })
    input.value=''

})