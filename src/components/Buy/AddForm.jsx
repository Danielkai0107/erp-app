import React from 'react'
import DateInput from '../Input/DateInput'
import SelectInput from '../Input/SelectInput'

const AddForm = () => {
  return (
    <form>
      <div className="row mb-4">
        <div className="col-md-2 mb-3">
          <DateInput title={'日期'} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'供應商'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'承辦人'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="mb-3 col-md-2">
          <DateInput title={'交付日期'} />
        </div>
        <div className="mb-3 col-md-2">
          <SelectInput title={'狀態'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="mb-3 col-md-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            備註
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>
      </div>


    </form>
  )
}

export default AddForm
