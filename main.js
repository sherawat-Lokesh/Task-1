'use strict'
const body=document.querySelector('body');
//its a variable for sorting all the fetched data will be stored in this array and when sorting button clicked then they
// sort data based on this global variable
let global =[]
//creating a navbar section for search functionality
const nav=document.createElement('nav')
body.appendChild(nav)

//creating mainContainer div for catogries and cards  loading
const mainContainer=document.createElement('div')
mainContainer.classList.add('main-container')
body.appendChild(mainContainer)

//creating catogery div  and appending it to mainContainer (inside this dive all catogries will be appended)
const catogryDiv=document.createElement('div')
catogryDiv.classList.add('catogries')


// here is the function for creating radio button catogries 
// 1. creating a div
// 2. creating input radio button and setting its attributes and appeding it to div
// 3. creating a label to show text of radio buttons and also appending it to div
function loadRadioInput(data){
    const catogriesP=document.createElement('div')
    const clearCatogries=document.createElement('input')
            clearCatogries.setAttribute('type','radio')
            clearCatogries.setAttribute('name',`catogery`)
            clearCatogries.setAttribute('value',`${data}`)
            clearCatogries.classList.add('catg')
            catogriesP.insertAdjacentElement('beforeend',clearCatogries)
    const catogriesPLable=document.createElement('label')
            catogriesPLable.innerHTML=`${data}`
            catogriesP.appendChild(catogriesPLable)
            catogryDiv.appendChild(catogriesP)

    }loadRadioInput('Clear All Catogries')

//this function fetch categories and then append all of then to above catogeryDiv variable
async function loadCatogries(){
    const response= await fetch(`https://dummyjson.com/products/categories`)
    const resp= await response.json()
    resp.forEach(val=>{
        loadRadioInput(val)
    })
    getCatogeries()
}loadCatogries()

// line no.:16----> categoryDiv variable appending it to mainContainer
mainContainer.insertAdjacentElement('afterbegin',catogryDiv)




// Now containerDiv section starts from here it will have all the cards inside it
const containerDiv= document.createElement('div');
containerDiv.classList.add('container')
mainContainer.appendChild(containerDiv)

//mainBox is the parent of all cards (all cards lies inside it) 
const mainBox= document.createElement('div')
mainBox.classList.add('main-box')
containerDiv.appendChild(mainBox)

// it's  a function to clear Html inside mainbox to load another card coming from api
function clearMainBox(){
    mainBox.innerHTML=''
}
//this function has data argument it will recieve array when sorting button clied or searching by category
async function loadCards(data){

    const response=await fetch('https://dummyjson.com/products?limit=15');
    const resp= await response.json();
    let res=resp.products
    //assigning res variable data to global variable declared above
    global=res
    //checking if data is not  undefined  then changing res=data so another card will be loaded
    if(data !==undefined){
        res=data
        global=data
        // mainBox.innerHTML=''

    }
    /// looping over res to load all the cards
    res.forEach(element => {

        //this box variable is the main card body 
        const box=document.createElement('div');
            box.classList.add('box')

        //mainImg is the main Img that loads on card
            const mainImg=document.createElement('div')
                mainImg.classList.add('main-img')
                //These are thumbnail images which are scrollable 
            const imgInsideMainImg=document.createElement('img')
                imgInsideMainImg.setAttribute('src',`${element.thumbnail}`)
                mainImg.appendChild(imgInsideMainImg)
                box.appendChild(mainImg)

            //creating and addding thumbnail img to box
            const thumbnailImg=document.createElement('div')
                thumbnailImg.classList.add('thumbnail-img')

            //This for each getting img array from api and createing thumbnail image by looping over array
            element.images.forEach(source=>{
                const imgInsideThumbnailImg= document.createElement('img')
                imgInsideThumbnailImg.setAttribute('src',`${source}`)

                thumbnailImg.insertAdjacentElement('beforeend',imgInsideThumbnailImg)
            })
            //line 92-->box variable declared and appending thumnailImg to is
                box.appendChild(thumbnailImg)

          

            //now creating card TITLE div 
            const title = document.createElement('div')
                title.classList.add('title')
            //titleH1 will have title that is coming from api call
            const titleH1=document.createElement('h1')
                titleH1.innerText=`${element.title}`
                title.appendChild(titleH1)
                box.appendChild(title)

              //working on Ratings and appending it
            const ratings=document.createElement('div')
                ratings.classList.add('ratings')
            const label=document.createElement('label')
                label.setAttribute('for','ratings');
                label.innerText=`Ratings :`
                ratings.appendChild(label)
                //here are the creating a div that will hold all the (i tags) inside it
            const stars=document.createElement('div')
                stars.classList.add('stars')
                //running a for loop 
            for(let i=0;i<5;i++){
                //creating i tag and adding its classes
                const star=document.createElement('i')
                star.classList.add('fa-solid')
                star.classList.add('fa-star')
                //condition if to check element rating and the add active class to i tag
                if(Math.round( element.rating)>i){
                    star.classList.add('active')
                }
                stars.appendChild(star)
            }
                ratings.appendChild(stars)
                box.appendChild(ratings)


            
            //now creating div price and appending it to box div
            const price=document.createElement('div')
                price.classList.add('price')
//creating h2 element by variable name priceh2 it will have discounted price by (actualPrice - actualPrice/100 * discoutnPercent)
            const priceh2=document.createElement('h2')
                priceh2.innerText=`Discount Price : $${element.price- Math.trunc(element.price/100*element.discountPercentage)}`
                price.appendChild(priceh2)
                box.appendChild(price)


            //creating description div and appending it
            const descri=document.createElement('div')
                descri.classList.add('description')
                descri.classList.add('hidden')
            // creating descriH3 variable it will have description coming from api
            const descriH3=document.createElement('h3')
                descriH3.innerText=`${element.description}`
                descri.appendChild(descriH3)
            
            //show description section 
            const showDesc=document.createElement('div')
                showDesc.classList.add('show-desc')
            const pTag=document.createElement('p')
                pTag.innerText='Show Description '
            
            const pTagI=document.createElement('i')
                pTagI.classList.add('fa-sharp')
                pTagI.classList.add('fa-solid')
                pTagI.classList.add('fa-angle-down')
                pTag.appendChild(pTagI)


            //show less Description section    
            //creating new i tage for up side arrow adn appending it to new p tage name Ptag2 
            const PTag2=document.createElement('p')
                PTag2.innerText='Less Description'
                PTag2.classList.add('hidden')
            const pTagI2=document.createElement('i')
                pTagI2.classList.add('fa-sharp')
                pTagI2.classList.add('fa-solid')
                pTagI2.classList.add('fa-angle-up')
                PTag2.appendChild(pTagI2)
                showDesc.appendChild(PTag2)
                showDesc.appendChild(pTag)

            box.appendChild(showDesc)
            showDesc.addEventListener('click',()=>{
                    descri.classList.toggle('hidden')
                    pTag.classList.toggle('hidden')
                    PTag2.classList.toggle('hidden')
            })
            box.appendChild(descri)
            //box variable is the card 
            mainBox.appendChild(box) 
    });
}
loadCards()

