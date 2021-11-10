import React from 'react'

export default function TaskForm({ change,changeMssv, handleInput,changeSelecter,rest,listName,status, }) {
    return (
        <div>
            <div>Thêm công việc</div>
            <form onSubmit={(e) => handleInput(e)}  >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên</label>
                    <input type="text" className="form-control"
                        onChange={(e) => change(e)}
                        value={listName.name}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">MSSV</label>
                    <input type="text" className="form-control"
                        onChange={(e) => changeMssv(e)}
                        value={listName.mssv}
                      
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Trạng thái</label>
                    <select value={status} className="form-select" onChange={(event)=>changeSelecter(event)}>
                       
                        <option value={0}>Kích hoạt</option>
                        <option value={1}>Ẩn</option>

                    </select>

                </div>

                <button type="submit" className="btn btn-primary"
              
              >Lưu lại</button>
                <button type="reset"onClick={()=>rest()} className="btn btn-info">Hủy bỏ</button>
            </form>

        </div>
    )
}
