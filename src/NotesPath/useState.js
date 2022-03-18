// Unlike Javascript in JSX (React) if we don't use State then we can't update variables values as the page will not render automatically in React. So for that we use useState method.

import React, {useState} from 'react'

const UseState = () => {
    const [data, setData] = useState(0);
    const increval = () => {
        setData(data + 1);
    }
  return (
    <>
    <h1>Count : {data}</h1>
    <button onClick={increval}>Click Here</button>
    </>
  )
}

export default UseState;