import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [transport_details, settransport_details] = useState([]);
  const [missingTruck, setMissingTruck] = useState([]);

  const color = ["green", "red", "blue", "black", "seagreen", "gray"];
  useEffect(() => {
    getdata();
    MissingTrack();
  }, []);
  let missing_data = missingTruck.map((value) => {
    return value;
  });
  console.log(missing_data.id);

  const getdata = async () => {
    const url = " http://localhost:3004/transport";
    await Axios.get(url).then((res) => settransport_details(res.data));
  };

  const MissingTrack = async () => {
    await Axios.get("http://localhost:3004/MissingTruck").then((resp) =>
      setMissingTruck(resp.data)
    );
  };

  return (
    <div>
      <main className="main-section-start">
        <section className="menu-section">
          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                <div className="left-menu-wrapper mb-3">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-toggle="tab"
                        to="#all"
                      >
                        All
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-toggle="tab" to="">
                        FTL
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" data-toggle="tab" to="#lcl">
                        LCL
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#courier"
                      >
                        Courier
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#container"
                      >
                        Container
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text "
                          style={{ background: "#fff", borderRight: "0" }}
                        >
                          <img
                            src="assets/images/icons/search.svg"
                            alt="search"
                          />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text "
                          style={{ background: "#fff", borderRight: "0" }}
                        >
                          <img src="assets/images/icons/search.svg" alt="" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="right-menu-wrapper mb-3">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-toggle="tab"
                        to="#inbound"
                      >
                        Inbound
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#outbound"
                      >
                        Outbound
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text "
                          style={{ background: "#fff", borderRight: "0" }}
                        >
                          <img src="assets/images/icons/search.svg" alt="" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="card-section">
          <div className="container-fluid">
            <div className="row">
              {transport_details.map((value, index) => (
                <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                  <div
                    className="card-wrapper"
                    style={{ background: color[index] }}
                  >
                    <h1>Total Trips</h1>
                    <div className="details">
                      <h2>{value.trip_id}</h2>
                      <p>{value.transaction}</p>
                    </div>
                    <div className="percent-value">
                      <p>{value.present}</p>
                      <p>{value.Negative_persent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tiles-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tiles-wrapper">
                  <div className="tiles-heading red-border">
                    <h1 className="text-danger">Missing Truck</h1>
                    <p>
                      Value: <span className="bg-danger">{}</span>
                    </p>
                  </div>
                  <div className="transport-details">
                    <div className="transport-id">
                      <p>
                        Trip id: <span>{}</span>
                      </p>
                      <p>
                        Transporter: <span>vrl</span>
                      </p>
                    </div>
                    <div className="transport-location">
                      <p>
                        From: <span>Mumbai</span>
                      </p>
                      <p>
                        To: <span>Bangalore</span>
                      </p>
                    </div>
                  </div>
                  <div className="driver-details-wrapper">
                    <div className="driver-details">
                      <h1>Driver Details</h1>
                      <p>Rahul (9999999999)</p>
                    </div>
                    <div className="driver-location">
                      <h1>Last Known Details</h1>
                      <p>Kolhapur (123456790)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tiles-wrapper">
                  <div className="tiles-heading black-border">
                    <h1>Detention Truck</h1>
                    <p>
                      Value: <span className="bg-secondary">5 Cr</span>
                    </p>
                  </div>
                  <div className="transport-details">
                    <div className="transport-id">
                      <p>
                        Trip id: <span>123456</span>
                      </p>
                      <p>
                        Transporter: <span>VRL Logistics</span>
                      </p>
                    </div>
                    <div className="transport-location">
                      <p>
                        From: <span>Mumbai</span>
                      </p>
                      <p>
                        To: <span>Bangalore</span>
                      </p>
                    </div>
                  </div>
                  <div className="driver-details-wrapper">
                    <div className="driver-details">
                      <h1>Driver Details</h1>
                      <p>Rahul (9999999999)</p>
                    </div>
                    <div className="driver-location">
                      <h1>Last Known Details</h1>
                      <p>Kolhapur (123456790)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tiles-section">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tiles-wrapper h-100">
                  <div className="tiles-heading red-border">
                    <h1 className="text-danger">Missing Truck</h1>
                    <p>
                      Value: <span className="bg-danger">5 Cr</span>
                    </p>
                  </div>
                  <div className="transport-details">
                    <div className="transport-id">
                      <p>
                        Trip id: <span>1269482</span>
                      </p>
                      <p>
                        Transporter: <span>kjfn</span>
                      </p>
                    </div>
                    <div className="transport-location">
                      <p>
                        From: <span>Mumbai</span>
                      </p>
                      <p>
                        To: <span>Bangalore</span>
                      </p>
                    </div>
                  </div>
                  <div className="driver-details-wrapper">
                    <div className="driver-details">
                      <h1>Driver Details</h1>
                      <p>Rahul (9999999999)</p>
                    </div>
                    <div className="driver-location">
                      <h1>Last Known Details</h1>
                      <p>Kolhapur (123456790)</p>
                    </div>
                  </div>
                  <div className="btn-wrapper w-100 text-left mt-4">
                    <button className="btn btn-outline-danger">
                      View more
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="tiles-wrapper">
                      <div className="tiles-heading black-border">
                        <h1>Do you know?</h1>
                      </div>
                      <div className="transport-details">
                        <div
                          className="transport-id"
                          style={{ flex: "0 0 100%" }}
                        >
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos autem natus inventore? Dolorem
                            nobis totam dolorum cupiditate, doloribus debitis
                            quo labore quam sed incidunt dolores quos minima!
                            Dolores, veniam odit.
                          </p>
                        </div>
                      </div>
                      <div className="btn-wrapper w-100 text-right">
                        <button className="btn btn-outline-success">
                          Start Tracking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="tiles-wrapper mb-0">
                      <div className="tiles-heading black-border">
                        <h1>Transporter Details</h1>
                      </div>
                      <div className="transport-details">
                        <div
                          className="transport-id"
                          style={{ flex: "0 0 40%" }}
                        >
                          <p>
                            Trip id: <span>123456</span>
                          </p>
                          <p>
                            Transporter: <span>VRL Logistics</span>
                          </p>
                        </div>
                        <div
                          className="transport-location"
                          //   style="flex: 0 0 40%;"
                          style={{ flex: " 0 0 40%" }}
                        >
                          <p>
                            From: <span>Mumbai</span>
                          </p>
                          <p>
                            To: <span>Bangalore</span>
                          </p>
                        </div>
                        <div
                          className="btn-wrapper w-100 text-right"
                          style={{ flex: "0 0 20%" }}
                        >
                          <button className="btn btn-outline-success">
                            View All
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
