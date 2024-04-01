import React, { useState } from 'react'
import BuyNavbar from '../components/Buy/BuyNavbar'
import AddForm from '../components/Restock/AddForm'
import AddTable from '../components/Restock/AddTable'
import SearchForm from '../components/Restock/SearchForm'
import SearchTable from '../components/Restock/SearchTable'
import DeleteForm from '../components/Restock/DeleteForm'
import DeleteTable from '../components/Restock/DeleteTable'
import EditForm from '../components/Restock/EditForm'
import EditTable from '../components/Restock/EditTable'


const RestockPage = () => {
  const [func, setFunc] = useState(1)
  const handleChangeFunc = (num) => {
    setFunc(num)
  }
  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">進貨單</h4>
      <BuyNavbar info={'進貨單'} handleChangeFunc={handleChangeFunc} />
      {
        func === 1 &&
        <section className='border border-secondary p-4'>
          <AddForm />
          <AddTable />
          <button className="btn btn-primary mt-4">
            儲存送出
          </button>
        </section>
      }
      {
        func === 2 &&
        <section>
          <EditForm />
          <EditTable />
        </section>
      }
      {
        func === 3 &&
        <section>
          <DeleteForm />
          <DeleteTable />
        </section>
      }
      {
        func === 4 &&
        <section>
          <SearchForm />
          <SearchTable />
        </section>
      }
    </article>
  )
}

export default RestockPage
