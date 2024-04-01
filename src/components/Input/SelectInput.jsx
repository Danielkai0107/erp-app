import React from 'react'

const SelectInput = ({ title, list , sub}) => {
  return (
    <>
      {title && <label htmlFor="validationCustom04" className="form-label">
        {title}
      </label>}
      <select className="form-select" id="validationCustom04" required>
        <option selected disabled value="">
          {sub} 
        </option>
        {
          list.map((item, index) => <option key={index}>{item}</option>)
        }
      </select>
    </>
  )
}

export default SelectInput
