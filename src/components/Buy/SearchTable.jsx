import React, { useState } from 'react';

const SearchTable = () => {
  const list = ['', '', '', '', ''];
  const [editStates, setEditStates] = useState({});

  const handleEdit = (index) => {
    setEditStates(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <section className="mt-2 overflow-scroll">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">日期</th>
            <th scope="col">單號</th>
            <th scope="col">客戶/供應商</th>
            <th scope="col">承辦人</th>
            <th scope="col">商品名稱</th>
            <th scope="col">實際到貨日期</th>
            <th scope="col">合計金額</th>
            <th scope="col">備註</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) =>
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="col-1">

              </td>
              <td className="col-1">

              </td>
              <td className="col-2">

              </td>
              <td className="col-1">

              </td>
              <td className="col-1">

              </td>
              <td className="col-2">

              </td>
              <td className="col-1">
              </td>
              <td className="col-1">
              </td>
              <td className="col-1">
                {editStates[index] ? (
                  <button type="submit" className="btn btn-success col-12" onClick={() => handleEdit(index)}>
                    儲存
                  </button>
                ) : (
                  <button type="submit" className="btn btn-outline-primary col-12" onClick={() => handleEdit(index)}>
                    修改
                  </button>
                )}
              </td>
              <td className="col-1">
                <button type="submit" className="btn btn-outline-danger col-12">
                  刪除
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default SearchTable;
