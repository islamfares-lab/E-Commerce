<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none !important;
    font-family: serif;
    box-sizing: border-box;
}
body{
    font-family:'Poppins', sans-serif;
}
header{
    width: 100%;
    height: 80px;
    background-color: #1a0000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 100px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1100;
}
.logo{
    height: 80px;
}
.logo img{
    height: 100%;
    width: 60px;
}
.hamburger{
    display: none;
}
.nav-bar ul{
    display: flex;
}
.nav-bar ul li a{
    display: block;
    color: #b8851f;
    padding: 10px 25px;
    font-size: 20px;
    border-radius: 50px;
    transition: 0.2s;
    margin: 0 5px;
}
.nav-bar ul li a:hover{
    color:#1a0000;
    background-color: #b8851f;
}
.nav-bar ul li a.active{
    color:  #1a0000;
    background-color:  #b8851f;
}
@media only screen and (max-width: 1024px){
    .nav-bar ul li a{
        transition: 0.2s;
        padding: 8px 20px;
        margin: 0 2px;
    }
}
@media only screen and (max-width: 900px){
    header{
        padding: 0 30px;
    }
    
}
@media only screen and (max-width: 700px){
    .hamburger{
        display: block;
        cursor: pointer;
    }
    .hamburger .line{
        width: 30px;
        height: 3px;
        background-color: #b8851f;
        margin: 6px ;
    }
    .nav-bar{
        height: 0;
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        width: 100vw;
        background-color: #1a0000;
        transition: 0.5s;
        overflow: hidden;
    }
    .nav-bar ul{
        display: block;
        width: fit-content;
        margin: 80px auto 0 auto;
        text-align: center;
        transition: 0.5s;
        opacity: 0;
    }
    .nav-bar.active{
        height: 450px;
    }
    .nav-bar.active ul{
        opacity: 1;
    }
    .nav-bar.notActive ul{
        opacity: 0;
    }
    .nav-bar ul li a{
        margin-bottom: 15px;
    }
}
</style>
<template>
  <header>
    <div class="logo">
      <RouterLink to="/"><img src="src/assets/images/nai1l.jpg" alt="" /></RouterLink>
    </div>
    <div class="hamburger" v-on:click="active=!active">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav class="nav-bar" v-bind:class="{active:active,notActive:!active}">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/products">Products</RouterLink></li>
        <li><RouterLink to="/about-us">About</RouterLink></li>
        <li><RouterLink to="/contact-us">Contact</RouterLink></li>
        <li><RouterLink to="/account">Account</RouterLink></li>
        <li>
          <RouterLink to="/shopp-cart"><fa-icon icon="shopping-cart"/></RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default{
    data(){
        return{
            active:false
        }
    }
}
</script>
