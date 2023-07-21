import React from 'react'

function User(props) {
    const {data} = props
  return (
    <div>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        <h2>{data.profession}</h2>
    </div>
  )
}

export default User
