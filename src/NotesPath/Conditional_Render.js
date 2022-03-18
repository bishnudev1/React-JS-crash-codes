import React, { useState } from 'react'

const Conditional_Render = () => {
    const [user, setUser] = useState(3);
  return (
    <>
    {
        user == 1 ? <h1>Hello User 1</h1> : user == 2 ? <h1>Hello User 2</h1> : user == 3 ? <h1>Hello User 3</h1> : null
    }
    </>
  )
}

export default Conditional_Render;