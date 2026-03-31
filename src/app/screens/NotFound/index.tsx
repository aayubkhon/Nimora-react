import React from 'react'
import "../../../css/footer.scss";
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not_found_frame">
    <img
      className="oops"
      src="/home/not_found.png"
      alt="404"
    />

    <h1 className="title">OOPS!</h1>
    <h2 className="subtitle">404 Error Not Found</h2>
    <h1 className="subtitle_mobile">Mobile Version is on Proccessing</h1>
    <p className="desc">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>

    <NavLink to={"/"} className="back-btn">BACK TO HOME</NavLink>
  </div>
  )
}

export default NotFound