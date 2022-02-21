import React from 'react';

function Edit(props) {
    const name = localStorage.getItem('name')
    const price = localStorage.getItem('price')
    console.log(name + price);
    return (
        <>
            <div className="modal fade" id="update" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Sửa thông tin sách</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Tên sách</label>
                                    <input value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Giá</label>
                                    <input value={price} type="text" className="form-control" id="exampleInputPassword1"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;