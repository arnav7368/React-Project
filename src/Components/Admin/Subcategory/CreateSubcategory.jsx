import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import formValidations from '../../Validation/formValidations'
import Breadcurm from '../../Breadcurm'
import Sidebar from '../Sidebar'

import { addsubcategory, getsubcategory } from "../../../../src/Store/ActionCreaters/SubCategoryActionCreater"
export default function CreateSubcategory() {

  let [name, setName] = useState("")
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState("Name Filed is Mandetry")
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)

  function getInputData(e) {
    setName(e.target.value)
    setErrorMessage(formValidations(e))
  }

  function postData(e) {
    e.preventDefault()
    if (errorMessage === "") {

      let item = SubcategoryStateData.find((x) => x.name.toLowerCase() === name.toLowerCase())
      if (item) {
        setErrorMessage("Sub Category Name Alredy Exist")
        setShow(true)
      }
      else {
        dispatch(addsubcategory({ name: name }))
        navigate("/admin/subcategory")
      }
    }
    else
      setShow(true)
  }
  function getAPIData() {
    dispatch(getsubcategory())
  }
  useEffect(() => {
    getAPIData()
  }, [SubcategoryStateData.length])
  return (
    <>
      <Breadcurm title="Admin" />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-light text-center p-2'><span className='text-warning'>S</span>ub <span className='text-warning'>C</span>ategory<Link to="/admin/Subcategory/create" className='float-end text-light' onClick={() => window.history.back()}><i className="fa fa-arrow-left text-warning pe-2"></i> </Link></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name="name" onChange={getInputData} placeholder='Create Subcategory' className='form-control' />
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
