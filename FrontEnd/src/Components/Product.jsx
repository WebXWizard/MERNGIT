import React from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import { enqueueSnackbar } from 'notistack'

// const ProductSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('Name is required')
//     .min(3, 'Name must be at least 3 characters')
//     .max(15, 'Name must be at most 15 characters'),

// })

const Product = () => {
  // step 1: formik initialization
  // const productForm = useFormik({
  //   initialValues: {
  //     name: '',
  //     category: '',
  //     price: '',
  //     description: ''
  //   },

    /*onSubmit: (values, {resetForm}) =>{
      console.log(values)
      enqueueSnackbar('Signup successfully', {varient: 'success'})
      resetForm()

    },*/
    // onSubmit: async (values, action) => {
    //   console.log(values);
    //   const res = await fetch('http://localhost:5000/product/add', {
    //     method: 'POST',
    //     body: JSON.stringify(values),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
  //     console.log(res.status)
  //     action.resetForm()

  //     if (res.status === 200) {
  //       enqueueSnackbar('Product successful', { varient: 'success' })
  //     } else {
  //       enqueueSnackbar('Product failed', { varient: 'error' })

  //     }
  //   },
  //   validationSchema: ProductSchema
  // })
  return (
    <div className='container7'>
      <div className="col d-flex justify-content-center ">
        <div className="card w-25 " > 
          <div className="card-header">
            <h3 className='card2'>Product</h3>
          </div>
          <div className="card-body ">
            {/* step2: handling when submit */}
            <form>
              {/* onSubmit={ProductForm.handleSubmit} */}
              <div className="form-group">
                <label>Name</label>
                {/* <span style={{ color: 'red', fontSize: '10' }}>{productForm.touched.name && productForm.errors.name}</span> */}
                <input type="text" className="form-control mb-4"  />
                  {/* id="name"
                  onChange={productForm.handleChange}
                  value={productForm.values.name}  */}

              </div>
              <div className="form-group">
                <label>Category</label>
                {/* <span style={{ color: 'red', fontSize: '10' }}>{productForm.touched.category && productForm.errors.category}</span> */}
                <input type="text" className="form-control mb-4"  />
                  {/* id="category"
                  onChange={productForm.handleChange}
                  value={productForm.values.category}  */}
              </div>
              <div className="form-group">
                <label>Price</label>
                {/* <span style={{ color: 'red', fontSize: '10' }}>{productForm.touched.price && productForm.errors.price}</span> */}
                <input type="number" className="form-control mb-4" />
                  {/* id="price"
                  onChange={productForm.handleChange}
                  value={productForm.values.price}  */}
              </div>
              
              <button type='submit' className="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Product