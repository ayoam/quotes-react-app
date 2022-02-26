import React from 'react'
import classes from "../layout/MainNavigation.module.css"
import { NavLink } from "react-router-dom" 

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newQuote" activeClassName={classes.active}>
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation