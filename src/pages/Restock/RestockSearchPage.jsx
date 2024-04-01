import React, { } from 'react'

import SearchTable from '../../components/Restock/SearchTable'
import SearchForm from '../../components/Restock/SearchForm'

const RestockSearchPage = () => {
  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">查詢進貨單</h4>
      <section>
        <SearchForm />
        <SearchTable />
      </section>
    </article>
  )
}

export default RestockSearchPage
