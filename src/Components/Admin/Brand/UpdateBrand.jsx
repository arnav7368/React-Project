import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import formValidations from '../../Validation/formValidations'
import Breadcurm from '../../Breadcurm'
import Sidebar from '../Sidebar'

import { addbrand, getbrand, updatebrand } from "../../../../src/Store/ActionCreaters/BrandActionCreater"
export default function UpdateBrand() {
  let {id} = useParams()

  let [data, setData] = useState({
    name:"",
    pic:""
  })
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState({
    name:""

  })
  let dispatch = useDispatch()
  let BrandStateData = useSelector(state => state.BrandStateData)
  let navigate = useNavigate()

  function getInputData(e) {
    let name=e.target.name
    let value=e.target.files?e.target.files[0].name:e.target.value
    //let value=e.target.file?e.target.file[0]:e.target.value    //when real API used
    setErrorMessage((old)=>{
      return {
        ...old,
        [name]: e.target.files?"":formValidations(e)
      }
    })
    setData((old)=>{
      return{
        ...old,
        [name]:value
      }
    })
  }

  function postData(e) {
    e.preventDefault()
    let error=Object.values(errorMessage).find((x)=>x?.length!==0)
    if (!error) {

      let item = BrandStateData.find((x) => x.name.toLowerCase() === data.name.toLowerCase() && x.id !== id)
      if (item) {
        setErrorMessage("Brand Name Alredy Exist")
        setShow(true)
      }
      else {
        dispatch(updatebrand({ id:id,name: data.name,pic:data.pic }))
        
        // when use real API replace Above 1 line to below 4 line

        // let formData = new formData()
        // formData.append("name",data.name)
        // formData.append("id",id)
        // formData.append("pic",data.pic)
        
        // dispatch(addbrand(formData))

        navigate("/admin/brand")
      }
    }
    else
      setShow(true)
  }
  function getAPIData() {
    dispatch(getbrand())
    if(BrandStateData.length){
      var item = BrandStateData.find((x)=>x.id===id)
      setData({...item})
    }
  }
  useEffect(() => {
    getAPIData()
  }, [BrandStateData.length])
  return (
    <>
      <Breadcurm title="Admin" />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-light text-center p-2'><span className='text-warning'>B</span>rand<Link to="/admin/brand/create" className='float-end text-light' onClick={() => window.history.back()}><i className="fa fa-arrow-left text-warning pe-2"></i> </Link></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name="name" value={data.name} onChange={getInputData} placeholder='Update Brand' className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.name}</p> : ""}
              </div>
              <div className='mb-3'>
                <label>Image</label>
                <input type='file' name="pic" onChange={getInputData} className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.pic}</p> : ""}
              </div>
              <div className='mb-3'>
                <button type='submit' className='btn btn-primary w-100' style={{ borderRadius: "5px" }}><h5 className='text-light'>Update</h5></button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
