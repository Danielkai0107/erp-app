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
          <SelectInput title={'單號'} list={['文華酒店', '華奇有限公司', '大日電機']} />
        </div>
        <div className="col-md-1 mb-3">
          <SelectInput title={'承辦人'} list={['文華酒店', '華奇有限公司', '大日電機']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'廠商名稱'} list={['文華酒店', '華奇有限公司', '大日電機']} />
        </div>
        <div className="col-md-2 mb-3">
          <SelectInput title={'商品名稱'} list={['233454', '0040454', '549523']} />
        </div>
        <div className="col-md-1 mb-3">
          <SelectInput title={'狀態'} list={['在途中', '已送達', '未出貨', '已驗收待入褲']} />
        </div>
        <div className="col-md-2 mb-3">
          <DateInput title={'交付日期'} />
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
