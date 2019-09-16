import React from "react";
import "./menuBar.css";
import menu_logo from "../images/logo.png";
import profile_image from "../images/profile.png";
import { DiAptana } from "react-icons/di";
import { FaWpexplorer } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };
  }

  handleMenuItemClick(e) {
    let val = e.currentTarget.textContent;
    console.log("Clicked on ", val);
  }

  handleSubmenuToggle() {
    this.setState({
      showDropDown: !this.state.showDropDown
    });
  }

  handleSubMenuItemClick(e){
    let val = e.currentTarget.textContent;
    console.log("Clicked on ", val);
  }

  render() {
    return (
      <div className="menu-width">
        <div>
          <img className="menu-logo" alt="Menu Logo" src={menu_logo} />
        </div>
        <div className="parnt">
          <div className="child1">
            <img
              className="profile-img"
              alt="Profile Img"
              src={profile_image}
            />
          </div>
          <div className="child2">
            <span className="profile-name">Monica Greenleaf</span>
            <br />
            <span className="company-name">Microsoft Inc.</span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <ul className="ul-padding">
            <a
              className="remove-decoration"
              href="javascript:void(0);"
              onClick={this.handleMenuItemClick.bind(this)}
            >
              <li className="menu-item-list">
                <FaWpexplorer /> Explore
              </li>
            </a>
            <a
              className="remove-decoration"
              href="javascript:void(0);"
              onClick={this.handleMenuItemClick.bind(this)}
            >
              <li className="menu-item-list">
                <FaBook /> Definition
              </li>
            </a>
            <a className="remove-decoration" href="/settings">
              <li className="menu-item-list">
                <DiAptana /> Settings
              </li>
            </a>
            <a
              className="remove-decoration"
              href="javascript:void(0);"
              onClick={this.handleMenuItemClick.bind(this)}
            >
              <li className="menu-item-list">
                <IoIosHelpCircleOutline />
                Help
              </li>
            </a>
            <li className="menu-item-list">
              <a
                className="remove-decoration"
                href="javascript:void(0);"
                onClick={this.handleMenuItemClick.bind(this)}
              >
                My Predictions
              </a>
              <a
                href="javascript:void(0);"
                className="icon-ddn"
                onClick={this.handleSubmenuToggle.bind(this)}
              >
                <IoMdAddCircleOutline />
              </a>
            </li>
            {this.state.showDropDown ? (
              <ul className="sub-lst">
                <a className="remove-decoration" href="javascript:void(0);" onClick={this.handleSubMenuItemClick.bind(this)}><li>MoM user churn for Q3</li></a>
                <a className="remove-decoration" href="javascript:void(0);" onClick={this.handleSubMenuItemClick.bind(this)}><li>Merch sales for Jan</li></a>
                <a className="remove-decoration" href="javascript:void(0);" onClick={this.handleSubMenuItemClick.bind(this)}><li>State-wise donor prediction</li></a>
              </ul>
            ) : (
              ""
            )}

            <a className="remove-decoration" href="/datasets">
              <li className="menu-item-list">My Datasets</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuBar;
