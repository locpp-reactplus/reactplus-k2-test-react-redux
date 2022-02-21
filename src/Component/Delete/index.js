import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveProduct } from '../../redux/Product/productAction';
function Delete(props) {
    const dispatch = useDispatch()
    const handleDelete = (id)=>
    {
        dispatch(RemoveProduct(id))
    }
    return (
        <>
            
            <div className="modal fade" id="delete" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Xóa sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Bạn có chắc chắn muốn xóa sản phẩm?</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button onClick={()=>handleDelete()} type="button" className="btn btn-primary">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Delete;