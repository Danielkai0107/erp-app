import React from 'react'

const BuyNavbar = ({ info, handleChangeFunc }) => {
  return (
    <div className="mb-4">
      <button className='btn btn-outline-primary px-4 me-2' onClick={() => { handleChangeFunc(1) }}>新增</button>
      <button className='btn btn-outline-primary px-4 mx-2' onClick={() => { handleChangeFunc(2) }}>修改</button>
      <button className='btn btn-outline-primary px-4 mx-2' onClick={() => { handleChangeFunc(3) }}>刪除</button>
      <button className='btn btn-outline-primary px-4 mx-2' onClick={() => { handleChangeFunc(4) }}>查詢</button>
    </div>
  )
}

export default BuyNavbar
