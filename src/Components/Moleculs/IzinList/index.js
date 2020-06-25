import React from 'react';
import { Link } from 'react-router-dom';

const IzinList = (props) => {
    const List = props.data.map((data, i) => (
        <tbody key={data.idIzin}>
            <tr>
                <td>{i + 1}</td>
                <td>NAMA USER</td>
                <td>{data.JenisIzin}</td>
                <td>FOTO</td>
                <td>{data.TanggalIzin}</td>
                <td>
                    <Link className="btn btn-success" style={{ marginRight: 10 }}>UPDATE</Link>
                    <Link className="btn btn-danger" style={{ marginRight: 10 }}>DELETE</Link>
                    <Link className="btn btn-primary">EDIT</Link>

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
                    <th>JENIS IZIN</th>
                    <th>FOTO</th>
                    <th>TANGGAL</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default IzinList