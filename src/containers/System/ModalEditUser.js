import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import _ from "lodash";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "harcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
    // console.log("check ditmount edit modal", this.props.currentUser);
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchanInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  ValidateData = () => {
    let isValid = true;
    let arrState = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrState.length; i++) {
      if (!this.state[arrState[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrState[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = () => {
    let isValid = this.ValidateData();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };

  render() {
    // console.log("check child prop", this.props);
    // console.log("check child prop modal", this.props.isOpen);
    // console.log('check props from parent', this.props)
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className="modal-user-caontainer"
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                onChange={(event) => {
                  this.handleOnchanInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className="input-container">
              <label>password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnchanInput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Firstname</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchanInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Lastname</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchanInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchanInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleSaveUser()}
          >
            Update user
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
