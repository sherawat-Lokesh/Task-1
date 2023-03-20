const sorting=document.createElement('section')
sorting.classList.add('sorting')
const ptag=document.createElement('p')
ptag.innerText='SORTING BY PRICE :'
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
                        let m = global.sort((a,b)=>a.price-b.price)
                        clearMainBox()
                        loadCards(m)
                        break;
            }
            case '1':{
                        let m = global.sort((a,b)=>b.price-a.price)
                        clearMainBox()
                        loadCards(m)
                        break;

            }
            case '2':{

                        let m = global.sort((a,b)=>b.rating-a.rating)
                        clearMainBox()
                        loadCards(m)
                            
                    break;
            }
        }
        
    })
    
});