import React from "react";
import Form from "./Form";
import Navbar from "../navbar/Navbar";

function Booking() {
  return (
   <div>
<Navbar/>
<section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="booking-heading">
              BOOK <span>APPOINTMENT</span>
            </h4>
            <Form />
          </div>
        </div>
      </div>
    </section>
   </div> 
    
  );
}

export default Booking;
