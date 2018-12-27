import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="display-3">Project quản lý thành viên bằng react js với dữ liệu json</h1>
              <p className="lead"> với dữ liệu json</p>
              <hr className="my-2" />
            </div>
          </div>
          
        );
    }
}

export default Header;