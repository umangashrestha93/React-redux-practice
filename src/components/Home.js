import React from 'react'


function Home(props) {
    console.warn("Home", props.data)
  return (
    <div>
        <div className='cart-container'>
          <span className='cart-count'>{props.data.length}</span>
            <img src='https://th.bing.com/th/id/R.6dd78e14d5d811845adc15e864c6da64?rik=XXUPbV4dz%2bxIHw&pid=ImgRaw&r=0' />
        </div>
      <h1>Home</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper'>
            <img src='https://th.bing.com/th/id/R.5827f47bfcf9a29eb68b416a94140c0d?rik=vycCQMlyWNQBTA&pid=ImgRaw&r=0' />
        </div>
        <div className='text-wrapper item'>
            <span>
                Iphone 14
            </span>
            <span>
                price: Rs.130000
            </span>
        </div>
        <div className='btn-wrapper item'>
            <button onClick={()=>props.addToCartHandler({price: 130000, name: 'Iphone 14'})}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
