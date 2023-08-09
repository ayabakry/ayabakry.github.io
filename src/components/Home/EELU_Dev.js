import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CloseCircle } from "../../components/CloseCircle";
import { Normal } from "../../components/Normal";
import { TypeGhostState } from "../../components/TypeGhostState";
import { Property1Bold } from "../../icons/Property1Bold/Property1Bold";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import BoxShadow from './BoxShadow';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';



function EELU_Dev() {



  // const [isBlurred, setIsBlurred] = useState(false);
  // const [isComponentOpen, setIsComponentOpen] = useState(false);

  // const handlePhotoClick = () => {
  //   setIsBlurred(true);
  //   setIsComponentOpen(true);
  // };

  // const handleCloseComponent = () => {
  //   setIsBlurred(false);
  //   setIsComponentOpen(false);
  // };

  return (
    <div className="frame">
      <div className="div">
        <div className="overlap-group">
          <Link to='/home'>
            <div className="min-ads">

              {/* <CloseCircle property1="bold" /> */}
            </div>
          </Link>
       
        </div>
        <div className="nav">
          <div className="div-2">
            <div className="div-3">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector-6.svg"
              />
              <div className="text-wrapper-2">المكتب الإعلامي</div>
            </div>
            <div className="div-3">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector-5.svg"
              />
              <div className="text-wrapper-2">الشؤون الأكاديمية</div>
            </div>
            <div className="div-3">
              <img
                className="vector"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector-4.svg"
              />
              <div className="text-wrapper-2">عن الجامعة</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">الرئيسية</div>
            </div>
          </div>
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/line-1.svg"
          />
          <img
            className="eelu-logo"
            alt="Eelu logo"
            src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/eelu-logo-@2x.png"
          />
          <div className="div-4">
            <div className="div-5">
              <div className="misclanius">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <div className="rectangle-8" />
                <div className="rectangle-9" />
              </div>
              <TypeGhostState className="button" elementClassName="type-ghost-state-default-size-xsmall" text="EN" />
              <img
                className="search"
                alt="Search"
                src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/search.svg"
              />
            </div>
            <div className="div-6">
              <div className="div-3">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector-3.svg"
                />
                <div className="text-wrapper-2">الخدمات</div>
              </div>
              <div className="div-3">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector-2.svg"
                />
                <div className="text-wrapper-2">التدريب</div>
              </div>
              <div className="div-3">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector-1.svg"
                />
                <div className="text-wrapper-2">البحوث</div>
              </div>
              <div className="div-3">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/36b359f3021459960795d0bc1cf7c633/img/vector.svg"
                />
                <div className="text-wrapper-2">الحياة الجامعية</div>
              </div>
            </div>
          </div>

          <button type="button" className="register" >تسجيل الدخول</button>
          <div>
      {/* Your website content */}
      <MessengerCustomerChat
        pageId="106094165920443"
        appId="314186484513077"
      />
    </div>



          {/* <Normal
            className="normal-instance"
            elementClassName="design-component-instance-node"
            size="xsmall"
            state="default"
          /> */}
        </div>
      </div>
    </div>
  );
};





export default EELU_Dev