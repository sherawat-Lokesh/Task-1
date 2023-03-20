
 function getCatogeries(){
    const allList=  document.querySelectorAll(`div input[name='catogery']`)

    allList.forEach(val=>{
        val.addEventListener('change',(e)=>{
            if(e.target.value !=='Clear All Catogries'){
                fetch(`https://dummyjson.com/products/category/${e.target.value}`).then(res=>res.json()).then(data=>{
                    let m=data.products
                    clearMainBox()
                    loadCards(m)
                })
            }else if(e.target.value =='Clear All Catogries'){
                    clearMainBox()
                    loadCards()
            }


        })
    })
}
