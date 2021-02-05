import React from "react"

const StudentForm = (props) => {

  const { handleChange, handleSubmit, student } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={student.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-input">
        <label>Admission Number</label>
        <input
          name="admNo"
          type="text"
          value={student.admNo}
          onChange={handleChange}
        />
      </div>

      <div className="form-input">
        <label>School</label>
        <input
          name="school"
          type="text"
          value={student.school}
          onChange={handleChange}
        />
      </div>

      <div className="form-input">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={student.password}
          onChange={handleChange}
        />
      </div>

      <div className="submit-button">
        <input type="submit" value="Submit" />
      </div>

    </form>
  )
}

export default StudentForm