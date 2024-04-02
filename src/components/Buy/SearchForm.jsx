import React from 'react'
import DateInput from '../Input/DateInput'
import SelectInput from '../Input/SelectInput'

const SearchForm = () => {
  return (
    <form>
      <div className="row mb-4">
        <div className="col-md-2 mb-3">
          <DateInput title={'日期'} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'採購單單號'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'承辦人'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'客戶/供應商'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'商品名稱'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="col-md-1 mb-3">
          <SelectInput title={'狀態'} list={['選項一', '選項二', '選項三']} />
        </div>
        <div className="mb-3 d-flex gap-3">
          <button type="submit" className="btn btn-secondary">
            查詢
          </button>
        </div>

      </div>

    </form>
  )
}

export default SearchForm
