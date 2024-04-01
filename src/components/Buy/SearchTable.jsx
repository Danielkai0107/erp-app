import React, { useState } from 'react';
import SelectInput from '../Input/SelectInput';

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
            <th scope="col">日期-單號</th>
            <th scope="col">承辦人</th>
            <th scope="col">廠商名稱</th>
            <th scope="col">品項名稱</th>
            <th scope="col">交付日期</th>
            <th scope="col">合計金額</th>
            <th scope="col">狀態</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) =>
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="col-2">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
              </td>
              <td className="col-1">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
              </td>
              <td className="col-2">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
              </td>
              <td className="col-2">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
              </td>
              <td className="col-1">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
              </td>
              <td className="col-1">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
              </td>
              <td className="col-1">
                {editStates[index] ? <SelectInput list={[]} /> : ''}
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
