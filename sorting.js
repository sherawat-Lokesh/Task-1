const sorting=document.createElement('section')
sorting.classList.add('sorting')
const ptag=document.createElement('p')
ptag.innerText='SORTING BY :'
sorting.appendChild(ptag);
const sortBtns=document.createElement('div')
sortBtns.classList.add('sort-btn')
sorting.appendChild(sortBtns)

for(let i=0;i<3;i++){
    const btns=document.createElement('button')
    btns.classList.add('sort-1')
    switch(i){
        case 0:{
            btns.innerHTML='Low to High'
            btns.id=i
            break;
        }
        case 1:{
            btns.innerHTML='High to Low'
            btns.id=i
            break;
        }
        case 2:{
            btns.innerHTML='&nbsp;&nbsp;By Rating&nbsp;&nbsp;'
            btns.id=i
            break;
        }
    }
    sortBtns.appendChild(btns)

}
nav.insertAdjacentElement('afterend',sorting)


Array.from(sortBtns.children).forEach(element => {
    element.addEventListener('click',(e)=>{
        switch (e.target.id){
            case '0':{
                    fetch('https://dummyjson.com/products?limit=15').then(res=>res.json()).then(data=>{
                                    let m = data.products.sort((a,b)=>a.price-b.price)
                                        loadCards(m)
                                        
            })
                    break;
            }
            case '1':{
                    fetch('https://dummyjson.com/products?limit=15').then(res=>res.json()).then(data=>{
                        let m = data.products.sort((a,b)=>b.price-a.price)
                            loadCards(m)
                            
            })
                    break;
            }
            case '2':{
                fetch('https://dummyjson.com/products?limit=15').then(res=>res.json()).then(data=>{
                        let m = data.products.sort((a,b)=>a.rating-b.rating)
                            loadCards(m)
                            
                            
            })
                    break;
            }
        }
        
    })
    
});