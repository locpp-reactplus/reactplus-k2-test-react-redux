import React from 'react';
import "antd/dist/antd.css";
import './App.css'
import BookList from './Component/BookList';
import Delete from './Component/Delete';

function App() {

  
  return (
      <div className="App">
          <BookList/>
          <Delete/>
          {/* Em chưa hoàn thành được bài kiểm tra, có lẽ em chưa nắm chắc được kiến thức về redux lúc làm tốn nhiều thời gian để giải quyết các lỗi. Không kịp thời gian hoàn thiện các chức năng, Em sẽ cố gắng hơn ạ */}
      </div>
  );
}
export default App;
