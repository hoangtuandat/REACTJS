import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import OurClass from "./Section/OurClass";
import ourclass1 from '../../assets/ourclass1.jpg'
import ourclass2 from '../../assets/ourclass2.jpg'
import ourclass3 from '../../assets/ourclass3.jpg'
import ourclass4 from '../../assets/ourclass4.webp'
import ourclassfitness from '../../assets/ourclassfitness.jpg'
import ourclassmuscle from '../../assets/ourclassmuscle.jpg'

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <OurClass arrImages = {[ourclass1, ourclass2, ourclass3, ourclass4, ourclassfitness, ourclassmuscle ]}/>
        <div style={{height: '300px'}}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
