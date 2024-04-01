import React, { useState } from 'react'
import BuyNavbar from '../components/Buy/BuyNavbar'
import AddForm from '../components/Buy/AddForm'
import AddTable from '../components/Buy/AddTable'
import SearchForm from '../components/Buy/SearchForm'
import SearchTable from '../components/Buy/SearchTable'
import DeleteForm from '../components/Buy/DeleteForm'
import DeleteTable from '../components/Buy/DeleteTable'
import EditForm from '../components/Buy/EditForm'
import EditTable from '../components/Buy/EditTable'

const BuyPage = () => {
  const [func, setFunc] = useState(1)
  const handleChangeFunc = (num) => {
    setFunc(num)
  }
  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">採購單</h4>
      <BuyNavbar info={'採購單'} handleChangeFunc={handleChangeFunc} />
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

export default BuyPage
