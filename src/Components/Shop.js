import React from 'react'

function Shop({ products, addItemInCart }) {
    return <div className="shop container d-flex flex-wrap">
        {
            products.map((product) => {
                return <div className="card" key={product.name}>
                    <img className="card-img-top" src={product.imgURL} alt={product.name}></img>
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h4 className="card-title text-center">{product.name}</h4>
                        <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eius?</p>
                        <h6 className="card-title text-center">	&#x20B9;&nbsp;{product.price}</h6>
                        <button className="btn mx-auto btn-primary" onClick={() => addItemInCart(product)}><i className="fas fa-cart-plus"></i>&nbsp;&nbsp;Add to Cart</button>
                    </div>
                </div>
            })
        }
    </div>
}

export default Shop