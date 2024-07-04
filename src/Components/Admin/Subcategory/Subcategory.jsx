import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'


import { Link } from 'react-router-dom'
import Breadcurm from '../../Breadcurm'
import Sidebar from '../Sidebar'
// import UpdateSubcategory from './UpdateSubcategory'
import { useDispatch, useSelector } from 'react-redux'

import { deletesubcategory, getsubcategory } from '../../../../src/Store/ActionCreaters/SubCategoryActionCreater'
export default function Subcategory() {
  let [data, setData] = useState([])
  let dispatch= useDispatch()
  let SubcategoryStateData = useSelector(state=>state.SubcategoryStateData)

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      sortable: false,
      renderCell:((row)=><Link to={`/admin/subcategory/update/${row.id}`} className="btn btn-primary"><i className='fa fa-edit'></i></Link>)
    },
    {
      field: 'delete',
      headerName: 'Delete',
      type: 'number',
      width: 110,
      sortable: false,
      renderCell:((row)=><button className='btn btn-danger' onClick={() => deleteRecord(row.id)}><i className='fa fa-trash'></i></button>)
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  function deleteRecord(id) {
    if (window.confirm("Are yuo sure to delete that item :")) {
      dispatch(deletesubcategory({id:id}))
      getAPIData()
    }
  }

  function getAPIData() {
    dispatch(getsubcategory())
    if(SubcategoryStateData.length)
      setData(SubcategoryStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [SubcategoryStateData])
  return (
    <>
      <Breadcurm title="Admin" />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-light text-center p-2'><span className='text-warning'>S</span>ub <span className='text-warning'>C</span>ategory<Link to="/admin/Subcategory/create" className='float-end text-light'><i className='fa fa-plus text-warning'></i></Link></h5>
            {/* <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link to={`/admin/subcategory/update/${item.id}`} className="btn btn-primary"><i className='fa fa-edit'></i></Link></td>
                      <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table> */}
            <div className='table-responsive'>
              <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 20, 50, 100]}
                checkboxSelection={false}
                disableRowSelectionOnClick
              />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
