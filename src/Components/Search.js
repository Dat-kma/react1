import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            valueTrungGian:'',
            userObj:{}
        }
    }
    getUserEditInfo=(info) => {
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info);
    }
    isChange=(event)=>{
        this.setState({
             valueTrungGian:event.target.value
        });
        this.props.getTextSearchProps(this.state.valueTrungGian);
    }
    showNut= ()=>{
        if(this.props.showForm === true){
            return <div className="btn btn-block btn-secondary"onClick={() => this.props.ketNoi()} >Đóng lại</div>;
        }
        else{
            return <div className="btn btn-block btn-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }

    isShowEditForm=() => {
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo={(info) => this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject}
            changeEditUserStatus={() => this.props.changeEditUserStatus() } ></EditUser>
        }
    }
    render() {
        
        
        return (
            
                <div className="col-12">
                    {this.isShowEditForm()}
                    <div className="form-group">
                        <div className="btn btn-group">
                            <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Nhập Tên Hoăc Số Đt " />
                            <div className="btn btn-info" onClick={(x)=>this.props.getTextSearchProps(this.state.valueTrungGian)}>Tìm</div>     
                        </div>
                        {this.showNut()}
                        <hr />
                    </div>
                </div>
               
                
                
           

        );
    }
}

export default Search;