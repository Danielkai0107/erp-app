import React from 'react'
import DateInput from '../Input/DateInput'
import SelectInput from '../Input/SelectInput'

const AddForm = () => {
  return (
    <form>
      <div className="row mb-4">
        <div className="col-2 mb-3">
          <DateInput title={'日期'} />
        </div>
        <div className="col-2 mb-3">
          <SelectInput title={'客戶/供應商'} list={['文華酒店', '華奇有限公司', '大日電機']} />
        </div>
        <div className="col-2 mb-3">
          <SelectInput title={'承辦人'} list={['001', '002', '003']} />
        </div>
        <div className="mb-3 col-2">
          <DateInput title={'交付日期'} />
        </div>
        <div className="mb-3 col-2">
          <SelectInput title={'交易類型'} list={['營業稅', '未稅']} />
        </div>
        <div className="mb-3 col-2">
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
