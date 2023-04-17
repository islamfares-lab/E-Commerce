<style scoped>
.BContain{
    display: grid;
    grid-template-columns: 1fr  1fr;
    width: 70%;
    margin: 0 auto;
    min-height: 800px;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
     
}
.image{
    height: 600px;
}
.image img{
   width: 100%;
   height: 100%;
}
.content{
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
    justify-content:end;
}
.content h2{
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 6px;
    opacity: 0.9;
    color: #1a0000;
}
.content span{
    height: 0.5px;
    width: 80px;
    background-color: #1a0000;
    margin: 30px 0;
}
.content p{
    padding-bottom: 15px;
    font-weight: 300;
    opacity: 0.7;
    margin: 0 auto;
    line-height: 1.7;
    color: #1a0000;
    padding:0px 40px;
    height: 250px;
}
.links{
    margin:15px 0;
}
.links li{
    border: 0.5px solid #777;
    border-radius: 5px;
    padding: 10px 15px;
    width: 160px;
    text-align: center;
    color: #1a0000;
}
.links li a{
    text-transform: uppercase;
    color: #1a0000;
}
.links li:hover{
    border-color:  #b8851f	;
}
.links li:hover a{
    color: #b8851f	;
}
.vertical-line{
    height: 30px;
    width: 0.5px;
    background: #1a0000;
    margin: 0 auto;
}
.icons{
    display: flex;
    padding: 15px 0;
}
.icons li{
    display: block;
    padding: 5px;
    margin: 5px;
}
.icons li .fab{
    font-size: 26px;
    opacity: 0.8;
}
.icons li .fab:hover{
    color: #b8851f	;
    cursor: pointer;
}
/**********************/
@media(max-width:1550px){
    .BContain{
        grid-template-columns: 1fr 1fr;
        width: 70%;
        height: 600px;
    }
    .content{
        padding-top: 0;
    }
    .content span{
        margin: 20px 0;
    }
    .content p{
        padding-bottom: 15px;
        height: 300px;
    }
    .links{
        margin: 5px 0;
    }
    .links li{
        padding: 6px 10px;
    }
}
@media(max-width:1024px){
    .BContain{
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 600px;
        padding-top: 0;
    }
    .content span{
        margin: 20px 0;
    }
    .content p{
        font-size: 14px;
        height: 250px;
    }
}
@media(max-width:900px){
    .BContain{
        grid-template-columns: 1fr;
        height: 1050px;
        padding-top: 30px;
    }
    .image{
        height: 500px;
    }
    .content{
        height: 500px;
    }
    .content h2{
        font-size: 20px;
    }
}
</style>
<template>
  <div class="BContain">
    <div class="image">
      <img src="src/assets/images/or.webp" alt="" />
    </div>
    <div class="content">
      <h2>About Us</h2>
      <span></span>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <ul class="links">
        <li><a href="">work</a></li>
        <div class="vertical-line"></div>
        <li><a href="">services</a></li>
        <div class="vertical-line"></div>
        <li><a href="">contact</a></li>
      </ul>
      <ul class="icons">
        <li><fa-icon :icon="['fab','facebook']" class="fab"/></li>
        <li><fa-icon :icon="['fab','twitter']" class="fab"/></li>
        <li><fa-icon :icon="['fab','instagram']" class="fab"/></li>
        <li><fa-icon :icon="['fab','linkedin']" class="fab"/></li>
      </ul>
    </div>
  </div>
</template>