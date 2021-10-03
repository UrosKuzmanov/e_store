//get product

const getProducts=async()=>{
    try{
        const result=await fetch("../data/products.json")
        const data=await result.json()
        const products=data.products
        return products
      

      
      
        

    }catch(err){
        console.log(err)

    }
}

window.addEventListener("DOMContentLoaded", async()=>{
    const products= await getProducts()
    displayProductItem(products)
  
})
const categoryCenter=document.querySelector('.category_center')

//display products
const displayProductItem= items=>{
    let displayProduct=items.map(product=>
        `<div class="product category_product">
        <div class="product_header">
            <img src=${product.image} alt="">
        </div>
        <div class="product_footer">
            <h3>${product.title}</h3>
            <div class="rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                    <use href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                    <use href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                    <use href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                    <use href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                    <use href="./images/sprite.svg#icon-star-full"></use>
                </svg>
            </div>
            <div class="product_price">
                <h4>$${product.price}</h4>
                <a href="#"><button class="product_btn">Add To Card</button></a>
            </div>
            <ul>
                <li><a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                            <use href="./images/sprite.svg#icon-heart-o"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                            <use href="./images/sprite.svg#icon-eye"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="39.3381mm" height="32.2354mm" version="1.1" viewBox="0 0 36.86 30.2"> 
                            <use href="./images/sprite.svg#icon-loop2"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>`
        )
        displayProduct=displayProduct.join("")

        categoryCenter.innerHTML=displayProduct
        

}

const filterBtn=document.querySelectorAll('.filter_btn')
const categoryContainer=document.getElementById('category')
categoryContainer.addEventListener("click", async e=>{
    const target=e.target.closest(".section_title")
    if(!target)return

    const id= target.getAttribute("data_id")
    const products=await getProducts()

    if(id){
        //remove active
        filterBtn.forEach(btn=>{
            btn.classList.remove("active")
        })
        target.classList.add("active")
        //load product filter

        let filteredProducts=products.filter(product=>{
            if(product.category==id){
                return product
            }
        })

        if(id=="All Products"){
            displayProductItem(products)
        }else{
            displayProductItem(filteredProducts)
        }
    }

})



