import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container text-center  mt-15">
        <div className="row">
          <div className="col-sm-12 ">
            <h1>
              SignLanDetect {" "}
              <span style={{ fontFamily: "monospace" }}>&nbsp;Web App</span> 
            </h1>
            <p>İşaret dilini öğrenerek  işetme kaybı yaşayan insanları anlayalım.</p>
            </div>
            </div>
            <div className="row mt-4">
            <div className="col-sm-12">
              <Link
                to="/register"
                className="btn btn-large btn-dark hoverable"
              >
               Kayıt Ol
              </Link>
              <Link
                to="/login"
                className="btn btn-large btn-light hoverable ml-5"
              >
               Giriş Yap
              </Link>
            </div>
           
          </div>
        </div>
      
    );
  }
}
export default Landing;