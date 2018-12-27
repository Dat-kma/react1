import React, { Component } from 'react';
import './../App.css';
import Header from './Header'
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienthiForm:false,
      data: DataUser,
      searchText:'',
      editUserStatus:false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    // kiem tra xem co localStorage nay chua
    if(localStorage.getItem('userData')=== null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }
  
  deleteUser=(idUser)=>{
    var tempData=this.state.data.filter(item=> item.id !== idUser);
    this.setState({
      data:tempData
    });
    // day vao du lieu
    localStorage.setItem('userData',JSON.stringify(tempData))
  }
  getUserEditInfoApp=(info) => {
    this.state.data.forEach((value,key)=>{
     if(value.id===info.id){
       value.name= info.name;
       value.tel= info.tel;
       value.Permission= info.Permission;
     }
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  // hàm này dùng để thay đổi trạng thái cho phần from 
  doiTrangThai=()=>{
    this.setState({
      hienthiForm: !this.state.hienthiForm
    })
  }
   // hàm này dùng để thay đổi trạng thái cho phần from 

  // hàm bắt đầu xử lí phần search thông tin, hàm này dùng để search 
  getTextSearch=(x)=>{
    this.setState({
      searchText:x
    })
    
  }
    // kết thúc xử lí phần search thông tin\
  // thêm dữ liệu phục vụ adduser
  getNewUserData=(name,tel,Permission) => {
    var item={}
    item.id=uuidv1();
    item.name=name;
    item.tel=tel;
    item.Permission=Permission;
    var items =this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userData',JSON.stringify(items));
  }
   // thêm dữ liệu phục vụ adduser
  
   editUser=(user) => {
     console.log('da ke noi');
     console.log(user);
     this.setState({
       userEditObject:user
     });
     localStorage.setItem('userData',JSON.stringify(user));
     
   }
   changeEditUserStatus=() => {
     this.setState({
       editUserStatus: !this.state.editUserStatus
     });
   }


  render() {
    var  ketQua=[];
    this.state.data.forEach((item)=> {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    }); 
    return (
      <div>
        <Header></Header>
        <div className="container">
            <div className="row">
                <Search 
                getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                changeEditUserStatus={()=> this.changeEditUserStatus()}
                 editUserStatus={this.state.editUserStatus} 
                 ketNoi={()=>this.doiTrangThai()} 
                 showForm={this.state.hienthiForm} 
                 getTextSearchProps={(x)=>this.getTextSearch(x)}>
                 </Search>

                <TableData
                  deleteUser={(idUser)=>this.deleteUser(idUser)}
                  changeEditUserStatus={()=> this.changeEditUserStatus()} 
                  editFun={(user)=>this.editUser(user)} 
                  dataUserProps={ketQua}  >
                </TableData>

                <AddUser add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)}
                 showForm={this.state.hienthiForm}>
                 </AddUser>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
