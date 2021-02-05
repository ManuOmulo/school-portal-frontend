import React from "react"

const LoginForm = (props) => {

  const { student, handleChange, handleSubmit } = props

  return (
    <div className="login-form">
      <div>
        <h2>Please Login</h2>
      </div>

      <form onSubmit={handleSubmit}>

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
    </div>
  )
}

export default LoginForm