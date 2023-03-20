//creating a new sectoin by variable name sorting
const sorting=document.createElement('section')
sorting.classList.add('sorting')

//creating p tag 
const ptag=document.createElement('p')
ptag.innerText='SORTING BY :'
sorting.appendChild(ptag);

//creating sorting buttons div
const sortBtns=document.createElement('div')
sortBtns.classList.add('sort-btn')
sorting.appendChild(sortBtns)

//running a for loop to  less than 3 for creating button and using switch case to setting is inner text or name of button
for(let i=0;i<3;i++){
    const btns=document.createElement('button')
    btns.classList.add('sort-1')
    switch(i){
        case 0:{
            btns.innerHTML='Price : Low to High'
            btns.id=i
            break;
        }
        case 1:{
            btns.innerHTML='Price : High to Low'
            btns.id=i
            break;
        }
        case 2:{
            btns.innerHTML='Rating : &nbsp;&nbsp;High to Low&nbsp;&nbsp;'
            btns.id=i
            break;
        }
    }
    sortBtns.appendChild(btns)

}
//appending it after the navbar section ends
nav.insertAdjacentElement('afterend',sorting)

//selecting buttons and adding eventListener to then 
//Then using switch case to check their id 
// ---->1. sorting By price low to high 
// ---->2. sorting by price high to low
// ---->3. sorting by ratings high to low

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