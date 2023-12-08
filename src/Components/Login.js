import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { LoginSuccess } from "./Action";
 
const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    let isvalid = true;
    let validationErrors = {};
 
    if (!formData.email || formData.email.trim() === "") {
      isvalid = false;
      validationErrors.email = "Email is required";
    }
    if (!formData.password || formData.password.trim() === "") {
      isvalid = false;
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      isvalid = false;
      validationErrors.password = "Password should be at least 8 characters";
    }
 
    setErrors(validationErrors);
    setValid(isvalid);
 
    if (isvalid) {
      axios
        .get("http://localhost:3000/users")
        .then((response) => {
          const user = response.data.find(
            (user) => user.email === formData.email
          );
 
          if (user) {
            if (user.password === formData.password) {
              toast.success("Login successful");
              navigate("/ ");
             
            } else {
              toast.error("Wrong password")
            }
          } else {
            toast.error("User not found, Please register yourself!")
         
          }
        })
        .catch((err) => console.log(err, "error while fetching users"));
    }
  };
 
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
 
        <div className="input-group">
          <label className="label">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
 
        <button type="submit">Login</button>
 
        <p>
          <u>Don't have an account?</u>{" "}
          <span
            className="RegisterNav"
            onClick={() => {
              navigate("/signup");
            }}
            style={{ color: "blue" }}
          >
            register here
          </span>
        </p>
      </form>
    </>
  );
};
 
export default Login;