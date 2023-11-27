import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './login.css';






function Login() {
    const [formData, setFormData] = useState({
        students_emailId: '',
        password: '',
      });
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/login', formData);
          // Handle login response here
          console.log(response.data); // Example: response.data will contain login response
          if (response.data.message === "Email not exists") {
            alert("Email not exists");
          } else if (response.data.message === "Login Success") {
            navigate('/home');
          } else {
            alert("Incorrect Email and Password not match");
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };







  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="students_emailId">Email:</label>
        <input
          type="email"
          id="students_emailId"
          name="students_emailId"
          value={formData.students_emailId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);
  
}

export default Login