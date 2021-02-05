import React from "react"

const Student = (props) => {

  const { name, admNo, fees, school } = props.student
  return (
    <div className="student">
      <h2><small>{admNo}</small>{name}</h2>
      <h3>{school}</h3>
      <p>{fees}</p>
    </div>
  )
}

export default Student