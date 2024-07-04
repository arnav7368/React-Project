import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import formValidations from '../../Validation/formValidations'
import Breadcurm from '../../Breadcurm'
import Sidebar from '../Sidebar'

import { addmaincategory, getmaincategory } from "../../../Store/ActionCreaters/MainCategoryActionCreater"
export default function CreateMaincategory() {

  let [name, setName] = useState("")
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState("Name Filed is Mandetry")
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)

  function getInputData(e) {
    setName(e.target.value)
    setErrorMessage(formValidations(e))
  }

  function postData(e) {
    e.preventDefault()
    if (errorMessage === "") {

      let item = MaincategoryStateData.find((x) => x.name.toLowerCase() === name.toLowerCase())
      if (item) {
        setErrorMessage("Main Category Name Alredy Exist")
        setShow(true)
      }
      else {
        dispatch(addmaincategory({ name: name }))
        navigate("/admin/maincategory")
      }
    }
    else
      setShow(true)
  }
  function getAPIData() {
    dispatch(getmaincategory())
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length])
  return (
    <>
      <Breadcurm title="Admin" />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-light text-center p-2'><span className='text-warning'>M</span>ain <span className='text-warning'>C</span>ategory<Link to="/admin/maincategory/create" className='float-end text-light' onClick={() => window.history.back()}><i className="fa fa-arrow-left text-warning pe-2"></i> </Link></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name="name" onChange={getInputData} placeholder='Create Maincategory' className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage}</p> : ""}
              </div>
              <div className='mb-3'>
                <button type='submit' className='btn btn-primary w-100' style={{ borderRadius: "5px" }}><h5 className='text-light'>Create</h5></button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
