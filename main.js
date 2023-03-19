'use strict'
const body=document.querySelector('body');
const nav=document.createElement('nav')
body.appendChild(nav)

const containerDiv= document.createElement('div');
containerDiv.classList.add('container')
body.appendChild(containerDiv)

const mainBox= document.createElement('div')
mainBox.classList.add('main-box')
containerDiv.appendChild(mainBox)


async function loadCards(){
    const response=await fetch('https://dummyjson.com/products?limit=15');
    const res= await response.json();

    res.products.forEach(element => {
        console.log(element)
        const box=document.createElement('div');
            box.classList.add('box')

            const mainImg=document.createElement('div')
                mainImg.classList.add('main-img')
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
                box.appendChild(thumbnailImg)

          

            //now creating card TITLE and appending it
            const title = document.createElement('div')
                title.classList.add('title')
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
            const stars=document.createElement('div')
                stars.classList.add('stars')
            for(let i=0;i<5;i++){
                const star=document.createElement('i')
                star.classList.add('fa-solid')
                star.classList.add('fa-star')
                if(Math.round( element.rating)>i){
                    star.classList.add('active')
                }
                stars.appendChild(star)
            }
                ratings.appendChild(stars)
                box.appendChild(ratings)


            
            //now creating price and appending it to box div
            const price=document.createElement('div')
                price.classList.add('price')
            const priceh2=document.createElement('h2')
                priceh2.innerText=`Discount Price : $${element.price- Math.trunc(element.price/100*element.discountPercentage)}`
                price.appendChild(priceh2)
                box.appendChild(price)


            //creating description and appending it
            const descri=document.createElement('div')
            descri.classList.add('description')
            descri.classList.add('hidden')
            const descriH3=document.createElement('h3')
            descriH3.innerText=`${`${element.description}`.substring(0,50)}...`
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
//creating new i tage for up side arrow adn appending it to new p tage name Ptag2 
                const PTag2=document.createElement('p')
                PTag2.innerText='Show Less'
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