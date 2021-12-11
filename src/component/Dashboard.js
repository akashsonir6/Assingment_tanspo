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
      <main class="main-section-start">
        <section class="menu-section">
          <div class="container-fluid">
            <div class="row mb-4">
              <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                <div class="left-menu-wrapper mb-3">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#all">
                        All
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#ftl">
                        FTL
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#lcl">
                        LCL
                      </a>
                    </li>
                    .
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#courier">
                        Courier
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#container">
                        Container
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text "
                          style={{ background: "#fff", borderRight: "0" }}
                        >
                          <img src="assets/images/icons/search.svg" alt="" />
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text "
                          style={{ background: "#fff", borderRight: "0" }}
                        >
                          <img src="assets/images/icons/search.svg" alt="" />
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                <div class="right-menu-wrapper mb-3">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#inbound"
                      >
                        Inbound
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#outbound">
                        Outbound
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text "
                          style={{ background: "#fff", borderRight: "0" }}
                        >
                          <img src="assets/images/icons/search.svg" alt="" />
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="card-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <div class="card-wrapper" style={{ background: "#3f51b5" }}>
                  <h1>Total Trips</h1>
                  <div class="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div class="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <div class="card-wrapper" style={{ background: "#087252" }}>
                  <h1>Total Trips</h1>
                  <div class="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div class="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <div
                  class="card-wrapper"
                  style={{ backgroundColor: "#888585" }}
                >
                  <h1>Total Trips</h1>
                  <div class="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div class="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <div class="card-wrapper" style={{ background: "#000" }}>
                  <h1>Total Trips</h1>
                  <div class="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div class="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <div class="card-wrapper" style={{ background: "red" }}>
                  <h1>Total Trips</h1>
                  <div class="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div class="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-2 col-lg-2">
                <div class="card-wrapper" style={{ background: "#6c9fda" }}>
                  <h1>Total Trips</h1>
                  <div class="details">
                    <h2>54</h2>
                    <p>100 Cr</p>
                  </div>
                  <div class="percent-value">
                    <p>+8%</p>
                    <p>-9.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="tiles-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="tiles-wrapper">
                  <div class="tiles-heading red-border">
                    <h1 class="text-danger">Missing Truck</h1>
                    <p>
                      Value: <span class="bg-danger">5 Cr</span>
                    </p>
                  </div>
                  <div class="transport-details">
                    <div class="transport-id">
                      <p>
                        Trip id: <span>123456</span>
                      </p>
                      <p>
                        Transporter: <span>VRL Logistics</span>
                      </p>
                    </div>
                    <div class="transport-location">
                      <p>
                        From: <span>Mumbai</span>
                      </p>
                      <p>
                        To: <span>Bangalore</span>
                      </p>
                    </div>
                  </div>
                  <div class="driver-details-wrapper">
                    <div class="driver-details">
                      <h1>Driver Details</h1>
                      <p>Rahul (9999999999)</p>
                    </div>
                    <div class="driver-location">
                      <h1>Last Known Details</h1>
                      <p>Kolhapur (123456790)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="tiles-wrapper">
                  <div class="tiles-heading black-border">
                    <h1>Detention Truck</h1>
                    <p>
                      Value: <span class="bg-secondary">5 Cr</span>
                    </p>
                  </div>
                  <div class="transport-details">
                    <div class="transport-id">
                      <p>
                        Trip id: <span>123456</span>
                      </p>
                      <p>
                        Transporter: <span>VRL Logistics</span>
                      </p>
                    </div>
                    <div class="transport-location">
                      <p>
                        From: <span>Mumbai</span>
                      </p>
                      <p>
                        To: <span>Bangalore</span>
                      </p>
                    </div>
                  </div>
                  <div class="driver-details-wrapper">
                    <div class="driver-details">
                      <h1>Driver Details</h1>
                      <p>Rahul (9999999999)</p>
                    </div>
                    <div class="driver-location">
                      <h1>Last Known Details</h1>
                      <p>Kolhapur (123456790)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="tiles-section">
          <div class="container-fluid">
            <div class="row mb-3">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="tiles-wrapper h-100">
                  <div class="tiles-heading red-border">
                    <h1 class="text-danger">Missing Truck</h1>
                    <p>
                      Value: <span class="bg-danger">5 Cr</span>
                    </p>
                  </div>
                  <div class="transport-details">
                    <div class="transport-id">
                      <p>
                        Trip id: <span>123456</span>
                      </p>
                      <p>
                        Transporter: <span>VRL Logistics</span>
                      </p>
                    </div>
                    <div class="transport-location">
                      <p>
                        From: <span>Mumbai</span>
                      </p>
                      <p>
                        To: <span>Bangalore</span>
                      </p>
                    </div>
                  </div>
                  <div class="driver-details-wrapper">
                    <div class="driver-details">
                      <h1>Driver Details</h1>
                      <p>Rahul (9999999999)</p>
                    </div>
                    <div class="driver-location">
                      <h1>Last Known Details</h1>
                      <p>Kolhapur (123456790)</p>
                    </div>
                  </div>
                  <div class="btn-wrapper w-100 text-left mt-4">
                    <button class="btn btn-outline-danger">View more</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tiles-wrapper">
                      <div class="tiles-heading black-border">
                        <h1>Do you know?</h1>
                      </div>
                      <div class="transport-details">
                        <div class="transport-id" style={{ flex: "0 0 100%" }}>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos autem natus inventore? Dolorem
                            nobis totam dolorum cupiditate, doloribus debitis
                            quo labore quam sed incidunt dolores quos minima!
                            Dolores, veniam odit.
                          </p>
                        </div>
                      </div>
                      <div class="btn-wrapper w-100 text-right">
                        <button class="btn btn-outline-success">
                          Start Tracking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tiles-wrapper mb-0">
                      <div class="tiles-heading black-border">
                        <h1>Transporter Details</h1>
                      </div>
                      <div class="transport-details">
                        <div class="transport-id" style={{ flex: "0 0 40%" }}>
                          <p>
                            Trip id: <span>123456</span>
                          </p>
                          <p>
                            Transporter: <span>VRL Logistics</span>
                          </p>
                        </div>
                        <div
                          class="transport-location"
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
                          class="btn-wrapper w-100 text-right"
                          style={{ flex: "0 0 20%" }}
                        >
                          <button class="btn btn-outline-success">
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
