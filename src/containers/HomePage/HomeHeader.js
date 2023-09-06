import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import {LANGUAGES} from "../../utils";
import {changeLangguageApp} from "../../store/actions"

class HomeHeader extends Component {

  changeLanguage =(language) => {
    this.props.changeLangguageAppRedux(language)
  }
  render() {
    let language = this.props.language;
    console.log('check language: ', language)
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-hearder.branch"/></b>
                </div>
                <div className="content-child"><FormattedMessage id="home-hearder.choosethenearestbranch"/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-hearder.coach"/></b>
                </div>
                <div className="content-child">
                <FormattedMessage id="home-hearder.choosecoach"/>
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-hearder.trainingpackages"/></b>
                </div>
                <div className="content-child"><FormattedMessage id="home-hearder.basetrainingpackages"/></div>
              </div>
            </div>

            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
              </div>
              <div><FormattedMessage id="home-hearder.help"/></div>
              <div className={language === LANGUAGES.VI ? 'language-vi action' : 'language-vi'}><span onClick={()=> this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
              <div className={language === LANGUAGES.EN ? 'language-en action' : 'language-en'}><span onClick={()=> this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
            </div>
          </div>
          <div className="home-header-banner">
            <div className="top-banner">
              <div className="title1">ONLY WORKOUT</div>
              <div className="title2">CAN SAVE US</div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  className="input-banner"
                  placeholder="search"
                />
              </div>
            </div>

            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-friends"></i>
                </div>
                <div className="text-child"><FormattedMessage id="banner.directconsultation"/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-percent"></i>
                </div>
                <div className="text-child"><FormattedMessage id="banner.promotionprogram"/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-dumbbell"></i>
                </div>
                <div className="text-child"><FormattedMessage id="banner.pt"/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-universal-access"></i>
                </div>
                <div className="text-child"><FormattedMessage id="banner.erobicclass"/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-walking"></i>
                </div>
                <div className="text-child">Khóa học giảm cân</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
    changeLangguageAppRedux: (language) => dispatch(changeLangguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
