import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Navigate } from "react-router-dom"

function AddUser() {
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [starttime, setstarttime] = useState('')
  const [endtime, setendtime] = useState('')
  const [Buffertime, setbuffertime] = useState('')
  const [IsAuth, setIsAuth] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:4000/api/Tender_insert', {
        name, description, starttime, endtime, Buffertime
      })
      // console.log(data)
      toast.success(data.message)
      setname("")
      setdescription("")
      setstarttime("")
      setendtime("")
      setbuffertime("")
      setIsAuth(true)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }
  if (IsAuth) {
    return <Navigate to={'/userDisplay'} />
  }

  return (
    <>
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Add User</h1>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Add user</li>
                </ol>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content-header --> */}

        {/* <!-- Main content --> */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                {/* <!-- general form elements --> */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">add tender </h3>
                  </div>
                  {/* <!-- /.card-header -->
                   <!-- form start --> */}
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" onChange={(e) => setname(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >discription</label>
                        <input type="text" className="form-control" onChange={(e) => setdescription(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >start time</label>
                        <input type="date" className="form-control" onChange={(e) => setstarttime(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >end time</label>
                        <input type="date" className="form-control" onChange={(e) => setendtime(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >buffer time</label>
                        <input type="number" className="form-control" onChange={(e) => setbuffertime(e.target.value)} />
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                {/* <!-- /.card --> */}
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
    </>
  )
}

export default AddUser