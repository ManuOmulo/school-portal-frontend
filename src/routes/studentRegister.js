import React, { useState } from "react"
import axios from "axios"

import StudentForm from "../displays/studentRegisterForm"

const StudentLogin = () => {

  const [student, setStudent] = useState({
    name: "",
    admNo: "",
    school: "",
    password: ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    setStudent({...student, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:4000/students/register", student)
      .then(() => alert(`Student ${student.name} submitted`))
      .catch(error => alert(error))
  }

  return (
    <StudentForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      student={student}
    />
  )
}

export default StudentLogin