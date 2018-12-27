import React, { Component } from 'react';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            Permission: "",
        }
    }
    
    isChangeForm=(event) => {
        const name =event.target.name;
        const value =event.target.value;
        this.setState({
            [name]:value
        });
        
    }
    kiemTraTrangThai =()=>{
        if(this.props.showForm === true){
            return (
                <div className="col-12">
                <form>
                <div className="card border-primary mb-3" >
                        <div className="card-header">Thêm mới User vào hệ thống </div>
                        <div className="card-body text-primary">    
                            <div className="form-group">
                                <input type="text" onChange={(event)=>this.isChangeForm(event)} name="name" className="form-control"  placeholder="Ten User" />
                            </div> 
                            <div className="form-group">
                                <input type="text" onChange={(event)=>this.isChangeForm(event)} name="tel" className="form-control"  placeholder="Điện thoại" />
                            </div>     
                            <div className="form-group">
                            <select onChange={(event)=>this.isChangeForm(event)} name="Permission" className="custom-select" required>
                                <option value={0} >Chọn Quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới"/>
                                
                            </div>       
                        </div>
                 </div>
                 </form>
                 </div>
            )
        }
    }
    render() {   
        return (
          
                <div >
                    {this.kiemTraTrangThai()}
                </div>
            

        );
    }
}

export default AddUser;