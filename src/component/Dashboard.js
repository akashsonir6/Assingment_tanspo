import React, { useState, useEffect } from "react";
import Axios from "axios";

const Dashboard = () => {
  const [transport_dtails, settransport_dtails] = useState([]);
  useEffect(() => {
    Axios.get(" http://localhost:3004/transport").then((res) =>
      settransport_dtails(res.data)
    );
  }, []);

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
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#all"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#ftl">
                        FTL
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#lcl">
                        LCL
                      </a>
                    </li>
                    .
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#courier">
                        Courier
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#container"
                      >
                        Container
                      </a>
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
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#inbound"
                      >
                        Inbound
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#outbound"
                      >
                        Outbound
                      </a>
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
              <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                <div className="card-wrapper" style={{ background: "#3f51b5" }}>
                  <h1>Total Trips</h1>
                  <div className="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div className="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                <div className="card-wrapper" style={{ background: "#087252" }}>
                  <h1>Total Trips</h1>
                  <div className="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div className="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                <div
                  className="card-wrapper"
                  style={{ backgroundColor: "#888585" }}
                >
                  <h1>Total Trips</h1>
                  <div className="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div className="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                <div className="card-wrapper" style={{ background: "#000" }}>
                  <h1>Total Trips</h1>
                  <div className="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div className="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                <div className="card-wrapper" style={{ background: "red" }}>
                  <h1>Total Trips</h1>
                  <div className="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div className="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-2 col-lg-2">
                <div className="card-wrapper" style={{ background: "#6c9fda" }}>
                  <h1>Total Trips</h1>
                  <div className="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div className="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>
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
                      Value: <span className="bg-danger">5 Cr</span>
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
