<style>
/* Footer */
.container .row{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.footer{
    background-color: #1a0000;
    color: #8a8a8a;
    font-size: 14px;
}
.footer p{
    color: #8a8a8a;
}
.footer h3{
    color: #fff;
    margin-bottom: 20px;
}
.footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4{
    min-width: 250px;
    margin-bottom: 20px;
    text-align: center;
}
.footer-col-2 img{
    width: 200px;
    margin-bottom: 20px;
}
.footer-col-3{
    height: 300px;
}
.app-logo{
    margin-top: 20px;
}
.app-logo img{
    width: 140px;
    cursor: pointer;
}
.footer hr{
    border: none;
    background-color: #b5b5b5;
    height: 1px;
    margin: 20px 0;
}
.copyRight{
    text-align: center;
    height: 30px;
}
.footer .fab{
    font-size: 25px;
    margin-bottom: 10px;
    cursor: pointer;
}
.footer ul li{
    font-size: 17px;
    margin-bottom: 30px;
    cursor: pointer;
}
.footer ul li:hover{
    color: #b8851f;
}
/* response */
@media only screen and (max-width: 1024px){
    .footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4{
        min-width: 200px;
    }
}
@media only screen and (max-width: 900px){
    .footer-col-3{
        display: none;
    }
}
@media only screen and (max-width: 700px){
    .footer-col-3{
        display: none;
    }
}
</style>
<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col-1">
          <h3>Download Our App</h3>
          <p>Download App for Android and ios mobile phone</p>
          <div class="app-logo">
            <img src="src/assets/images/play-store.png" alt="" />
            <img src="src/assets/images/app-store.png" alt="" />
          </div>
        </div>
        <div class="footer-col-2">
          <img src="src/assets/images/nail.jpg" alt="" />
          <p>
            Our Purpose is to Sustaibably make the Pleasure and Benefits of
            Sports Accessible to the Many
          </p>
        </div>
        <div class="footer-col-3">
          <h3>Usefull Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="footer-col-4">
          <h3>Follow Us</h3>
          <ul>
            <li><fa-icon :icon="['fab','facebook']" class="fab"/></li>
            <li><fa-icon :icon="['fab','twitter']" class="fab"/></li>
            <li><fa-icon :icon="['fab','instagram']" class="fab"/></li>
            <li><fa-icon :icon="['fab','linkedin']" class="fab"/></li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="copyRight">Copy Right 2020 - BOB-Cat Store</p>
    </div>
  </div>
</template>