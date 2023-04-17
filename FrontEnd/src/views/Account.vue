<style scoped>
.acc-body{
    background-color: #ffb625;
 }
.containerr{
    width: 100%;
    height: 750px;
}
.containerr .row{
    width: 100%;
    display: flex;
    height: 800px;
    align-items: center;
}
.containerr .col-2{
    width: 50%;
    height: 700px;
}
.containerr .row img{
    width: 100%;
    height: 100%;
}
.account-page{
    padding: 50px 0;
}
.form-container2{
    background: #fff;
    width: 400px;
    height: 500px;
    position: relative;
    text-align: center;
    padding: 20px 0;
    margin: auto;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
    overflow: hidden;
}
.form-container2 span{
    font-weight: bold;
    padding:0 10px;
    color: #555;
    cursor: pointer;
    width: 100px;
    display: inline-block;
}
.form-container2 .form-btn{
    display: inline-block;
}
.containerr .form-container2 form{
    max-width: 400px;
    padding: 0 20px;
    position: absolute;
    top: 130px;
    transition: all 1s;
}
.form-container2 form input{
    width: 100%;
    height: 35px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #e9a318;
    outline: none;
}
.containerr form .btn{
    width: 100%;
    border: none;
    cursor: pointer;
    margin: 10px 0;
    padding: 8px 0;
    border-radius: 50px;
    background-color: #e9a318;
    color: #fff;
    font-size: 17px;
    border: 1px solid #e9a318;
}
.containerr form .btn:hover{
    background-color: #fff ;
    color:#e9a318;
    border: 1px solid #e9a318;
}
#loginForm{
    left: -390px;;
}
#registerForm{
    left: 0;
}
#indicator{
    width: 100px;
    border: none;
    background: #e9a318;
    height: 3px;
    margin-top: 8px;
    transform: translateX(100px);
    transition: all 1s;
}
.containerr form a{
    color: #1a0000;
}
.containerr .input-container80{
    position: relative;
    width: 360px;
}
.success{
    color: white !important;
    background-color: green;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    position: absolute;
    top: 14px;
    right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.error{
    color:white !important;
    background-color:red;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    position: absolute;
    top: 14px;
    right: 7px;
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
@media only screen and (max-width: 700px){
    .containerr {
        height: 1000px;
    }
    .containerr .col-2{
        width: 90%;
    }
    .containerr .row{
        flex-direction: column;
        height: 1000px;
    }
}
</style>
<template>
  <div class="acc-body">
    <div class="account-page">
      <div class="containerr">
        <div class="row">
          <div class="col-2">
            <img src="src/assets/images/to.webp" alt="" width="100%" />
          </div>
          <div class="form-container2">
            <div class="form-btn">
              <span v-on:click="login">Login</span>
              <span v-on:click="register">Register</span>
              <hr ref="indicator" id="indicator"/>
            </div>
            <!-- Login -->
            <form
              method="post"
              id="loginForm"
              ref="loginForm"
              @submit.prevent="loginSubmit"
            >
              <div class="input-container80">
                <input type="text" 
                name="name"
                class="input"
                placeholder="UserName"
                required 
                v-model="loginUserame"
                v-on:input="loginUsernameValidation"
                />
                <a v-bind:class="{success:valid,hideSuccess:hideLoginUserSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
                <a v-bind:class="{error:invalid,hideError:hideLoginUserError}"><fa-icon icon="fa-solid fa-xmark"/></a>
              </div>
              <div class="input-container80">
                <input type="password" 
                name="loginPassword" 
                class="input"
                placeholder="Password"
                required
                v-model="loginPassword"
                v-on:input="loginPasswordValidation"
                />
                <a v-bind:class="{success:valid,hideSuccess:hideLoginPasswordSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
                <a v-bind:class="{error:invalid,hideError:hideLoginPasswordError}"><fa-icon icon="fa-solid fa-xmark"/></a>
              </div>
              <button type="submit" class="btn">Login</button>
              <a href="#">Forget Password</a>
            </form>
            <!-- Register -->
            <form
              method="post"
              id="registerForm"
              ref="registerForm"
              @:submit.prevent="registerSubmit"
            >
              <div class="input-container80">
                <input type="text" 
                name="name"
                class="input"
                placeholder="UserName"
                required 
                v-model="registerUsername"
                v-on:input="registerUserValidation"
                />
                <a v-bind:class="{success:valid,hideSuccess:hideRegisterUserSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
                <a v-bind:class="{error:invalid,hideError:hideRegisterUserError}"><fa-icon icon="fa-solid fa-xmark"/></a>
              </div>
              <div class="input-container80">
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
              <div class="input-container80">
                <input type="password" 
                name="registerPassword" 
                class="input"
                placeholder="Password"
                required
                v-model="registerPassword"
                v-on:input="registerPasswordValidation"
                />
                <a v-bind:class="{success:valid,hideSuccess:hideRegisterPasswordSeccess}"><fa-icon icon="fa-solid fa-check"/></a>
                <a v-bind:class="{error:invalid,hideError:hideRegisterPasswordError}"><fa-icon icon="fa-solid fa-xmark"/></a>
              </div>
              <button type="submit" class="btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      registerUsername:null,
      loginUserame:null,
      email:null,
      registerPassword:null,
      loginPassword:null,
      valid:true,
      invalid:true,
      hideRegisterUserSeccess:true,
      hideRegisterUserError:true,
      hideRegisterPasswordSeccess:true,
      hideRegisterPasswordError:true,
      hideEmailSeccess:true,
      hideEmailError:true,
      hideLoginUserSeccess:true,
      hideLoginUserError:true,
      hideLoginPasswordSeccess:true,
      hideLoginPasswordError:true,
      userCheck:/^[A-Za-z. ]{3,30}$/,
      emailCheck:/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
      passwordCheck:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    }
  },
  methods:{
    register(){
      let $registerRef=this.$refs["registerForm"];
      let $loginRef=this.$refs["loginForm"];
      let $indicator=this.$refs.indicator;
      $registerRef.style.transform="translateX(0px)";
      $loginRef.style.transform="translateX(0px)";
      $indicator.style.transform="translateX(100px)";
    },
    login(){
      let $registerRef=this.$refs["registerForm"];
      let $loginRef=this.$refs["loginForm"];
      let $indicator=this.$refs.indicator;
      $registerRef.style.transform="translateX(390px)";
      $loginRef.style.transform="translateX(390px)";
      $indicator.style.transform="translateX(0px)";
    },
    registerUserValidation($event){
      if(this.userCheck.test(this.registerUsername)){
        $event.target.style.border="1px solid green"
        this.hideRegisterUserSeccess=false;
        this.hideRegisterUserError=true
      }
      else if(this.registerUsername==""){
        $event.target.style.border="1px solid #e9a318"
        this.hideRegisterUserSeccess=true;
        this.hideRegisterUserError=true;
      }
      else{
        $event.target.style.border="1px solid red";
        this.hideRegisterUserError=false
      }
    },
    emailValidation($event){
      if(this.emailCheck.test(this.email)){
        $event.target.style.border="1px solid green"
        this.hideEmailSeccess=false;
        this.hideEmailError=true;
      }
      else if(this.email==""){
        $event.target.style.border="1px solid #e9a318";
        this.hideEmailSeccess=true;
        this.hideEmailError=true;
      }
      else{
        $event.target.style.border="1px solid red";
        this.hideEmailError=false;
      }
    },
    registerPasswordValidation($event){
      if(this.passwordCheck.test(this.registerPassword)){
        $event.target.style.border="1px solid green"
        this.hideRegisterPasswordSeccess=false;
        this.hideRegisterPasswordError=true;
      }
      else if(this.registerPassword==""){
        $event.target.style.border="1px solid #e9a318";
        this.hideRegisterPasswordSeccess=true;
        this.hideRegisterPasswordError=true;
      }
      else{
        $event.target.style.border="1px solid red";
        this.hideRegisterPasswordError=false;
      }
    },
    loginUsernameValidation($event){
      if(this.userCheck.test(this.loginUserame)){
        $event.target.style.border="1px solid green"
        this.hideLoginUserSeccess=false;
        this.hideLoginUserError=true
      }
      else if(this.loginUserame==""){
        $event.target.style.border="1px solid #e9a318"
        this.hideLoginUserSeccess=true;
        this.hideLoginUserError=true;
      }
      else{
        $event.target.style.border="1px solid red";
        this.hideLoginUserError=false
      }
    },
    loginPasswordValidation($event){
      if(this.passwordCheck.test(this.loginPassword)){
        $event.target.style.border="1px solid green"
        this.hideLoginPasswordSeccess=false;
        this.hideLoginPasswordError=true;
      }
      else if(this.loginPassword==""){
        $event.target.style.border="1px solid #e9a318";
        this.hideLoginPasswordSeccess=true;
        this.hideLoginPasswordError=true;
      }
      else{
        $event.target.style.border="1px solid red";
        this.hideLoginPasswordError=false;
      }
    },
    registerSubmit(){
    if( this.userCheck.test(this.registerUsername) && 
        this.emailCheck.test(this.email) &&
        this.passwordCheck.test(this.registerPassword)
      ){
        this.$router.push("/success");
      }
    },
    loginSubmit(){
    if( this.userCheck.test(this.loginUserame) &&  
        this.passwordCheck.test(this.loginPassword)
      ){
        this.$router.push("/success");
      }
    },
  }
}
</script>
 