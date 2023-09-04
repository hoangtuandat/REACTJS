import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {
        

        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                    <i className="fas fa-bars"></i>
                    <div className='header-logo'>

                    </div>
                    </div>
                    <div className='center-content'>
                        
                        <div className='child-content'>
                            <div><b>Chi nhánh phòng tập</b></div>
                            <div className='content-child'>Chọn chi nhánh gần nhất</div>
                        </div>
                        <div className='child-content'>
                            <div><b>Huấn luyện viên</b></div>
                            <div className='content-child'>Chọn huấn luyện viên phù hợp</div>
                        </div>
                        <div className='child-content'>
                            <div><b>Gói tập</b></div>
                            <div className='content-child'>Các gói cơ bản</div>
                        </div>
                    </div>
                    
                    <div className='right-content'>
                        
                        <div className='support'><i className="fas fa-question-circle"></i></div>
                        <div>Hỗ trợ</div>
                        <div className='flag'><b>VN</b></div>
                        
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
