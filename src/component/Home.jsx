import Chart from "./user/Chart"

function Home() {
  return (
    <>
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">DashBoard</h1>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Starter Page</li>
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
            {/* <!-- Small boxes (Stat box) --> */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* <!-- small box --> */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>

                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              {/* <!-- ./col --> */}
              <div className="col-lg-3 col-6">
                {/* <!-- small box --> */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>53<sup  style={{fontSize:"20px"}}>%</sup></h3>

                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              {/* <!-- ./col --> */}
              <div className="col-lg-3 col-6">
                {/* <!-- small box --> */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>

                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              {/* <!-- ./col --> */}
              <div className="col-lg-3 col-6">
                {/* <!-- small box --> */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>

                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              {/* <!-- ./col --> */}
            </div>
            {/* <!-- /.row --> */}
            <Chart/>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content --> */}
      </div >
      {/* <!-- /.content-wrapper --> */}


    </>
  )
}

export default Home