import React from 'react'

export default function ListChild({index,data,status,closeList }) {
    console.log(data)
    return (
            <tr>
                <td>{index+1}</td>
                <td>{data.mssv}</td>
                <td>{data.name}</td>
                <td>
                    <span className={`${!status ? 'activated': 'hide'}`}>{!status?'Kích hoạt':'Ẩn'}</span>
                </td>
                <td>
                    <button type="button" className='btn btn-danger'
                    onClick={()=>closeList(data.id)}
                    
                    >Close</button>
                </td>
            </tr>
            


        
    )
}
