import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./userManage.scss";
import { getAllUssers } from "../../services/userService";
import ModalUser from "./ModalUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    let response = await getAllUssers("ALL");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrrUsers: response.users,
        },
        () => {
          console.log("check state user", this.state.arrrUsers);
        }
      );
    }
  }
  handleAddNewUser = () => {
    this.setState({
        isOpenModalUser: true
    })
  }

  toggleUserModal = () => {
    this.setState({
        isOpenModalUser: !this.state.isOpenModalUser,
    })
  }

  render() {
    let arrrUsers = this.state.arrrUsers;
    return (
      <div className="user-container">
        <ModalUser 
            isOpen = {this.state.isOpenModalUser}
            toggleFromParent ={this.toggleUserModal}
            className = {'modal-user-caontainer'}
        />
        <div className="title text-center">Manage users with React</div>
        <div className="users-table mt-3 mx-1">
            <div className="mx-1">
                <button className="btn btn-primary px-3  mb-3"
                        onClick={() => {this.handleAddNewUser()}}
                
                ><i class="fas fa-plus"></i> Add new user</button>
            </div>
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>Fristname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
              {arrrUsers &&
                arrrUsers.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                        <button className="btn-delete"><i className="fas fa-trash-alt"></i></button>
                      </td>
                    </tr>
                  );
                })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
