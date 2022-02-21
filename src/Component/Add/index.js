import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Product/productAction';

function Add(props) {
    const [code, setCode]=useState()
    const [name, setName]= useState("")
    const dispatch = useDispatch()
    const handleAdd = (id)=>
    {
        dispatch(addProduct({
            product_code: code,
            product_name: name,
            id: "1000"
        }))
    }
    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Thêm
            </button>
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thêm sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Mã sản phẩm</label>
                                    <input onChange={e=>setCode(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Tên sản phẩm</label>
                                    <input onChange={e=>setName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button  onClick={()=>handleAdd()} type="button" className="btn btn-primary">Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add;