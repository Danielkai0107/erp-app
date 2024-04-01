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

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    // 更新稅前價格
    const quantity = newRows[index].quantity;
    const unitPrice = newRows[index].unitPrice;
    newRows[index].preTaxPrice = (quantity * unitPrice).toFixed(2);

    // 更新營業稅
    newRows[index].salesTax = (newRows[index].preTaxPrice * 0.05).toFixed(2);

    setRows(newRows);
  };

  return (
    <section className="mt-2">
      <div className='row mb-2'>
        <div className='col-2'>
          <SelectInput title={''} sub={'選擇採購單...'} list={["第一單", "第二單"]} />
        </div>
        <button className='btn btn-outline-primary col-2' onClick={addRow}>匯入採購單</button>
      </div>
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
          {rows.map((row, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
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
                  type="text"
                  readOnly
                />
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
                  onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                />
              </td>
              <td className="col-2">
                <input
                  className="form-control"
                  type="number"
                  value={row.unitPrice}
                  onChange={(e) => handleInputChange(index, 'unitPrice', e.target.value)}
                />
              </td>
              <td className="col-1">
                <input
                  className="form-control"
                  type="number"
                  value={row.preTaxPrice}
                  readOnly
                />
              </td>
              <td className="col-1">
                <input
                  className="form-control"
                  type="number"
                  value={row.salesTax}
                  readOnly
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

    </section>
  );
};

export default AddTable;
