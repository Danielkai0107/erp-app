import React from 'react'
import DetailTable from '../../components/Restock/DetailTable'

const RestockDetailPage = () => {
  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">進貨單明細</h4>
      <section>
        <DetailTable />
      </section>
    </article>
  )
}

export default RestockDetailPage
