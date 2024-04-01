import React, { } from 'react';


const SearchTable = () => {

  return (
    <section className="mt-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">單號</th>
            <th scope="col">商品料號</th>
            <th scope="col">商品名稱</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
            <th scope="col">稅前價格</th>
            <th scope="col">營業稅</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td className="col-2">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
            <td className="col-2">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
            <td className="col-2">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
            <td className="col-2">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
            <td className="col-2">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
            <td className="col-1">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
            <td className="col-1">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
          </tr>

        </tbody>
      </table>
    </section>
  );
};

export default SearchTable;
