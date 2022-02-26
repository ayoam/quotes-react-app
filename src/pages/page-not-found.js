import React from 'react'
import classes from "./page-not-found.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.wrapper}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  )
}

export default PageNotFound