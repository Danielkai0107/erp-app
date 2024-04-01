import React, { } from 'react'

import SearchTable from '../../components/Buy/SearchTable'
import SearchForm from '../../components/Buy/SearchForm'

const BuySearchPage = () => {
  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">查詢採購單</h4>
      <section>
        <SearchForm />
        <SearchTable />
      </section>
    </article>
  )
}

export default BuySearchPage
