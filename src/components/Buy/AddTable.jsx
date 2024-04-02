import React, { useState } from 'react';
import SelectInput from '../Input/SelectInput';

const AddTable = () => {
  const [rows, setRows] = useState([{ quantity: 0, unitPrice: 0, preTaxPrice: 0, salesTax: 0 }]);

  const addRow = () => {
    setRows([...rows, { quantity: 0, unitPrice: 0, preTaxPrice: 0, salesTax: 0 }]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };


  return (
    <section className="mt-2 overflow-scroll">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">商品料號</th>
            <th scope="col">商品名稱</th>
            <th scope="col">單價</th>
            <th scope="col">數量</th>
            <th scope="col">備註</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="col-2">
                <SelectInput title={null} list={['選項一', '選項二', '選項三']} />
              </td>
              <td className="col-2">
                <input
                  className="form-control"
                  type="text"
                  readOnly
                />
              </td>
              <td className="col-2">
                <input
                  className="form-control"
                  type="number"
                  value={row.quantity}
                />
              </td>
              <td className="col-2">
                <input
                  className="form-control"
                  type="number"
                  value={row.quantity}
                />
              </td>
              <td className="col-2">
                <input
                  className="form-control"
                  type="text"
                />
              </td>
              <td className="col-1">
                <button className="btn" onClick={() => deleteRow(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline-secondary" onClick={addRow}>
        新增商品
      </button>
      {/* <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">合計金額</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row"></th>
            <td className="col-2">
              <input
                className="form-control"
                type="number"
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
};

export default AddTable;
