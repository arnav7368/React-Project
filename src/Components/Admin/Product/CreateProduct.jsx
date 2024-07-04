import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import formValidations from '../../Validation/formValidations'
import imageValidations from '../../Validation/imageValidations'
import Breadcurm from '../../Breadcurm'
import Sidebar from '../Sidebar'

import { addProduct } from "../../../../src/Store/ActionCreaters/ProductActionCreater"
import { getbrand } from '../../../../src/Store/ActionCreaters/BrandActionCreater'
import { getmaincategory } from "../../../../src/Store/ActionCreaters/MainCategoryActionCreater"
import { getsubcategory } from "../../../../src/Store/ActionCreaters/SubCategoryActionCreater"

var rte;

export default function CreateProduct() {

  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    quantity: "",
    baseprice: 0,
    discount: 0,
    finalprice: 0,
    stock: true,
    discription: "",
    pic: ""
  })
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState({
    name: "Name Filed is Mandetry",
    color: "Color Filed is Mandetry",
    size: "Size Filed is Mandetry",
    baseprice: "Base Price Filed is Mandetry",
    discount: "Discount Filed is Mandetry",
    quantity: "Stock Quantity Filed is Mandetry",
    pic: "Pic is Mandetry"

  })
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
  
  let navigate = useNavigate()
  var refdiv = useRef(null);
 
  function getInputData(e) {
    let name = e.target.name
    let value = e.target.files ? e.target.files : e.target.value
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: e.target.files ? imageValidations(e) : formValidations(e)
      }
    })
    setData((old) => {
      return {
        ...old,
        [name]: e.target.files ? Array.from(value).map((x) => x.name) : value
      }
    })
  }
  
  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find((x) => x?.length !== 0)
    if (!error) {
      let bp = parseInt(data.baseprice)
      let d = parseInt(data.discount)
      let fp = parseInt(bp - bp * d / 100)
      let item = {
      name:data.name,
      maincategory:data.maincategory,
      subcategory:data.subcategory,
      brand:data.brand,
      baseprice:bp,
      discount:d,
      finalprice:fp,
      color:data.color,
      size:data.size,
      stock:data.stock,
      discription:rte.getHTMLCode(),
      quantity:data.quantity,
      pic:data.pic,
    }
    dispatch(addProduct(item))
    // when use real API replace Above 1 line to below 4 line
    
    // let formData = new formData()
    // formData.append("name",data.name)
    // formData.append("pic",data.pic)
    // dispatch(addproduct(formData))
    navigate("/admin/product")
  }
    
    
    else
    setShow(true)
}
function getAPIData() {
  rte = new window.RichTextEditor(refdiv.current);
  rte.setHTMLCode("");
  dispatch(getmaincategory())
  dispatch(getsubcategory())
  dispatch(getbrand())
  if (MaincategoryStateData.length && SubcategoryStateData.length && BrandStateData.length)
  setData((old) => {
  return {
    ...old,
    "maincategory": MaincategoryStateData[0].name,
    "subcategory": SubcategoryStateData[0].name,
    "brand": BrandStateData[0].name
  }
})

}
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length, SubcategoryStateData.length, BrandStateData.length])
  return (
    <>
      <Breadcurm title="Admin" />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-light text-center p-2'><span className='text-warning'>C</span>reate <span className='text-warning'> P</span>roduct<Link to="/admin/product/create" className='float-end text-light' onClick={() => window.history.back()}><i className="fa fa-arrow-left text-warning pe-2"></i> </Link></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name="name" onChange={getInputData} placeholder='Create Product' className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.name}</p> : ""}
              </div>
              <div className='row'>
                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Maincategory<span className='text-danger'>*</span></label>
                  <select name="maincategory" onChange={getInputData} className='form-select'>
                    {
                      MaincategoryStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Subcategory<span className='text-danger'>*</span></label>
                  <select name="subcategory" onChange={getInputData} className='form-select'>
                    {
                      SubcategoryStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Brand<span className='text-danger'>*</span></label>
                  <select name="brand" onChange={getInputData} className='form-select'>
                    {
                      BrandStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Stock<span className='text-danger'>*</span></label>
                  <select name="stock" onChange={getInputData} className='form-select'>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                  </select>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-6 mb-3'>
                  <label>Base Price<span className='text-danger'>*</span></label>
                  <input type='number' name="baseprice" onChange={getInputData} className='form-control' placeholder='Base Price' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.baseprice}</p> : ""}
                </div>
                <div className='col-lg-4 col-md-6 mb-3'>
                  <label>Discount<span className='text-danger'>*</span></label>
                  <input type='number' name="discount" onChange={getInputData} className='form-control' placeholder='Discount' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.discount}</p> : ""}
                </div>
                <div className='col-lg-4 col-md-6 mb-3'>
                  <label>Stock Quantity<span className='text-danger'>*</span></label>
                  <input type='number' name="quantity" onChange={getInputData} className='form-control' placeholder='Stock Quantity' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.stock}</p> : ""}
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Color<span className='text-danger'>*</span></label>
                  <input type='text' name="color" onChange={getInputData} className='form-control' placeholder='Color' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.color}</p> : ""}
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Size<span className='text-danger'>*</span></label>
                  <input type='text' name="size" onChange={getInputData} className='form-control' placeholder='Size' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.size}</p> : ""}
                </div>
              </div>
              <div className='mb-3'>
                <label>Discription<span className='text-danger'>*</span></label>
                <div ref={refdiv} onChange={getInputData}></div>                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.discription}</p> : ""}
              </div>

              <div className='mb-3'>
                <label>Image<span className='text-danger'>*</span></label>
                <input type='file' name="pic" multiple onChange={getInputData} className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.pic}</p> : ""}
              </div>
              

              
              <div className='mb-3'>
                <button type='submit' className='btn btn-primary w-100' style={{ borderRadius: "5px" }}><h5 className='text-light'><span className='text-warning'>C</span>reate</h5></button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
