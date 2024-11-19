import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

function TableData() {

    const [data, setdata] = useState([])
    useEffect(() => {
        try {
            axios.get('http://localhost:4000/api/getTenders')
                .then((res) => {
                    setdata(res.data)
                })
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [])
    // console.log(data)

    const deleteuser = async (id) => {
        await axios.get(`http://localhost:4000/api/deleteTender/${id}`)
            .then((response) => {
                setdata(data.filter((data) => data._id !== id))
                toast.success(response.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-default">
                        Desplay Modal
                    </button>
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                    <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Discription</th>
                                <th>Starttime</th>
                                <th>Endtime</th>
                                <th>Buffertime</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) => {
                                return <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.starttime}</td>
                                    <td>{data.endtime}</td>
                                    <td>{data.Buffertime}</td>
                                    <td>
                                        <Link to={/viewtender/ + data._id} className="btn btn-info ">
                                            <i className="fa-solid fa-eye"></i>
                
                                        </Link>
                                        <Link to={/edittender/+ data._id} className="btn btn-success "style={{margin:"0 5px"}}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                        <button onClick={()=>deleteuser (data._id)} className="btn btn-danger">
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Discription</th>
                                <th>Starttime</th>
                                <th>Endtime</th>
                                <th>Buffertime</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}

            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Display Modal</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                </div>
                                {/* <!-- /.card-body --> */}

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>
            {/* <!-- /.modal --> */}
        </>
    )
}

export default TableData