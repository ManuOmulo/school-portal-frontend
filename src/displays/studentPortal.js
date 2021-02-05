import React from 'react'
import { Switch } from "react-router-dom"

import StudentLogin from "../routes/studentLogin"
import StudentDetails from "../routes/studentDetails"

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem("token")
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}

const StudentPortal = () => {
  const token = getToken()

  if (!token) {
    return <StudentLogin setToken={setToken}/>
  }

  return (
    <div>
      <Switch>
        <StudentDetails />
      </Switch>
    </div>
  )
}

export default StudentPortal
