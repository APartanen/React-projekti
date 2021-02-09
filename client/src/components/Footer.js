import React from "react";

export default function Footer() {
  return (
    <div className="Footer mt-5">
      <div className="footer text-center bg-light mt-3">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0 mt-3">
            <h4 className="mb-4">YHTEYSTIEDOT</h4>
            <p className="pre-wrap lead mb-0">Esimerkki 1234</p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="mb-4 mt-3">ESIMERKKI</h4>
            <p className="pre-wrap lead mb-0">Esimerkki 4321</p>
          </div>

          <div className="col-lg-4 mb-5">
            <h4 className="mb-4 mt-3">ESIMERKKI</h4>
            <p className="pre-wrap lead mb-0">Tähän mahtuu myös tekstiä.</p>
          </div>
        </div>
      </div>
    </div>
  );
}