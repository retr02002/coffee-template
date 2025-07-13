import React from "react";
import { Col } from "react-bootstrap";
import './Style.css'

export default function CardComp({
  title = "Cappuccino",
  body = "Usage of the Internet is becoming more common due to rapid advance.",
  price = "$49"
  
}) {
  return (
    <>
      <Col md={3} className="bg-white p-4 rounded-2 me-4 mb-4 shadow">
        <div className="d-flex w-100 justify-content-between">
          <p className="main-font-style fw-bold">{title}</p>
          <p className="main-font-style sub-font fw-bold">{price}</p>
        </div>
        <p className="main-font-style theme-text-size">
          {body}
        </p>
      </Col>
    </>
  );
}
