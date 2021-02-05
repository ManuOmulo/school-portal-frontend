import React, { useState, useEffect } from "react"
import axios from "axios"

import Student from "../displays/student"

const StudentDetails = () => {

  const [student, setStudent] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/me")
      .then(res => setStudent(res.body))
      .catch(error => (alert(error.error)))
  })

  return (
    <Student
      student={student}
    />
  )
}

export default StudentDetails