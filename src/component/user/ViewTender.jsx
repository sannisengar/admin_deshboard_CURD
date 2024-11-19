import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function ViewTender() {
    const [data, setdata] = useState([])
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        try {
            axios.get(`http://localhost:4000/api/ViewTender/${id}`)
                .then((res) => {
                    setdata(res.data)
                })
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    })
    // console.log(data)
    return (
        <>
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">User View</h1>
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">View</li>
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
                        <div className="card">
                            <div className="card-header">

                            </div>
                            {/* <!-- /.card-header --> */}
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Discription</th>
                                            <th>Starttime</th>
                                            <th>Endtime</th>
                                            <th>Buffertime</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>{data.name}</td>
                                        <td>{data.description}</td>
                                        <td>{data.starttime}</td>
                                        <td>{data.endtime}</td>
                                        <td>{data.Buffertime}</td>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Discription</th>
                                            <th>Starttime</th>
                                            <th>Endtime</th>
                                            <th>Buffertime</th>

                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                        <div className="text-center">
                            <Link to={"/userDisplay"} >Back To User Display </Link>

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

export default ViewTender