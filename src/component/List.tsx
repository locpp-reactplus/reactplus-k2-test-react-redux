import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const initlist = [
    {
        product_code: 'SP001',
        product_name: 'Sản phẩm 1'
    },

]

const List: React.FC = () => {
    const [listProduct, setListProduct] = useState(initlist); 

    useEffect(()=>{
        fetch(`https://61b75f1864e4a10017d18ada.mockapi.io/api/products`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                
                setListProduct(posts);
            })
        }, [])
    return (
        <div >
            <button><Link to="/add">Add</Link></button>
            <table className='tableList'>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên sản phẩm</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct.map((sp, i) => (
                        <tr key={i}>
                            <td>{sp.product_code || 1}</td>
                            <td>{sp.product_name}</td>
                            <td>
                                <button><Link to="/update">UPDATE</Link></button>
                                <button><Link to="/delete">DELETE</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;