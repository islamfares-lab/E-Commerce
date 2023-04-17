<style scoped>
.body{
    padding-top: 80px;
}
.small-container .row1{
    height: 100px;
    width: 63%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
select{
    border: 1px solid #e9a318;
    padding: 5px;
}
select:focus{
    outline: none;
}
.page-btn{
    margin: 0 auto 80px;
}
.page-btn span{
     display: inline-block;
     border: 1px solid #e9a318;
     margin-left: 10px;
     width: 40px;
     height: 40px;
     text-align: center;
     line-height: 40px;
     cursor: pointer;
}
.page-btn span:hover{
    color: #fff;
    background-color: #e9a318;
}
</style>
 <template>
  <div class="body">
    <div class="small-container">
      <div class="row1">
        <h2>All Products</h2>
        <select name="" id="">
          <option>Default Sorting</option>
          <option>Sort by Price</option>
          <option>Sort by Popularity</option>
          <option>Sort by Rating</option>
          <option>Sort by Sale</option>
        </select>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-1.jpg" alt="" />
          <h4 class="product-title">Red Printed T-shirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p class="product-price">$60.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-2.jpg" alt="" />
          <h4 class="product-title">Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p class="product-price">$80.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-3.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-4.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-5.jpg" alt="" />
          <h4 class="product-title">Red Printed T-shirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p class="product-price">$60.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-6.jpg" alt="" />
          <h4 class="product-title">Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p class="product-price">$80.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-7.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-8.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-9.jpg" alt="" />
          <h4 class="product-title">Red Printed T-shirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p class="product-price">$60.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-10.jpg" alt="" />
          <h4 class="product-title">Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p class="product-price">$80.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-11.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-12.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star" />
            <fa-icon icon="fa-star-half" />
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
      </div>
      <div class="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
      </div>
    </div>
  </div>
</template>
 