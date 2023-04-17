<style scoped>
.body{
    padding-top: 50px;
}
.small-container .row{
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
}
select{
    border: 1px solid #e9a318;
    padding: 5px;
}
select:focus{
    outline: none;
}
.small-container .row .col-2 a{  
    color: #1a0000;
    padding: 10px 15px;
    font-size: 17px;
    border-radius: 50px;
    transition: 0.2s;
    background-color:  #e9a318;
    border: 1px solid  #e9a318;
}
.small-container .row .col-2 a:hover{ 
    color: #11101b;
    background-color:  transparent;
    border: 1px solid #e9a318;
}
.single-product{
    margin-top: 40px;
}
.single-product .col-2 img{
    padding: 0px;
    width: 100%;
    height: 100%;
}
.single-product .col-2{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 570px;
    width: 500px;
}
.single-product h4{
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}
.single-product select{
    display: block;
    padding: 10px;
    margin-bottom: 20px;
}
.single-product input{
    width: 40px;
    height: 40px;
    padding-left: 15px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid #e9a318;
}
input:focus{
    outline: none;
}
.single-product .fa{
    color: #e9a318;
}
.small-container .row-2{
    display: flex;
    justify-content: space-between;
    width:63%;
}
@media only screen and (max-width: 700px){
    .small-container .row-2{
        flex-direction: row;
    }
}
</style>
<template>
<div class="body">
    <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src="src/assets/images/product-1.jpg" width="100%" id="">
            </div>
            <div class="col-2">
                <p>Home / T-Shirt</p>
                <h1>Read Printed T-Shirt by HRX</h1>
                <h4>$50.00</h4>
                <div>
                    <select>
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <input type="number" value="1">
                    <a href="#" class="btn">Add To Cart</a>
                </div>
                <div>
                    <h3>Product Details <i class="fa fa-indent"></i></h3>
                    <br>
                    <p>
                        Give your summer wardobe a style upgrade with the HRX <br>
                        Men's Active T-shirt. Team it with a pair of shorts for <br>
                        your morning workout or a denims for an evening out with <br>
                        the guys.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Title -->
    <div class="small-container">
        <div class="row row-2">
            <h2>Related Products</h2>
            <p>View More</p>
        </div>
    </div>
    <!-- Title -->
    <!-- Single Product Details End-->
    <!-- Products Start-->
    <div class="small-container">
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-5.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half"></i>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-6.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half"></i>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-7.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half"></i>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-8.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half"></i>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
      </div>
    </div>
</div>
</template>