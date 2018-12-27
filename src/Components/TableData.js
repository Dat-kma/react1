import React, { Component } from 'react';
import TableDataUser from './TableDataUser';

class TableData extends Component {
    deteleButtonClick =(idUser) => {
     this.props.deleteUser(idUser);
      
    }
    mappingDataUser=()=>this.props.dataUserProps.map((value,key) =>(
        <TableDataUser 
        deteleButtonClick={(idUser)=>this.deteleButtonClick(idUser)}
        changeEditUserStatus={()=> this.props.changeEditUserStatus()} 
        editFunClick={(user)=>this.props.editFun(value)}
        id={value.id}
         Stt={key} 
         username={value.name} 
         Phone={value.tel} 
         chucvu={value.Permission} key={key}
          />
      ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse ">
                  <thead className="thead-inverse">
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Điện Thoại</th>
                      <th>Quyền</th>
                      <th>Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.mappingDataUser()}
                  </tbody>
                </table>
           </div>

        );
    }
}

export default TableData;