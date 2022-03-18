import React from 'react'
import { BrowserRouter as Router, Link,Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';


const RouteBasic = () => {
  return (
    <>
        <h1>Basic Route Method in React</h1>
        <Router>
            <Link to="/error">Error Page</Link>

            <Route path="/error"><ErrorPage /></Route>
        </Router>
    </>
  )
}

export default RouteBasic;