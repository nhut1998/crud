import React, { useState } from 'react'
import ListChild from './ListChild'

export default function List({ list, closeList,changeSearch,onChangeSearch,search }) {
    const [listFilter, setFilter] = useState(-1)
  

  

    const onChangeStt = (e) => {
      
        setFilter(parseInt(e.target.value,10))
      
    }
    // console.log(typeof listFilter)
    
  

    return (
        
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MSSV</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Cài đặt </th>
                    </tr>

                </thead>
                <tbody id="danh-sach-nhan-vien">
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <input type='text' value={search} 
                            onChange={(e)=> onChangeSearch (e)}
                            onKeyDown={()=> changeSearch()}
                            
                            ></input>
                            
                        </td>
                        <td>
                            <select className="form-control" value={listFilter} onChange={(e) => onChangeStt(e)} >

                                <option value={-1}>Tất cả</option>
                                <option value={0}>Kích hoạt</option>
                                <option value={1}>Ẩn</option>

                            </select>
                            {/* <button className='btn btn-primary' onClick={() => setFilter('All')}>All</button>
                            <button className='btn btn-secondary' onClick={() => setFilter(false)}>Active</button>
                            <button className='btn btn-info' onClick={() => setFilter(true)}>Completed</button> */}
                        </td>
                    </tr>
                    
                    {
                        list.reduce((arrFilter, item, index) => {
                            const todoItem = (
                                <ListChild
                                    key={item.id}
                                    index={index}
                                    status={item.status}
                                    closeList={closeList}
                                    data={item}


                                />
                            )
                            if (listFilter === -1 || listFilter === item.status) {
                                arrFilter.push(todoItem)
                            }
                        
                            return arrFilter

                        }, [])
                    }


                    {/* {
                        list.map((item, index) => {



                            return (
                                <ListChild
                                    key={item.id}
                                    index={index}
                                    status={item.status}
                                    closeList={closeList}
                                    data={item}


                                />

                            )

                        })
                    } */}


                </tbody>
            </table>

        </div>
    )
}
