<style scoped>
.container1{
    position: relative;
    width: 100%;
    min-height: 75vh;
    padding: 2rem;
    background-color:#fafafa;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 73px;
}
.form{
    width: 100%;
    max-width: 820px;
    background-color:#fff;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.contact-form{
    background-color:#1a0000;
    position: relative;
}
.circle{
    border-radius: 50%;
    background: linear-gradient(135deg,transparent 20%, #fff);
    position: absolute;
}
.circle.one{
    width: 130px;
    height: 130px;
    top: 130px;
    right: -40px;
}
.circle.two{
    width: 80px;
    height: 80px;
    top: 10px;
    right: 30px;
}
.contact-form::before{
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background-color:#1a0000;
    transform: rotate(45deg);
    top: 50px;
    left: -13px;
}
form{
    padding: 2.3rem 2.2rem;
    z-index: 10;
    overflow: hidden;
    position: relative;
}
.title{
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.7rem;
}
.input-container1{
    position: relative;
    margin: 1rem 0;
}
.input{
    width: 100%;
    outline: none;
    border: 2px solid #fafafa;
    background: none;
    padding: 0.6rem 1.2rem; 
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    border-radius: 25px;
    transition: 0.3s;
}
textarea.input{
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    border-radius: 22px;
    resize: none;
    overflow: auto;
}
.input-container1 label{
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: #fafafa;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    z-index: 1000;
    transition: 0.5s;
}
.input-container1.textarea label{
    top: 1rem;
    transform: translateY(0);
}
.input-container1 ::placeholder{
  color: #fff;
}
.btn{
    padding:  0.6rem 1.3rem;
    background-color: #fff;
    border: 2px solid #fafafa;
    font-size: 0.95rem;
    color: #1a0000;
    line-height: 1;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    margin: 0;
}
.btn:hover{
    background-color: transparent;
    color: #fff;
}
.information .fa-icon{
    font-size: 30px;
    margin-right: 0.7rem; 
}
.contact-info{
    padding: 2.3rem 2.2rem;
    position: relative;
}
.contact-info .title{
    color: #1a0000;
}
.text{
    color: #333;
    margin: 1.5rem 0 2rem 0;
}
.information{
    display: flex;
    color: #1a0000;
    margin: 0.7rem;
    align-items: center;
    font-size: 0.95rem;
}
.social-media{
    padding: 2rem 0 0 0;
}
.social-media p{
    color: #333;
}
.social-icons{
    display: flex;
    margin-top: 0.5rem;
}
.social-icons a{
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background:linear-gradient(45deg, #e2c000, #b68500);
    color: #333;
    text-align: center;
    line-height: 35px;
    margin-right: 0.5rem;
}
.social-icons a:hover{
    transform: scale(1.05);
}
.contact-info::before{
    content: "";
    position: absolute;
    width: 110px;
    height: 100px;
    border: 22px solid #b8851f;
    border-radius: 50%;
    bottom: -77px;
    right: 50px;
    opacity: 0.3;
}
.big-circle{
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background:linear-gradient(to bottom, #1a0000,#b8851f);
    bottom:  50%;
    right: 50%;
    transform: translate(-40%,38%);
}
.big-circle::after{
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    background-color: #fafafa;
    border-radius: 50%;
    top: calc(50% - 180px);
    left: calc(50% - 180px);
}
@media(max-width:900px){
    .container1{
        margin-top: 20px;
    }
    .form{
        grid-template-columns: 1fr;
        margin-top: 60px;
    }
    .contact-info::before{
        bottom: initial;
        top: -75px;
        right: 65px;
        transform: scale(0.95);
    }
    .contact-form::before{
        top: -13px;
        left: initial;
        right: 70px;
    }
    .big-circle{
        bottom: 75%;
        transform: scale(0.9) translate(-40%,30%);
        right: 50%;
    }
    .text{
        margin: 1rem 0 1.5rem 0;
    }
    .social-media{
        padding: 1.5rem 0 0 0;
    }
}
@media(max-width:700px){
    .container1{
        padding: 1.5rem;
        margin-top: 20px;
    }
    .contact-info::before{
        display: none;
    }
    .big-circle{
        display: none;
    }
    form, .contact-info{
        padding: 1.7rem 1.6rem;
    }
    .text,
    .information,
    .social-media p{
        font-size:  0.8rem;
    }
    .social-icons a{
        width: 30px;
        height: 30px;
        line-height: 30px;
    }
}
.success{
    color: white;
    background-color: green;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.error{
    color:white ;
    background-color:red;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hideSuccess{
    display: none;
}
.hideError{
    display: none;
}
</style>
<template>
  <div class="container1">
    <span class="big-circle"></span>
    <div class="form">
      <div class="contact-info">
        <h3 class="title">let's get in touch</h3>
        <p class="text">
          BOB-Cat Store keeps their contact page simple but personalizes it with
          the names and faces of their support team. This helps users feel like
          they are connecting with real people, not just a faceless brand.
        </p>
        <div class="info">
          <div class="information">
            <fa-icon icon="fa-location-dot" class="fa-icon" />
            <p>92 Cherry Drive Uniodle, Ny 11553</p>
          </div>
          <div class="information">
            <fa-icon icon="fa-solid fa-envelope" class="fa-icon" />
            <p>Lorem</p>
          </div>
          <div class="information">
            <fa-icon icon="fa-solid fa-phone-volume" class="fa-icon" />
            <p>123-456-789</p>
          </div>
        </div>
        <div class="social-media">
          <p>Contact with us :</p>
          <div class="social-icons">
            <a href="#">
              <fa-icon :icon="['fab', 'facebook']" class="fab" />
            </a>
            <a href="#">
              <fa-icon :icon="['fab', 'twitter']" class="fab" />
            </a>
            <a href="#">
              <fa-icon :icon="['fab', 'instagram']" class="fab" />
            </a>
            <a href="#">
              <fa-icon :icon="['fab', 'linkedin']" class="fab" />
            </a>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>
        <form method="post" @submit.prevent="handleSubmit">
          <h3 class="title">Contact us</h3>
          <div class="input-container1">
            <input type="text" 
            name="name"
            class="input"
            placeholder="UserName"
            required 
            v-model="userName"
            v-on:input="userValidation"
            />
            <a v-bind:class="{success:valid,hideSuccess:hideUserSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
            <a v-bind:class="{error:invalid,hideError:hideUserError}"><fa-icon icon="fa-solid fa-xmark"/></a>
          </div>
          <div class="input-container1">
            <input type="email" 
            name="email" 
            class="input"
            placeholder="Email"
            required
            v-model="email"
            v-on:input="emailValidation"
            />
            <a v-bind:class="{success:valid,hideSuccess:hideEmailSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
            <a v-bind:class="{error:invalid,hideError:hideEmailError}"><fa-icon icon="fa-solid fa-xmark"/></a>
          </div>
          <div class="input-container1">
            <input type="tel" 
            name="phone" 
            class="input" 
            placeholder="Phone Number"
            required
            v-model="phone"
            v-on:input="phoneValidation"  
            />
            <a v-bind:class="{success:valid,hideSuccess:hidePhoneSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
            <a v-bind:class="{error:invalid,hideError:hidePhoneError}"><fa-icon icon="fa-solid fa-xmark"/></a>
          </div>
          <div class="input-container1 textarea">
            <textarea name="message" 
            class="input" 
            placeholder="Message"
            required
            v-model="message"
            v-on:input="messageValidation"
            ></textarea>
            <a v-bind:class="{success:valid,hideSuccess:hideMessageSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
            <a v-bind:class="{error:invalid,hideError:hideMessageError}"><fa-icon icon="fa-solid fa-xmark"/></a>
          </div>
          <input type="submit" value="Send" class="btn"/>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      userName:null,
      email:null,
      phone:null,
      message:null,
      valid:true,
      invalid:true,
      hideUserSeccess:true,
      hideUserError:true,
      hideEmailSeccess:true,
      hideEmailError:true,
      hidePhoneSeccess:true,
      hidePhoneError:true,
      hideMessageSeccess:true,
      hideMessageError:true,
      userCheck:/^[A-Za-z. ]{3,30}$/,
      emailCheck:/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
      phoneCheck:/^01[0125][0-9]{8}$/,
      messageCheck:/^.{30,500}$/
    }
  },
  methods:{
    userValidation($event){
      if(this.userCheck.test(this.userName)){
        $event.target.style.border="2px solid green"
        this.hideUserSeccess=false;
        this.hideUserError=true
      }
      else if(this.userName==""){
        $event.target.style.border="2px solid #fff"
        this.hideUserSeccess=true;
        this.hideUserError=true;
      }
      else{
        $event.target.style.border="2px solid red";
        this.hideUserError=false
      }
    },
    emailValidation($event){
      if(this.emailCheck.test(this.email)){
        $event.target.style.border="2px solid green"
        this.hideEmailSeccess=false;
        this.hideEmailError=true;
      }
      else if(this.email==""){
        $event.target.style.border="2px solid #fff";
        this.hideEmailSeccess=true;
        this.hideEmailError=true;
      }
      else{
        $event.target.style.border="2px solid red";
        this.hideEmailError=false;
      }
    },
    phoneValidation($event){
      if(this.phoneCheck.test(this.phone)){
        $event.target.style.border="2px solid green"
        this.hidePhoneSeccess=false;
        this.hidePhoneError=true;
      }
      else if(this.phone==""){
        $event.target.style.border="2px solid #fff";
        this.hidePhoneSeccess=true;
        this.hidePhoneError=true;
      }
      else{
        $event.target.style.border="2px solid red";
        this.hidePhoneError=false;
      }
    },
    messageValidation($event){
      if(this.messageCheck.test(this.message)){
        $event.target.style.border="2px solid green"
        this.hideMessageSeccess=false;
        this.hideMessageError=true;
      }
      else if(this.message==""){
        $event.target.style.border="2px solid #fff";
        this.hideMessageSeccess=true;
        this.hideMessageError=true;
      }
      else{
        $event.target.style.border="2px solid red";
        this.hideMessageError=false;
      }
    },
    handleSubmit(){
    if( this.userCheck.test(this.userName) && 
        this.emailCheck.test(this.email) &&
        this.phoneCheck.test(this.phone) &&
        this.messageCheck.test(this.message)
      ){
        this.$router.push("/success");
      }
    }
  } 
}
</script>