import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Navigate, useParams } from "react-router-dom"


function EditTender() {
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [starttime, setstarttime] = useState('')
  const [endtime, setendtime] = useState('')
  const [Buffertime, setbuffertime] = useState('')
   const [IsAuth, setIsAuth] = useState(false)
  const { id } = useParams()
  // console.log(id)

  useEffect(() => {
    try {
      axios.get(`http://localhost:4000/api/ViewTender/${id}`)
        .then((res) => {
          const tenderData = res.data
          // console.log(tenderData)
          setname(tenderData.name)
          setdescription(tenderData.description)
          setstarttime(tenderData.starttime)
          setendtime(tenderData.endtime)
          setbuffertime(tenderData.Buffertime)

        })
    } catch (error) {
      console.log(error)
    }
  }, [id])
  const Updateform = async (e) => {
    e.preventDefault()
    // console.log(name, description, starttime, endtime, Buffertime)
     try {
      const { data } = await axios.post(`http://localhost:4000/api/UpdateTender/${id}`, {
        name, description, starttime, endtime, Buffertime
      })
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
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">User Edit</h1>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Edit</a></li>
                  <li className="breadcrumb-item active">Display</li>
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                {/* <!-- general form elements --> */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Edit tender </h3>
                  </div>
                  {/* <!-- /.card-header -->
                   <!-- form start --> */}
                  <form onSubmit={Updateform}>
                    <div className="card-body">
                      <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >discription</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setdescription(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >start time</label>
                        <input type="date" className="form-control" value={starttime} onChange={(e) => setstarttime(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >end time</label>
                        <input type="date" className="form-control" value={endtime} onChange={(e) => setendtime(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >buffer time</label>
                        <input type="number" className="form-control" value={Buffertime} onChange={(e) => setbuffertime(e.target.value)} />
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">UpDate</button>
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

export default EditTender