import React, { Component } from "react";
import { connect } from "react-redux";
import "./OurClass.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourclass1 from "../../../assets/ourclass1.jpg"
import ourclass2 from "../../../assets/ourclass2.jpg"
import ourclass3 from "../../../assets/ourclass3.jpg"
import ourclass4 from "../../../assets/ourclass4.webp"
import ourclassfitness from "../../../assets/ourclassfitness.jpg"
import ourclassmuscle from "../../../assets/ourclassmuscle.jpg"

class OurClass extends Component {

  
  render() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

      
    return (
      <div className="section-ourclass">
        <div className="ourclass-content">
        <Slider {...settings}>
      <div className="img-custom">
      <img alt="" src={ourclassfitness} style={{width: "95%", height: "250px", objectFit: "cover"}}/>
        <div>Muscle</div>
      </div>
      <div className="img-custom">
        <img alt=""src={ourclass2} style={{width: "95%", height: "250px", objectFit: "cover"}}/>
        <div>Nhảy dây</div>
      </div>
      <div className="img-custom">
      <img alt=""src={ourclass3} style={{width: "95%", height: "250px", objectFit: "cover"}}/>
        <div>Bơi lội</div>
      </div>
      <div className="img-custom">
      <img alt=""src={ourclass4} style={{width: "95%", height: "250px", objectFit: "cover"}}/>
        <div>Chạy bộ</div>
      </div>
      <div className="img-custom">
      <img alt=""src={ourclassmuscle} style={{width: "95%", height: "250px", objectFit: "cover"}}/>
        <div>Fitness</div>
      
      </div>
      <div className="img-custom">
      
        <img alt=""src={ourclass1} style={{width: "95%", height: "250px", objectFit: "cover"}}/>
        <div>Lớp học Erobic</div>
      </div>
      
    </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OurClass);



