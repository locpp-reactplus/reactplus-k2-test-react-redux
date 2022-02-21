import React, { useState } from 'react';
import { handleAdd } from '../handle/handle';

const Add: React.FC = () => {
  const [maSp, setMaSp] = useState('');
  const [tenSp, setTenSp] = useState('');

  return (
    <div>
      <h2>Thêm sản phẩm </h2>
      <label htmlFor="">Mã sản phẩm</label>
      <input type="text"
        onChange={(e) => setMaSp(e.target.value)}
      />
      <br />
      <label htmlFor="">Tên sản phẩm </label>
      <input type="text"
        onChange={(e) => setTenSp(e.target.value)}
      />
      <br />
      <button onClick={() => {
        const product = {
          product_code: maSp,
          product_name: tenSp
        }
        return handleAdd(product)
      }}>ADD</button>
      <button>Cancel</button>
    </div>
  );
}

export default Add;