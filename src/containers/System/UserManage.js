import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./userManage.scss";
import { getAllUssers , createNewUserService, deleteUserService, editUserService} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import {emitter} from "../../utils/emitter"

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {}
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUssers("ALL");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrrUsers: response.users,
        }
      )
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
  };

  toggleUserEditModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser
    })
  }

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if(response && response.errCode !==0) {
        alert(response.errMessage)
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false
        })
        emitter.emit('EVENT-CLEAR_MODAAL_DATA')
      }
    }catch(e) {
      console.log(e)
    }
  }

  handleDeleteUser = async (user) => {
    try {
      let res = await deleteUserService(user.id);
      if(res && res.errCode === 0) {
        await this.getAllUsersFromReact();
      } else {
        console.log( res.errMessage)
      }
    } catch(e) {
      console.log(e);
    }
  }

  handleEditUser = (user) => {
    // console.log('edit', user);
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user
    })
  }

  saveEditUser =async (user) => {
    
    
    // console.log('check user save edit', res);
    try {
      let res = await editUserService(user);
      if(res && res.errCode ===0) {
        this.setState({
          isOpenModalEditUser: false
        })
        await this.getAllUsersFromReact();
      } else {
        alert(res.errMessage)
      }
    }catch(e) {
      console.log(e)
    }

  }

  render() {
    let arrrUsers = this.state.arrrUsers;
    return (
      <div className="user-container">
        <ModalUser 
            isOpen = {this.state.isOpenModalUser}
            toggleFromParent ={this.toggleUserModal}
            createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEditUser && 
        <ModalEditUser 
          isOpen = {this.state.isOpenModalEditUser}
          toggleFromParent ={this.toggleUserEditModal}
          editUser={this.saveEditUser}
          currentUser ={this.state.userEdit}
        />
      }
        <div className="title text-center">Edit user</div>
        <div className="users-table mt-3 mx-1">
            <div className="mx-1">
                <button className="btn btn-primary px-3  mb-3"
                        onClick={() => {this.handleAddNewUser()}}
                
                ><i className="fas fa-plus"></i> Add new user</button>
            </div>
          <table id="customers">
          <tbody>
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
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit"><i className="fas fa-pencil-alt" onClick={()=> {this.handleEditUser(item)}}></i></button>
                        <button className="btn-delete"><i className="fas fa-trash-alt" onClick={()=> {this.handleDeleteUser(item)}}></i></button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
              
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
