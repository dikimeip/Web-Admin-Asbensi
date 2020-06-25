import React from 'react';
import { Link } from 'react-router-dom';

const GajiList = (props) => {
    const List = props.data.map((data, i) => (
        <tbody key={data.idGaji}>
            <tr>
                <td>{i + 1}</td>
                <td>NAMA USER</td>
                <td>{data.Bulan}</td>
                <td>{data.Tahun}</td>
                <td>{data.Total}</td>
                <td>{data.Created_at}</td>
                <td>
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
                    <th>BULAN</th>
                    <th>TAHUN</th>
                    <th>TOTAL</th>
                    <th>CREATED</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default GajiList