import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import ModalAdd from './ModalAdd';
import { useSelector, useDispatch } from 'react-redux';
import { dataVluae, FomData, GetData } from '../redux/reducer';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

const Home = () => {
    const datavl = useSelector(dataVluae);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(GetData());
    },[])


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, vl) => (
        <Space size="middle">
          <a onClick={()=>dispatch(FomData(vl))}><ModalUpdate/></a>
          <a onClick={()=>dispatch(FomData(vl))}><ModalDelete/></a>
        </Space>
      ),
    },
  ];
  
  return (
    <>
    <ModalAdd/>,
    <Table columns={columns}
    dataSource={
        datavl.map((vl,index)=>(
            {
                key: index,
                name: vl.name,
                price: vl.price,
                id : vl.id,
            }
        ))
    } />
    </>
  )
}

export default Home