import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from "./displays/nav"
import StudentRegister from "./routes/studentRegister"
import StudentPortal from "./displays/studentPortal"

function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/students/register" component={StudentRegister}/>
          <Route exact path="/portal" component={StudentPortal} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
