//creating a getCatogeries function
function getCatogeries(){

    // --->1. it will get all the input radio buttons using querySelectorAll
    const allList=  document.querySelectorAll(`div input[name='catogery']`)
    
    //loopin over allList then adding event listener to them
    allList.forEach(val=>{
        val.addEventListener('change',(e)=>{
            //if e.target.value !== clear all catogries then make a fetch request by  category name
            //clear mainBox() and then send data to loadCards() function
            if(e.target.value !=='Clear All Catogries'){
                fetch(`https://dummyjson.com/products/category/${e.target.value}`).then(res=>res.json()).then(data=>{
                    let m=data.products
                    clearMainBox()
                    loadCards(m)


                })
            }
            //if [e.target.value == clear all catogries] then we simply
            //clear mainBox() and then call loadCards() function
            else if(e.target.value =='Clear All Catogries'){
                    clearMainBox()
                    loadCards()
            }


        })
    })
}
