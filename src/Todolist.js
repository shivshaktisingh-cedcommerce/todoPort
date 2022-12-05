import React, { useState } from 'react'
import Modalcomponent from './Modalcomponent'

export default function Todolist() {
  const [modalflag , setModalflag]=useState(false)
  const openTask=(item)=>{
    console.log(item)
  }
  return (
    <div>
      <div className="searchbar container-md">
        <input type="text" className="bg--steelgray search--box"/>
        <i className="fa fa-search c--trout " aria-hidden="true"></i>
      </div>
      <div className="container-md ps-0 pe-0 pt-4 d-flex flex-row justify-content-between">
        <span className="text-white">Lists</span>
        <span>  
          <button className="add--btn c--trout bg--steelgray" onClick={()=>setModalflag(!modalflag)}>Add</button>
          </span>
      </div>
      <div className="container-md pt-4">
        <div className="d-flex flex-row justify-content-center gap-2">
          <div className="col-6 text-white bg--emerald text-center rounded pt-3 pb-3 today--task" onClick={()=>openTask('today')}>
            <p>0</p>
            <p>Today</p>  
          </div>
          <div className="col-6 text-white bg--fuscous text-center rounded pt-3 pb-3">
            <p>0</p>
            <p>This week</p>
          </div>
          </div>
          <div className="d-flex flex-row justify-content-center gap-2 mt-3 pt-3 pb-3">
          <div className="col-6 text-white bg--fuscous text-center rounded pt-3 pb-3">
            <p>0</p>
            <p>All</p>
          </div>
          <div className="col-6 text-white bg--emerald text-center rounded pt-3 pb-3">
            <p>0</p>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <Modalcomponent flag={modalflag} setflag={setModalflag}/>
      
    </div>
  )
}
