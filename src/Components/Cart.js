import React from 'react'

function Cart({ cartItems }) {


    var totalPrice = 0;
    for (let index = 0; index < cartItems.length; index++) {
        totalPrice += cartItems[index].price
    }

    if (cartItems.length === 0) {
        return <h1>No Items Added</h1>
    }
    return (<div className="cart container">
        <table className="table">
            <thead className="bg-primary">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="bg-warning">
                {
                    cartItems.map((item) => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    })
                }
            </tbody>
            <thead className="bg-primary">
                <tr>
                    <th>Total</th>
                    <th>{totalPrice}</th>
                </tr>
            </thead>
        </table>
        <div className="text-center"><button className="btn bg-success">CHECKOUT</button></div>
    </div>)
}

export default Cart;