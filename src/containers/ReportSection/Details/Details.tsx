import React from 'react';
import './Details.scss';

export function Details() {
  return (
    <section className="Details">
      <div className="core-container">
        <div className="row">
          <div className=" col-sm-4">
            <div className="Details__box d-flex justify-content-between">
              <span>Commodity:</span>
              <span>Electricity</span>
            </div>

            <div className="Details__box d-flex justify-content-between">
              <span>Country:</span>
              <span>Hungary</span>
            </div>
          </div>
          <div className="col-sm-4">
            <p>Commodity: Electricity</p>
            <p>Country: Hungary</p>
          </div>
          <div className="col-sm-4">
            <p>Commodity: Electricity</p>
            <p>Country: Hungary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
