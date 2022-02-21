import React from 'react';

function Update(props) {
    const code = localStorage.getItem('code')
    const name = localStorage.getItem('name')
    console.log(name + code);
    return (
        <>
            <div className="modal fade" id="update" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Chỉnh sửa sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Mã sản phẩm</label>
                                    <input value={code} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Tên sản phẩm</label>
                                    <input value={name} type="text" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary">Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;