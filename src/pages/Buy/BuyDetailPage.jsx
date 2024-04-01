import React from 'react'
import DetailTable from '../../components/Buy/DetailTable'

const BuyDetailPage = () => {
  return (
    <article className="my-4 px-5">
      <h4 className="mb-4">採購單明細</h4>
      <section>
        <DetailTable />
      </section>
    </article>
  )
}

export default BuyDetailPage
