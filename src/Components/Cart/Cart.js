import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total,prd)=>total + prd.price,0);
    let totalPrice = 0;
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index];
        totalPrice = total + product.price;

    }
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if
        (totalPrice > 20) {
        shipping = 4.50;
    }
    else if (totalPrice > 0) {
        shipping = 12.50;
    }
    const tax = Math.round(total / 10);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Numbers(precision);
    }
    return (
        <div>
            <h4>Order Summary :{cart.length}</h4>
            <p>Product price:{totalPrice}</p>
            <p><small>Shipping Cost :{formatNumber(shipping)}</small></p>
            <p><small>Tax + VAT : {formatNumber(tax)}</small></p>
            <p>total : {formatNumber(totalPrice + shipping + tax)}</p>
        </div>
    );
};

export default Cart;