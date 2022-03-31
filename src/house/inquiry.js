import { useState } from "react";

const Inquiry = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: ""
  });


  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          className="form-control"
          placeholder="Name"
          value={contactInfo.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input 
          type="text"
          id="email"
          className="form-control"
          placeholder="Email"
          value={contactInfo.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks">Remarks</label>
        <input 
          type="text"
          id="remarks"
          className="form-control"
          placeholder="Remarks"
          value={contactInfo.remarks}
        />
      </div>
    </form>
  );
}

export default Inquiry;