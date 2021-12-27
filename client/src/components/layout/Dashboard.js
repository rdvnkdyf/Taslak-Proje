import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ReactPlayer from 'react-player';

class Dashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    return (
      <div  className="container text-center mt-15">
        <div className="row">
          <div className="col-sm-12">
            <h4>
              Hoşgeldin, <b className="name-lable">{user.name.split(" ")[0]}</b>
              <p className="mt-4">
                Uygulamayı giriş yaptın öğrenmeye başla{" "}
                <span style={{ fontFamily: "monospace" }}>SignLanDetect</span>  👏
              </p>
            </h4>
            <ReactPlayer 
      width='480px'
      height='240px'
      controls url ='https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution'
      onReady={()=> console.log('onReady callback')}
      onStart={()=> console.log('onStart callback')}
      onPause={()=> console.log('onPause callback')}
      onEnded={()=> console.log('onEnded callback')}
      onError={()=> console.log('onError callback')}
      
      />
            <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);