import React from "react";
import "../";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>RR BOOKING</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Santiago, Chile </li>
              <li>#123 direccion restaurant</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Desarrolladores</h4>
            <ui className="list-unstyled">
              <li>Ignacio Rivero, </li>
              <li>Richard Vasquez</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Horarios de atencion</h4>
            <ui className="list-unstyled">
              <li>Mañana: 11:00 16:00</li>
              <br/>
              <li>Tarde: 17:00 23:00</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} RRBBOKING | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;