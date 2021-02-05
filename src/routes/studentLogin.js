import React, { useState } from "react"
import PropTypes from "prop-types"

import StudentLoginForm from "../displays/studentLoginForm"

async function loginUser(credentials) {
  return fetch('http://localhost:4000/students/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(error => alert("Incorrect Admission Number or Password. Unable to Login"))
 }

const StudentLogin = ({ setToken }) => {
  const [student, setStudent] = useState({
    admNo: "",
    password: ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    setStudent({...student, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { admNo, password } = student
    const response = await loginUser({ admNo, password })
    setToken(response.token)
  }

  return (
    <div>
      <StudentLoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        student={student}
      />
    </div>
  )
}


export default StudentLogin


StudentLogin.propTypes = {
  setToken: PropTypes.func.isRequired
};