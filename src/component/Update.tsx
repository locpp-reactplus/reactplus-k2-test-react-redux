import React from 'react';


const Update: React.FC = () => {
  return (
    <div>
        <h1>Sửa sản phẩm</h1>
        <label htmlFor="">Mã sản phẩm</label>
        <input type="text" />
        <br />
        <label htmlFor="">Tên sản phẩm </label>
        <input type="text" />
        <br />
        <button>ADD</button>
        <button>Cancel</button>
    </div>
  );
}

export default Update;