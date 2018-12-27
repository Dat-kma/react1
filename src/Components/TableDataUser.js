import React, { Component } from 'react';

class TableDataUser extends Component {
    permissionShow=()=>{
        if(this.props.chucvu === 1){
            return "Admin";
        }
        else if(this.props.chucvu === 2){
            return "Moderator";
        }
        else{
            return "Normal";
        }
    }
    editClick=() => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick =(idUser) => {
        this.props.deteleButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td >{this.props.Stt+1}</td>
                <td>{this.props.username}</td>
                <td>{this.props.Phone}</td>
                <td>{this.permissionShow()}</td>
                <td> 
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=> this.editClick()}>
                    <i className="fa fa-edit">sửa</i>
                    </div>
                    <div className="btn btn-danger xoa" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}>
                    <i className="fa fa-delete ">xóa</i>
                    </div>
                </div>
                </td>
          </tr>
        );
    }
}

export default TableDataUser;