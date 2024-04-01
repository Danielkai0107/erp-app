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
          <SelectInput title={'供應商'} list={['文華酒店', '華奇有限公司', '大日電機']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'承辦人'} list={['001', '002', '003']} />
        </div>
        <div className="mb-3 col-md-2">
          <DateInput title={'交付日期'} />
        </div>
        <div className="mb-3 col-md-2">
          <SelectInput title={'狀態'} list={['在途中', '已送達', '未出貨', '已驗收待入褲']} />
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
