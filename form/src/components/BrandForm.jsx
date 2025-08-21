import React from "react";
import {useState} from "react";
const formBg = { background: "#f3eafa", minHeight: "100vh", padding: "40px 0" };
const diffBox = {
  background: "#fff",
  borderRadius: "12px",
  border: "1px solid #eee",
  boxShadow: "0 1px 4px rgba(60,60,60,0.07)",
  padding: "32px 24px 16px 24px",
  marginBottom: "24px"
};
const boldStyle = { fontWeight: "700" };

const BrandForm = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        department:"",
        position:""
    })
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>
    {
        const {name,value}=e.target;
        setFormData(prev=>({...prev,[name]:value}));
    }
    const validate=()=>
    {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    return newErrors;

    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const formErrors=validate();
        if(Object.keys(formErrors).length>0)
        {
            setErrors(formErrors);
        }
        else{
            setErrors({});
            e.target.submit();
        }
    }
  return (
    <div style={formBg}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Box for Heading and Intro */}
        <div style={{ ...diffBox, paddingBottom: "8px" }}>
          <h1 style={{ marginBottom: 0, ...boldStyle }}>Open Letter Maker</h1>
          <p style={{ marginTop: 4 }}>
            All of the submissions to this form will be appended into a table as signatures in the style of an open letter.
          </p>
          <span style={{ color: "#d32f2f", fontSize: "0.93em", fontWeight: 500 }}>* Required</span>
        </div>

        <form action="http://localhost:5000/submit" method="POST" onSubmit={handleSubmit}>
          <div style={diffBox}>
            <label className="form-label" style={boldStyle}>
              Full Name <span className="text-danger">*</span>
            </label>
            <small className="form-text text-muted d-block mb-2">
              Any text provided here will be used to create a digital signature, including honorifics or degrees
            </small>
            <input
              type="text"
              name="fullName"
              placeholder="Your answer"
              className="form-control border-0 border-bottom rounded-0"
              style={{ boxShadow: "none", background: "transparent" }}
              value={formData.fullName}
              onChange={handleChange}
            />
              {errors.fullName && <small style={{ color: "red" }}>{errors.fullName}</small>}

          </div>
          <div style={diffBox}>
            <label className="form-label" style={boldStyle}>
              Department <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="department"
              placeholder="Your answer"
              className="form-control border-0 border-bottom rounded-0"
              style={{ boxShadow: "none", background: "transparent" }}
              value={formData.department}
              onChange={handleChange}

            />
             {errors.department && <small style={{ color: "red" }}>{errors.department}</small>}
          </div>
          <div style={diffBox}>
            <label className="form-label" style={boldStyle}>
              Position <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="position"
              placeholder="Your answer"
              className="form-control border-0 border-bottom rounded-0"
              style={{ boxShadow: "none", background: "transparent" }}
              value={formData.position}
              onChange={handleChange}
            />
              {errors.position && <small style={{ color: "red" }}>{errors.position}</small>}
          </div>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "purple", color: "white", marginTop: "8px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;
