import React from "react";
import "../";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>RR BOOKING</h4>
            <h1 className="list-unstyled">
              <li>+569 9999 99999</li>
              <li>Talca, Chile </li>
              <li>#123 direccion restaurant</li>
            </h1>
          </div>
          <div className="col">
            <h4>Horarios de atencion</h4>
            <ui className="list-unstyled">
              <li>Mañana: 11:00 16:00</li>
              <br/>
              <li>Tarde: 17:00 23:00</li>
            </ui>
          </div>
          <div className="col">
            <h4>Desarrolladores</h4>
            <ui className="list-unstyled">
              <li>Ignacio Rivero </li>
              <br/>
              <li>Richard Vasques</li> 
            </ui>
          </div>
          <div className="col">
            <h4>Redes Sociales</h4>
            <ui className="list-unstyled">
              <li>Instagram:@RRBBOOKING</li>
              <br/>
              <li>Correo: rrbooking@contacto.com</li>
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