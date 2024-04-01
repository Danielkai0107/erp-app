import React from 'react'

const DateInput = ({title}) => {
  return (
    <>
      <label htmlFor="exampleInputEmail1" className="form-label">
        {title}
      </label>
      <input
        type="date"
        className="form-control"
        id="exampleInputEmail1"
        required
      />
    </>
  )
}

export default DateInput
