<style>
/*Contetnt*/
.wrapper{
    width: 100%;
    height: 900px;
    background-image: url("/src/assets/images/674122.webp");
    background-size: 100% 100%;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.wrapper .holder{
    height: 270px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    align-items: center;
}
.brand{
    color: #1a0000;
    font-size: 55px;
    font-weight: bold;
    height: 100px;
}
.wrapper p{
    font-size: 25px;
    margin-bottom: 50px;
    color: #1a0000;
}
.wrapper a{  
    color: #b8851f;
    padding: 10px 25px;
    font-size: 20px;
    border-radius: 50px;
    transition: 0.2s;
    background-color: #1a0000;
    border: 1px solid #1a0000;
}
.wrapper a:hover{ 
    color: #11101b;
    background-color:  transparent;
    border: 1px solid #1a0000;
}
/* response */
@media only screen and (max-width: 1024px){
    .wrapper{
        height: 800px;
    }
    .wrapper .holder{
        left: 45%;
    }
    .brand{
        font-size: 45px;
        height: 80px;
    }
    .wrapper p{
        font-size: 20px;
        margin-bottom: 45px;
    }
}
@media only screen and (max-width: 900px){
    .wrapper{
        height: 700px;
    }
    .wrapper .holder{
        left: 50%; 
        height: 90px;
    }
    .brand{
        font-size: 40px;
        height: 70px;
    }
    .wrapper p{
        font-size: 18px;
        margin-bottom: 40px;
    }
}
@media only screen and (max-width: 700px){
    .wrapper{
        height: 600px;
        background-size: 110% 80%;
    }
    .wrapper .holder{
        left: 50%; 
        height: 80px;
    }
    .brand{
        font-size: 35px;
        height: 60px;
    }
    .wrapper p{
        font-size: 16px;
        margin-bottom: 30px;
    }
    .wrapper a{  
        color: #b8851f;
        padding: 5px 20px;
        font-size: 18px;
    }
}
/*Category*/
.categories{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
}
.categories .row{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 500px; 
}
.col-3{
    width: 20%;
    flex-direction: column;
    margin: 11px;
    height: 400px;
    min-width: 240px;
    position: relative;
}
.categories .row .col-3 img{
    width: 100%;
    height: 100%;
    transition: all 1s;
}
.categories .row .col-3:hover img{
    transform: scale(1.1,1.1);
}
.categories .row .col-3 .captian{ 
    position: absolute;
    top: 0;
    width: 100%;
    height: 400px;
    min-width: 240px;
    background-color: rgba(0, 0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: all 1s;
}
.col-3 .captian h1{
    color: #b8851f;
}
.categories .row .col-3 .captian:hover{
    opacity: 1;
    transform: scale(1.1,1.1);
}
/* response */
@media only screen and (max-width: 900px){
    .categories .row{
        height: 400px; 
    }
    .col-3{
        height: 350px;
        min-width: 200px;
        margin: 8px;
    }
    .categories .row .col-3 .captian{ 
        height: 350px;
        min-width: 200px;
    }
}
@media only screen and (max-width: 700px){
    .categories {
        height: 1300px;
    }
    .categories .row{
        height: 800px;  
        flex-direction: column;
        gap: 5px;
    }
    .col-3{
        width: 18%;
        flex-direction: column;
        margin: 10px;
        height: 400px;
        min-width: 450px;
    }
    .categories .row .col-3 .captian{ 
        height: 400px;
        min-width: 200px;
    }
}
/*Products*/
.small-container{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.small-container .row{
    width: 100%;
    display: flex;
    justify-content: center;
}
.col-4{
    flex-basis: 16%;
    padding: 5px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.col-4 img{
    width: 100%;
}
.small-container .title{
    margin: 0 auto 80px;
    position: relative;
    line-height: 60px;
    color: #555;
}
.small-container .title::after{
    content: '';
    background: #e9a318;
    width: 80px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
h4{
    color: #555;
    font-weight: normal;
    font-size: 23px;
}
.col-4 p{
    font-size: 18px;
}
.ratings{
    color: #e9a318;
}
.col-4:hover{
    transform: translateY(-10px);
}
.col-4 a{
    background-color: #e9a318;
    padding:5px 20px;
    color: #1a0000;
    border: 1px solid #e9a318;
}
.col-4 a:hover{
    background-color: #fff;
    padding:5px 20px;
    color: #e9a318;
    border: 1px solid #e9a318;
}
/* response */
@media only screen and (max-width: 1024px){
    .col-4{
        flex-basis: 15%;
        padding: 5px;
        min-width: 180px;
        margin-bottom: 30px;
    }
}
@media only screen and (max-width: 900px){
    .col-4{
        flex-basis: 15%;
        min-width: 170px;
        margin-bottom: 40px;
    }
}
@media only screen and (max-width: 700px){
     
    .small-container .row{
        flex-direction: column;
        align-items: center;
    }
    .col-4{
        width: 18%;
        margin: 10px;
        min-width: 450px;
    }
}
/*Slider*/
.container8{
    margin-top: 30px;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 600px;
    align-items: center;
}
.slider{
    width: 1150px;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
}
.slide{
    width: 500%;
    height: 600px;
    display: flex;
}
.slide input{
    display: none;
}
.st{
    width: 20%;
    height: 600px;
    transition: 2s;
    position: relative;
}
.st img{
    width: 100%;
    height: 100%;
}
.st .werb{
    position: absolute;
    top: 60%;
    left: 90px;
}
.st .werb h1{
    color:#1a0000;
    margin-bottom: 10px;
}
.st .werb a{
    color: #e9a318;
    padding: 10px 25px;
    font-size: 20px;
    border-radius: 50px;
    transition: 0.2s;
    background-color: #1a0000;
    cursor: pointer;
    border: 1px solid #1a0000;
}
.st .werb a:hover{
    color: #1a0000;
    background-color:  transparent;
    border: 1px solid #1a0000;
}
.nav-m{
    position: absolute;
    width: 1150px;
    margin-top: -80px;
    justify-content: center;
    display: flex;
}
.m-btn{
    border:  2px solid #1a0000;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}
.m-btn:not(:last-child){
    margin-right: 30px;
}
.m-btn:hover{
    background-color: #1a0000;
}
#radio1:checked ~.first {
    margin-left: 0;
}
#radio2:checked ~.first {
    margin-left: -20%;
}
#radio3:checked ~.first {
    margin-left: -40%;
}
#radio4:checked ~.first {
    margin-left: -60%;
}
.nav-auto{
    position: absolute;
    width: 1150px;
    margin-top: 520px;
    display: flex;
    justify-content: center;
}
.nav-auto div{
    border: 2px solid #1a0000;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
}
.nav-auto div:not(:last-child){
    margin-right: 30px;
    justify-content: center;
}
#radio1:checked ~ .nav-auto .a-b1{
    background-color: #1a0000;
}
#radio2:checked ~ .nav-auto .a-b2{
    background-color: #1a0000;
}
#radio3:checked ~ .nav-auto .a-b3{
    background-color: #1a0000;
}
#radio4:checked ~ .nav-auto .a-b4{
    background-color: #1a0000;
}
/**/
/* response */
@media only screen and (max-width: 1500px){
    .slider{
        width: 950px;
    }
    .st .werb{
        left: 70px;
    }
    .nav-m{
        width: 950px;
    }
    .nav-auto{
        width: 950px;
    }
}
@media only screen and (max-width: 1024px){
    .container8{
        height: 500px;
    }
    .slider{
        width: 700px;
        height: 500px;
    }
    .st{
        height: 500px;
    }
    .st .werb{
        left: 50px;
    }
    .st .werb h1{
        font-size: 23px;
    }
    .st .werb a{
        padding: 7px 23px;
        font-size: 18px;
    }
    .nav-m{
        width: 700px;
        margin-top: -140px;
    }
    .nav-auto{
        width: 700px;
        margin-top: 460px;
    }
}
@media only screen and (max-width: 700px){
    .slider{
        width: 500px;
    }
    .st .werb{
        left: 40px;
    }
    .st .werb h1{
        font-size: 20px;
    }
    .st .werb a{
        padding: 5px 20px;
        font-size: 17px;
    }
    .nav-m{
        width: 500px;
    }
    .nav-auto{
        width: 500px;
    } 
}
/*testimonial*/
.coll-3{
    width: 20%;
    flex-direction: column;
    margin: 10px;
    height: 300px;
    min-width: 240px;
    position: relative;
    overflow: hidden;
}
.testimonial{
    padding-top: 50px;
}
.testimonial .col-3{
    text-align: center;
    padding: 40px 20px;
    height: 350px;
    box-shadow: 0 0 20px 0px rgba(0, 0,0,0.1);
    transition: 0.5s;
}
.testimonial .col-3 img{
    width: 50px;
    margin-top: 20px;
    border-radius: 50%;
}
.testimonial .col-3:hover{
    transform: translateY(-10px);
}
.fa.fa-quote-left{
    font-size: 34px;
    color: #e9a318;
}
.col-3 p{
    font-size: 12px;
    margin: 12px 0;
    color: #777;
}
.testimonial .col-3 h3{
    font-weight: 600;
    color: #555;
    font-size: 16px;
}
/* Brands */
.brands{
    margin: 100px auto;
}
.col-5{
    width: 250px;
}
.col-5 img{
    width: 100%;
    cursor: pointer;
    filter: grayscale(100%);
}
.col-5 img:hover{
    filter: grayscale(0);
}
</style>
 <template>
    <div>
        <!--Start Contetnt-->
    <div class="wrapper">
      <div class="holder">
        <div class="brand">BOB-Cat Store</div>
        <p>
          Success isn't always about greatness. It's about <br />
          consistency. consistent hard work gains success. <br />
          Greatness will come
        </p>
        <a href="#" class="btn">Explore Now</a>
      </div>
    </div>
    <!--End Contetnt-->
    <!--Feature Category Start-->
    <div class="categories">
      <div class="row">
        <div class="col-3">
          <img src="src/assets/images/category-1.jpg" alt="" />
          <div class="captian">
            <h1>Pants</h1>
          </div>
        </div>
        <div class="col-3">
          <img src="src/assets/images/category-2.jpg" alt="" />
          <div class="captian">
            <h1>Shos</h1>
          </div>
        </div>
        <div class="col-3">
          <img src="src/assets/images/category-3.jpg" alt="" />
          <div class="captian">
            <h1>Pluvers</h1>
          </div>
        </div>
      </div>
    </div>
    <!--Feature Category End-->
    <!--Feature Products Start-->
    <div class="small-container">
      <h2 class="title">Featured Products</h2>
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-1.jpg" alt=""/>
          <h4 class="product-title">Red Printed T-shirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p class="product-price">$60.00</p>
          <RouterLink to="/details"> Details </RouterLink> 
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-2.jpg" alt=""/>
          <h4 class="product-title">Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p class="product-price">$80.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-3.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-4.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
      </div>
      <h2 class="title">Latest Products</h2>
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-5.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-6.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-7.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-8.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html" class="add-cart">Details</a>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="src/assets/images/product-9.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-10.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-11.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
        <div class="col-4">
          <img src="src/assets/images/product-12.jpg" alt="" />
          <h4>Red Printed Tshirt</h4>
          <div class="ratings">
            <fa-icon icon="fa-star"/> 
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star"/>
            <fa-icon icon="fa-star-half"/>
          </div>
          <p>$50.00</p>
          <a href="productDetails.html">Details</a>
        </div>
      </div>
    </div>
    <!--Feature Products End-->
    <!--Slider Start-->
    <div class="container8">
      <div class="slider">
        <div class="slide">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div class="st first">
            <img src="src/assets/images/slid1.webp" alt="" />
            <div class="werb">
              <h1>Discounts 40%</h1>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="st">
            <img src="src/assets/images/slid2.jpg" alt="" />
            <div class="werb">
              <h1>Winter Sale</h1>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="st">
            <img src="src/assets/images/slid3.jfif" alt="" />
            <div class="werb">
              <h1>BOB-Cat warehouse deals</h1>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="st">
            <img src="src/assets/images/slid4.webp" alt="" />
            <div class="werb">
              <h1></h1><br/> <br/>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="nav-auto">
            <div class="a-b1"></div>
            <div class="a-b2"></div>
            <div class="a-b3"></div>
            <div class="a-b4"></div>
          </div>
        </div>
        <div class="nav-m">
          <label for="radio1" class="m-btn"></label>
          <label for="radio2" class="m-btn"></label>
          <label for="radio3" class="m-btn"></label>
          <label for="radio4" class="m-btn"></label>
        </div>
      </div>
    </div>
    <!--Slider End-->
    <!--Tesitmonials Start-->
    <div class="testimonial">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div class="ratings">
                <fa-icon icon="fa-star"/> 
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star-half"/>
            </div>
            <img src="src/assets/images/user-1.png" alt="" />
            <h3>Sean Parker</h3>
          </div>
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div class="ratings">
                <fa-icon icon="fa-star"/> 
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star-half"/>
            </div>
            <img src="src/assets/images/user-2.png" alt="" />
            <h3>Paul Rom</h3>
          </div>
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div class="ratings">
                <fa-icon icon="fa-star"/> 
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star"/>
                <fa-icon icon="fa-star-half"/>
            </div>
            <img src="src/assets/images/user-3.png" alt="" />
            <h3>Tim joe</h3>
          </div>
        </div>
      </div>
    </div>
    <!--Testmonials End-->
    <!--Brands Start-->
    <div class="brands">
      <div class="small-container">
        <div class="row">
          <div class="col-5">
            <img src="src/assets/images/logo-godrej.png" alt="" />
          </div>
          <div class="col-5">
            <img src="src/assets/images/logo-oppo.png" alt="" />
          </div>
          <div class="col-5">
            <img src="src/assets/images/logo-coca-cola.png" alt="" />
          </div>
          <div class="col-5">
            <img src="src/assets/images/logo-paypal.png" alt="" />
          </div>
          <div class="col-5">
            <img src="src/assets/images/logo-philips.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!--Brands End-->
    </div>
</template>
 
 