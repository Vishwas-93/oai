import React, { Component } from "react";
import group from "../images/group.svg";
import "./SettingsContainer.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { iosBellOutline } from "react-icons-kit/ionicons/iosBellOutline";
import { withBaseIcon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";

const SideIconContainer = withBaseIcon({ size: 20, style: { color: "black" } });
const PlusIconContainer = withBaseIcon({ size: 30, style: { color: "black" } });

export const BellOutline = () => <SideIconContainer icon={iosBellOutline} />;
export const PlusIcon = () => <PlusIconContainer icon={plus} />;

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Monica Greenleaf",
      company: "Microsoft, Inc.",
      email: "monica.greenleaf@microsoft.com",
      current_password: "abcdef",
      new_password: "abcdef",
      repeat_password: "abcdef",
      card_no: "1234-5678-9101-1121",
      expiration: "10/22",
      cvv: "211",
      zip: "00000",
      plan: "premium",
      ref_name: "Dwayne “The Rock” Johnson",
      ref_email: "john.wick@microsoft.com",
      exis_user1_name: "Monica Greenleaf",
      exis_user1_email: "monica.greenleaf@microsoft.com",
      exis_user2_name: "John Wick",
      exis_user2_email: "john.wick@microsoft.com",
      exis_user3_name: "Tom Cruise",
      exis_user3_email: "tom.cruise@microsoft.com",
      exis_user4_name: "Emma Stone",
      exis_user4_email: "emma.stone@microsoft.com"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlanClick = id => {
    this.setState({
      plan: id
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    //   console.log(event)
    event.preventDefault();
    //   const data = new FormData(event.target);
    console.log("Form Data: ", this.state);
  };

  handleAddInvite = event => {
    console.log("Invite Rock");
  };

  handleSignOut = event => {
    console.log("Clicked on Sign out");
  };

  handleUpgrade = event => {
    console.log("Clicked on Upgrade");
  };

  handleNotifications = event => {
    console.log("Clicked on Handle Notifications");
  };

  render() {
    return (
      <div
        className="settings-container"
        style={{ backgroundImage: `url(${group})` }}
      >
        <div className="settings-content">

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
              All your <br />
              settings in one place.
            </div>
            <br />
            <div className="sub-title">
              Manage account details, billing and users.
            </div>
          </div>
          <br />
          <br />

          
          {/* Layout */}
          <div className="info-layout">
            <form onSubmit={this.handleSubmit}>
              <Container fluid>
                <Row className="row-margin-layout">
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Name</span>
                        <br />
                        <input
                          className="input-text"
                          id="name"
                          type="text"
                          value={this.state.name}
                          name="name"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Company</span>
                        <br />
                        <input
                          className="input-text"
                          id="company"
                          type="text"
                          name="Company"
                          value={this.state.company}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Email</span>
                        <br />
                        <input
                          className="input-text"
                          id="email"
                          type="text"
                          name="Email"
                          value={this.state.email}
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
                        <span className="top-text">Current Password</span>
                        <br />
                        <input
                          className="input-text"
                          id="current_password"
                          type="password"
                          name="Current Password"
                          value={this.state.current_password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">New Password</span>
                        <br />
                        <input
                          className="input-text"
                          id="new_password"
                          type="password"
                          name="New Password"
                          onChange={this.handleChange}
                          value={this.state.new_password}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Repeat Password</span>
                        <br />
                        <input
                          className="input-text"
                          id="repeat_password"
                          type="password"
                          name="Repeat Password"
                          onChange={this.handleChange}
                          value={this.state.repeat_password}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="row-margin-layout">
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Card Number</span>
                        <br />
                        <input
                          className="input-text"
                          id="card_no"
                          type="text"
                          name="Card Number"
                          onChange={this.handleChange}
                          value={this.state.card_no}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout">
                      <div className="col-padding">
                        <span className="top-text">Expiration</span>
                        <br />
                        <input
                          className="input-text"
                          id="expiration"
                          type="text"
                          name="Expiration"
                          onChange={this.handleChange}
                          value={this.state.expiration}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} sm={12}>
                    <Row>
                      <Col xs={6} md={6} className="adjust-col-padding">
                        <div className="col-padding">
                          <span className="top-text">CVV</span>
                          <br />
                          <input
                            className="input-text"
                            id="cvv"
                            type="text"
                            name="CVV"
                            onChange={this.handleChange}
                            value={this.state.cvv}
                          />
                        </div>
                      </Col>
                      <Col xs={6} md={6} className="adjust-col-padding">
                        <div className="col-padding">
                          <span className="top-text">Zip</span>
                          <br />
                          <input
                            className="input-text"
                            id="zip"
                            type="text"
                            name="Zip"
                            onChange={this.handleChange}
                            value={this.state.zip}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="row-margin-layout-big">
                  <Col xs={12} md={4} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout-big">
                      <div className="col-padding-big">
                        <span className="top-text">Membership</span>
                        <br />
                        <span className="bottom-text">
                          Switch to another plan or cancel membership
                        </span>
                        <br />
                        <span className="top-text">Current Plan</span>
                        <br />
                        <br />
                        <Button
                          className="btn-inside-layout"
                          id="premium"
                          onClick={() => {
                            this.handlePlanClick("premium");
                          }}
                        >
                          <span className="button-left">Premium</span>
                          <span className="button-right">$799 /mo</span>
                        </Button>
                        <br />
                        <br />
                        <span className="top-text">Other Plans</span>
                        <br />
                        <br />
                        <Button
                          className="btn-inside-layout"
                          id="basic"
                          onClick={() => {
                            this.handlePlanClick("basic");
                          }}
                        >
                          <span className="button-left">Basic</span>
                          <span className="button-right">$299 /mo</span>
                        </Button>
                        <br />
                        <br />
                        <Button
                          className="btn-inside-layout"
                          id="standard"
                          onClick={() => {
                            this.handlePlanClick("standard");
                          }}
                        >
                          <span className="button-left">Standard</span>
                          <span className="button-right">$499 /mo</span>
                        </Button>
                        <br />
                        <div className="text-left-side-items">
                          <span className="bottom-text">
                            To cancel membership email us at info@obviously.ai.
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={8} sm={12} className="adjust-col-padding">
                    <div className="column-height-layout-big">
                      <div className="col-padding-big">
                        <span className="top-text">User Seats</span>
                        <br />
                        <span className="bottom-text">
                          Invite another user from your company to Obviously AI.
                        </span>

                        <Row className="inner-row-padding">
                          <Col
                            xs={12}
                            md={5}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding">
                              <span className="top-text">Name</span>
                              <br />
                              <input
                                className="input-text"
                                id="ref_name"
                                type="text"
                                onChange={this.handleChange}
                                name="Referred Name"
                                value={this.state.ref_name}
                              />
                            </div>
                          </Col>
                          <Col
                            xs={12}
                            md={5}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding">
                              <span className="top-text">Email</span>
                              <br />
                              <input
                                className="input-text"
                                id="ref_email"
                                type="text"
                                onChange={this.handleChange}
                                name="Referred Email"
                                value={this.state.ref_email}
                              />

                            </div>
                          </Col>
                          <Col
                            xs={12}
                            md={2}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding plus-btn-col-padding">
                              <Button
                                className="plus-button"
                                onClick={this.handleAddInvite}
                              >
                                <PlusIcon />
                              </Button>
                            </div>
                          </Col>
                        </Row>

                        <br />
                        <div className="text-left-side-items">
                          <span className="top-text">Existing users</span>
                          <br />
                        </div>
                        <br />
                        <Row className="inner-row-padding">
                          <Col
                            xs={12}
                            xl={5}
                            lg={12}
                            md={12}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding">
                              <span className="top-text">
                                {this.state.exis_user1_name}
                              </span>
                              <br />
                              <span className="bottom-text">
                                {this.state.exis_user1_email}
                              </span>
                            </div>
                          </Col>
                          <Col
                            xs={12}
                            xl={5}
                            lg={12}
                            md={12}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding">
                              <span className="top-text">
                                {this.state.exis_user2_name}
                              </span>
                              <br />
                              <span className="bottom-text">
                                {this.state.exis_user2_email}
                              </span>
                            </div>
                          </Col>
                        </Row>
                        <Row className="inner-row-padding">
                          <Col
                            xs={12}
                            xl={5}
                            lg={12}
                            md={12}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding">
                              <span className="top-text">
                                {this.state.exis_user3_name}
                              </span>
                              <br />
                              <span className="bottom-text">
                                {this.state.exis_user3_email}
                              </span>
                            </div>
                          </Col>
                          <Col
                            xs={12}
                            xl={5}
                            lg={12}
                            md={12}
                            sm={12}
                            className="adjust-col-padding"
                          >
                            <div className="col-padding">
                              <span className="top-text">
                                {this.state.exis_user4_name}
                              </span>
                              <br />

                              <span className="bottom-text">
                                {this.state.exis_user4_email}
                              </span>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-left-side-items">
                          <span className="bottom-text">
                            You have 1 of 5 free seats left. Your card will be
                            charged $10 /mo for each additional user thereon.
                          </span>
                          <br />
                        </div>
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
                          <Button className="update-all-buttons" type="submit">
                            Update All Settings
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

export default SettingsPage;
