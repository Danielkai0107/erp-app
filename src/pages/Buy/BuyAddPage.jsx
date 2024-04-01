import React, { } from 'react'
import AddForm from '../../components/Buy/AddForm'
import AddTable from '../../components/Buy/AddTable'

const BuyAddPage = () => {

  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">採購單</h4>
      <section className='border border-secondary rounded-3 p-4'>
        <AddForm />
        <AddTable />
        <button className="btn btn-primary mt-4">
          儲存送出
        </button>
      </section>
    </article>
  )
}

export default BuyAddPage
