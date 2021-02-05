import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/noticeboard">Noticeboard</Link>
      <Link to="/portal">Portal</Link>
    </div>
  )
}

export default Nav