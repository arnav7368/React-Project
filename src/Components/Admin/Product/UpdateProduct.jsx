import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import formValidations from '../../Validation/formValidations'
import imageValidations from '../../Validation/imageValidations'
import Breadcurm from '../../Breadcurm'
import Sidebar from '../Sidebar'

import { addProduct, getProduct, updateProduct } from "../../../Store/ActionCreaters/ProductActionCreater"
import { getbrand } from '../../../Store/ActionCreaters/BrandActionCreater'
import { getmaincategory } from "../../../Store/ActionCreaters/MainCategoryActionCreater"
import { getsubcategory } from "../../../Store/ActionCreaters/SubCategoryActionCreater"

var rte;

export default function UpdateProduct() {
  let [flag, setFlag] = useState(false)
  let { id } = useParams()
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
    pic: []
  })
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState({
    name: "",
    color: "",
    size: "",
    baseprice: "",
    discount: "",
    quantity: "",
    pic: ""

  })
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
  let ProductStateData = useSelector(state => state.ProductStateData)


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
        [name]: e.target.files ? data.pic.concat(Array.from(value).map((x) => x.name)) : value
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
        id: id,
        name: data.name,
        maincategory: data.maincategory,
        subcategory: data.subcategory,
        brand: data.brand,
        baseprice: bp,
        discount: d,
        finalprice: fp,
        color: data.color,
        size: data.size,
        stock: data.stock,
        discription: rte.getHTMLCode(),
        quantity: data.quantity,
        pic: data.pic,
      }
      dispatch(updateProduct(item))
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
    dispatch(getmaincategory())
    dispatch(getsubcategory())
    dispatch(getbrand())
    dispatch(getProduct())
    if (ProductStateData.length) {
      let item = ProductStateData.find((x) => x.id === id)
      if (item) {
        setData({ ...item })
        if (item.discription)
          rte.setHTMLCode(item.discription);
      }
    }

    //   setData((old) => {
    //   return {
    //     ...old,
    //     "maincategory": MaincategoryStateData[0].name,
    //     "subcategory": SubcategoryStateData[0].name,
    //     "brand": BrandStateData[0].name
    //   }
    // })

  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length, SubcategoryStateData.length, BrandStateData.length, ProductStateData.length])
  return (
    <>
      <Breadcurm title="Admin" />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-light text-center p-2'><span className='text-warning'>U</span>pdate  <span className='text-warning'>P</span>roduct<Link to="/admin/product/create" className='float-end text-light' onClick={() => window.history.back()}><i className="fa fa-arrow-left text-warning pe-2"></i> </Link></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name="name" value={data.name} onChange={getInputData} placeholder='Create Product' className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.name}</p> : ""}
              </div>
              <div className='row'>
                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Maincategory<span className='text-danger'>*</span></label>
                  <select name="maincategory" value={data.maincategory} onChange={getInputData} className='form-select'>
                    {
                      MaincategoryStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Subcategory<span className='text-danger'>*</span></label>
                  <select name="subcategory" value={data.subcategory} onChange={getInputData} className='form-select'>
                    {
                      SubcategoryStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Brand<span className='text-danger'>*</span></label>
                  <select name="brand" value={data.brand} onChange={getInputData} className='form-select'>
                    {
                      BrandStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })
                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Stock<span className='text-danger'>*</span></label>
                  <select name="stock" value={data.stock} onChange={getInputData} className='form-select'>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                  </select>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-6 mb-3'>
                  <label>Base Price<span className='text-danger'>*</span></label>
                  <input type='number' name="baseprice" value={data.baseprice} onChange={getInputData} className='form-control' placeholder='Base Price' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.baseprice}</p> : ""}
                </div>
                <div className='col-lg-4 col-md-6 mb-3'>
                  <label>Discount<span className='text-danger'>*</span></label>
                  <input type='number' name="discount" value={data.discount} onChange={getInputData} className='form-control' placeholder='Discount' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.discount}</p> : ""}
                </div>
                <div className='col-lg-4 col-md-6 mb-3'>
                  <label>Stock Quantity<span className='text-danger'>*</span></label>
                  <input type='number' name="quantity" value={data.quantity} onChange={getInputData} className='form-control' placeholder='Stock Quantity' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.stock}</p> : ""}
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Color<span className='text-danger'>*</span></label>
                  <input type='text' name="color" value={data.color} onChange={getInputData} className='form-control' placeholder='Color' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.color}</p> : ""}
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Size<span className='text-danger'>*</span></label>
                  <input type='text' name="size" value={data.size} onChange={getInputData} className='form-control' placeholder='Size' />
                  {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.size}</p> : ""}
                </div>
              </div>
              <div className='mb-3'>
                <label>Discription<span className='text-danger'>*</span></label>
                <div ref={refdiv} onChange={getInputData}></div>                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.discription}</p> : ""}
              </div>

              <div className='mb-3'>
                <label>Image</label>
                <input type='file' name="pic" multiple onChange={getInputData} className='form-control' />
                {show ? <p className='text-danger p-2 text-capitalize'>{errorMessage.pic}</p> : ""}
              </div>

              {data.pic.length ? <p className='text-danger'>Click on Image to Delete</p> : ""}
              <div className='d-flex flex-wrap'>
                {
                  data.pic.map((item, index) => {
                    return <div key={index} className='m-1'>
                      <img src={`/images/${item}`} height={60} width={60} onClick={() => {
                        data.pic.splice(index, 1)
                        setFlag(!flag)
                      }} />

                    </div>
                  })

                }
              </div>



              <div className='mb-3'>
                <button type='submit' className='btn btn-primary w-100' style={{ borderRadius: "5px" }}><h5 className='text-light'><span className='text-warning'>U</span>pdate</h5></button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
