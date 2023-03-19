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
            const inside=document.createElement('i');
            inside.classList.add('fa-sharp')
            inside.classList.add('fa-solid')
            inside.classList.add('fa-angle-down')
            titleH1.appendChild(inside)

            title.appendChild(titleH1)
            box.appendChild(title)

            //creating description and appending it
            const descri=document.createElement('div')
            descri.classList.add('description')
            descri.classList.add('hidden')
            const descriH3=document.createElement('h3')
            descriH3.innerText=`${`${element.description}`.substring(0,30)}...`
            descri.appendChild(descriH3)

            //now creating price and appending it to box div
            const price=document.createElement('div')
            price.classList.add('price')
            const priceh2=document.createElement('h2')
            priceh2.innerText=`Price : $${element.price}`
            price.appendChild(priceh2)
            box.appendChild(price)
            box.appendChild(descri)


            title.addEventListener('click',()=>{
                descri.classList.toggle('hidden')
            })




            //box variable is the card 
            mainBox.appendChild(box) 

       

    });


}
loadCards()