<style scoped>
.cart-body{
    padding-top: 100px;
}
.cart{
    width: 70%;
    margin: 0 auto;
    height: auto;
}
table{
    width: 100%;
    border-collapse: collapse;
}
.cart-info{
    display: flex;
    flex-wrap: wrap;
}
th{
    text-align: left;
    padding: 5px;
    color: #b8851f;
    background-color: #1a0000;
}
td{
    padding: 10px 5px;
}
td input{
    width: 40px;
    height: 30px;
    padding: 5px;
    border: 1px solid #e9a318;
    outline: none;
}
td a{
    color: red;
    font-size: 25px;
}
td img{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}
.total-price{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.total-price table{
   border-top:  3px solid #e9a318;
   width: 100%;
   max-width: 490px;
}
td:last-child{
    text-align: right;
}
th:last-child{
    text-align: right;
}
button{
    background-color: #1a0000;
    color: #b8851f;
    padding: 5px 20px;
    cursor: pointer;
    border-radius: 50px;
    font-size: 20px;
    border: 1px solid #1a0000;
}
button:hover{
    border: 1px solid #b8851f;
    background-color: #fff;
    color: #e9a318;
}
</style>
<template>
  <div class="cart-body">
    <div class="small-container cart">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr class="cart-row">
          <td>
            <div class="cart-info">
              <img src="src/assets/images/buy-1.jpg" alt="" />
              <div>
                <p>Red Pronted T-Shirt</p>
                <small>Price $50.00</small>
                <br />
                <a href="#" class="cart-remove"><fa-icon icon="fa-solid fa-trash-can"/></a>
              </div>
            </div>
          </td>
          <td><input class="cart-quantity" type="number" value="1" /></td>
          <td class="cart-price">$50.00</td>
        </tr>
      </table>
      <div class="total-price">
        <table>
          <tr>
            <td>Total</td>
            <td class="total-pricee">$10</td>
          </tr>
          <tr>
            <td></td>
            <td><button>Purshase</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>