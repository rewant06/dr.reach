import React from "react";
import AppointType from "./AppointType";
import appointTypes from "../../constant/appointType";

function appointmentType(type){
  return(
    <AppointType
      key = {type.id}
      types = {type.type}
    />
  );
}

function Form() {
  return (
    <div className="col">
      <form>
        
        <div className="form-row">
          <div className="form-group col-lg-4">
            <label htmlFor="inputPatientName">Patient Name</label>
            <input type="text" className="form-control" id="inputPatientName" placeholder="" />
          </div>


          <div className="form-group col-lg-4">
          <label htmlFor="appointmentType">Appointment Type</label>
          <select name="" className="form-control wide" id="appointmentType">
          {appointTypes.map(appointmentType)}
          </select>
        </div>

         
         

          {/* Other form fields... */}

          <div className="form-group col-lg-4">
            <label htmlFor="chooseDate">Choose Date</label>
            <div className="input-group date" id="chooseDate" data-date-format="mm-dd-yyyy">
              <input type="text" className="form-control" readOnly />
              <span className="input-group-addon date_icon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <button type="submit" className="btn">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
