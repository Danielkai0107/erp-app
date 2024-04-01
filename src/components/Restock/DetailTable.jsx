import React, { } from 'react';

const DetailTable = () => {
  const list = ['', '', '', '', '']
  return (
    <section className="mt-2 overflow-scroll">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">日期-單號</th>
            <th scope="col">品項名稱</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
            <th scope="col">合計金額</th>
            <th scope="col">廠商名稱</th>
            <th scope="col">備註</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) =>
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="col-2">
              </td>
              <td className="col-2">
              </td>
              <td className="col-1">
              </td>
              <td className="col-2">
              </td>
              <td className="col-2">
              </td>
              <td className="col-2">
              </td>
              <td className="col-1">
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </section>
  );
};

export default DetailTable;
