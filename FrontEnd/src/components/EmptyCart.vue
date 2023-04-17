<style scoped>
.containar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.containar img{
    width: 500px;
    height: 500px;
}
.orange-red{
    color: orangered;
}
.darkblue{
    color: darkblue;
}
.fw-600{
    font-weight: 600;
}
</style>
<template>
<div>
    <div class="containar my-5" style="tex-align:center">
        <img src="src/assets/images/9552.png" alt="">
        <div class="mt-4">
            <h4 class="orange-red fw-600">Your Cart is Empty</h4>
            <h5 class="darkblue fw-600">You Can go to Home Page to view more Items.</h5>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:"EmptyCart"
};
</script>
