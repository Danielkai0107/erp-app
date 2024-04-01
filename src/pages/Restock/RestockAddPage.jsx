import React, { } from 'react'
import AddForm from '../../components/Restock/AddForm'
import AddTable from '../../components/Restock/AddTable'

const RestockAddPage = () => {

  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">進貨單</h4>
      <section className='border border-secondary rounded-3 p-4'>
        <AddForm />
        <AddTable />
        <button className="btn btn-primary mt-4">
          採購轉進貨
        </button>
      </section>
    </article>
  )
}

export default RestockAddPage
