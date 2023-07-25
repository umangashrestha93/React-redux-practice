import React from 'react'


function Header(props) {
    console.warn("Header", props.data)
  return (
    <div>
        <div className='cart-container'>
          <span className='cart-count'>{props.data.length}</span>
            <img src='https://th.bing.com/th/id/R.6dd78e14d5d811845adc15e864c6da64?rik=XXUPbV4dz%2bxIHw&pid=ImgRaw&r=0' />
        </div>
    </div>
  )
}

export default Header
