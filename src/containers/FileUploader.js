import React, { Component } from "react";
import { Button } from "react-bootstrap";
import group2 from "../images/group2.svg";
import "./FileUploader.css";
import { Container, Row, Col } from "react-bootstrap";
import { iosBellOutline } from "react-icons-kit/ionicons/iosBellOutline";
import { withBaseIcon } from "react-icons-kit";
import { DiStreamline } from "react-icons/di";

const SideIconContainer = withBaseIcon({ size: 20, style: { color: "black" } });

export const BellOutline = () => <SideIconContainer icon={iosBellOutline} />;

class DatasetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Monica Greenleaf",
      displayname: "monica.greenleaf@microsoft.com",
      description: "Monica Greenleaf",
      host: "Monica Greenleaf",
      port: "monica.greenleaf@microsoft.com",
      password: "Microsoft, Inc.",
      database: "monica.greenleaf@microsoft.com",
      selectedDB: "postgresql"
    };
  }

  handleSignOut = event => {
    console.log("Clicked on Sign out");
  };

  handleUpgrade = event => {
    console.log("Clicked on Upgrade");
  };

  handleNotifications = event => {
    console.log("Clicked on Handle Notifications");
  };

  thisFileUpload() {
    document.getElementById("file").click();
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleDBSelect = db => {
    console.log("Selected new DB", db);
    this.setState({
      selectedDB: db
    })
  }

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    console.log("Dataset Settings: ", this.state);
  };

  directUpload() {
    var fileUpload = document.getElementById("file");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
      if (typeof FileReader != "undefined") {
        var reader = new FileReader();
        reader.readAsText(fileUpload.files[0]);
        reader.onload = function() {
          console.log(reader.result);
        };
      } else {
        alert("Not supported");
      }
    } else {
      alert("Please upload a valid CSV file.");
    }
  }

  render() {
    let isMySQL = false;
    let isPSQL = false;
    if(this.state.selectedDB==="mysql"){
      isMySQL=true
    }
    else{
      isPSQL=true
    }

    return (
      <div
        className="fileupload-container"
        style={{ backgroundImage: `url(${group2})` }}
      >
        <div className="fileupload-content">
          {/* Top Level Buttons */}
          <div className="top-level-buttons">
            <div className="sign-out">
              <a
                href="javascript:void(0);"
                className="no-a-style"
                onClick={this.handleSignOut}
              >
                Sign Out
              </a>
            </div>
            <div className="upgrade">
              <a
                href="javascript:void(0);"
                className="no-a-style"
                onClick={this.handleUpgrade}
              >
                Upgrade
              </a>
            </div>
            <div className="bell">
              <a href="javascript:void(0);" onClick={this.handleNotifications}>
                <BellOutline />
              </a>
            </div>
          </div>

          {/* Title */}
          <div className="page-title">
            <div className="main-title">
              Add datasets <br />
              to your Obviously account.
            </div>
            <br />
            <div className="sub-title">
              Add dataset for making predictions. We don’t and will never store
              your data.
            </div>
          </div>

          <div>
            <div className="sub-title">Upload a file</div>
            <br />
            <br />

            <div className="upload-file-btn-align">
              <input
                type="file"
                id="file"
                className="file-upload-input"
                onChange={this.directUpload.bind(this)}
              />
              <Button
                id="fileUpload"
                className="upload-a-csv"
                name="button"
                value="Upload"
                onClick={this.thisFileUpload.bind(this)}
              >
                Upload a CSV
              </Button>
            </div>
            <div id="dvCSV"></div>
          </div>

          <br />

          <Container>
            <Row>
              <Col xs={4} md={4} className="no-padding">
                <div className="left-side-divider"></div>
              </Col>
              <Col xs={1} md={1} className="or-padding">
                <div className="or">OR</div>
              </Col>
              <Col xs={7} md={7} className="no-padding">
                <div className="right-side-divider"></div>
              </Col>
            </Row>
          </Container>
          <br />

          {/*  */}
          <div className="text-left-alignment">
            <div className="sub-title">Connect a database.</div>
            <br />
            <div className="small-title">
              In order to ensure Obviously AI has access to your database,
              please whitelist our IP address <span className="green-text">104.198.187.43</span> on your database
              firewall.
            </div>

            {/*  */}
            <form onSubmit={this.handleSubmit}>
              <Container className="container-file-uploader" fluid>
                <Row className="row-margin-layout">
                  <Col xs={12} md={2} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding-for-buttons">
                        
                        <Button className={isMySQL ? "db-buttons btn-green" : "db-buttons dark-txt"} onClick={() => {this.handleDBSelect("mysql")}}>
                          <DiStreamline color={isMySQL ? "white" : "black"} size="4em" />
                          <br />
                          MySQL
                        </Button>
                        <br />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={2} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding-for-buttons">
                        <Button className={isPSQL ? "db-buttons btn-green" : "db-buttons dark-txt"} onClick={() => {this.handleDBSelect("postgresql")}}>
                          <DiStreamline color={isPSQL ? "white" : "black"} size="4em" />
                          <br />
                          PostgreSQL
                        </Button>
                        <br />
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />

                <Row className="row-margin-layout">
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Display name</span>
                        <br />
                        <input
                          className="input-text"
                          id="displayname"
                          type="text"
                          value={this.state.displayname}
                          name="Display name"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={8} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Description</span>
                        <br />
                        <input
                          className="input-text"
                          id="description"
                          type="text"
                          name="Company"
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="row-margin-layout">
                  <Col xs={12} md={8} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Host</span>
                        <br />
                        <input
                          className="input-text"
                          id="host"
                          type="text"
                          value={this.state.host}
                          name="Host"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Port</span>
                        <br />
                        <input
                          className="input-text"
                          id="port"
                          type="text"
                          name="Port"
                          value={this.state.port}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="row-margin-layout">
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Username</span>
                        <br />
                        <input
                          className="input-text"
                          id="username"
                          type="text"
                          value={this.state.username}
                          name="Username"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Password</span>
                        <br />
                        <input
                          className="input-text"
                          id="password"
                          type="password"
                          name="Company"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Database</span>
                        <br />
                        <input
                          className="input-text"
                          id="database"
                          type="text"
                          name="Database"
                          value={this.state.database}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row className="row-margin-layout">
                  <Col xs={12} md={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding-button">
                        <span>
                          <Button className="add-this-database" type="submit">
                            Add this database
                          </Button>
                        </span>
                        <br />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DatasetsPage;
