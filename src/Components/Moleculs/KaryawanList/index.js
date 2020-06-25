import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const KaryawanList = (props) => {
    const List = props.data.map((res, i) => (
        <tbody key={res.idUser}>
            <tr key={res.idUser}> 
                <td>{i + 1}</td>
                <td>{res.NamaUser}</td>
                <td>{res.Nik}</td>
                <td>{res.Subag}</td>
                <td>{res.FotoUser}</td>
                <td>
                    <Link to={"/karyawans/detail/"+res.idUser} className="btn btn-info" style={{marginRight:10}}>SHOW</Link>
                    <Button type="primary" onClick={() => props.MyDel(res.idUser)} style={{marginRight:10}}>DELETE</Button>
                    <Link to={"/karyawans/edit/"+res.idUser} className="btn btn-success">EDIT</Link>
                </td>
            </tr>
        </tbody>
    ))
 
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAMA</th>
                    <th>NIK</th>
                    <th>JABATAN</th>
                    <th>FOTO</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default KaryawanList