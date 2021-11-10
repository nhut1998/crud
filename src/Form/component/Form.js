import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Control from './Control'
import List from './List'
import '../css/form.css'
import { useEffect } from 'react'
// import ListChild from './ListChild'


export default function Form() {
    const [listName, setListName] = useState({
        name: '',
        mssv: ''

    })
    const [search, setSearch]=useState('')

    const [list, setList] = useState([])


    const [status, setStatus] = useState(0)

    const changeList = (e) => {
        setListName({ ...listName, name: e.target.value })


    }
    const changeMssv = (e) => {
        setListName({ ...listName, mssv: e.target.value })


    }
    const changeSelecter = (event) => {
        setStatus(event.target.value)

    }
    const onChangeSearch = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
     
 
    }
    useEffect(()=>{

    },[search])
    

    const changeSearch = () => {
        //  const listClone = [...list]
        // const nhut=list.filter((searchedArr, stu) => {

        //     if (~stu.listName.name.toLowerCase().indexOf(str.toLowerCase().trim())) searchedArr.push(stu)
        //     return searchedArr

        // }, [])
        // setList(nhut)
        const nhut= list.filter(item=>{
            item.listName.name.toLowerCase().includes(search.toLowerCase())
        })
        setList(nhut)
       




    }

    const handleChangeInput = (e) => {
        e.preventDefault()

        if (listName.name.trim() && listName.mssv.trim()) {

            const newArr = {
                id: Date.now(),
                mssv: listName.mssv,
                name: listName.name,
                status: parseInt(status, 10)
            }
            setList([...list, newArr])
            setListName({ name: '', mssv: '' })
            setStatus(0)
        }



    }


    const restName = () => {

        setListName({ name: '', mssv: '' })
        setStatus(0)


    }
    const closeList = (id) => {
        setList(list.filter(item => item.id !== id))

    }

    return (

        <div className='container'>
            <div className="row">


                <div className='w-25 col-4'>
                    <TaskForm
                        change={changeList}
                        changeMssv={changeMssv}

                        handleInput={(e) => handleChangeInput(e)}
                        changeSelecter={changeSelecter}
                        // changeSelec={changeSelec}
                        rest={restName}
                        listName={listName}
                       


                        status={status}

                    />

                </div>

                <div className='col-8'>
                    <button type="button" className="btn btn-primary">Thêm công việc</button>
                    <Control />
                    <List list={list}
                        status={status}
                        closeList={closeList}
                        changeSearch ={changeSearch }
                    onChangeSearch={onChangeSearch}
                    search={search}
                   

                    />



                </div>
            </div>




        </div>
    )
}
