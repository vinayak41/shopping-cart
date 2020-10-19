import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return <div className="home container-fluid d-flex flex-column text-center">
        <h1>E-Shop</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi enim sed optio ad tempore vero accusantium! Porro, quasi asperiores fugiat quam dolorum natus quos at officiis nam enim alias, ad minima. Perferendis, quibusdam laudantium.</p>
        <button className="shop-button"><Link to="/Shop">START &nbsp; SHOPPING</Link></button>
    </div>
}


export default Home