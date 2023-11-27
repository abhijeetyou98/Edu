import React, { useState } from 'react';
import './registration.css';

function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    studentstName: '',
    students_number: '',
    students_emailId: '',
    parentsName: '',
    parents_number: '',
    parents_emailId: '',
    grade: '',
    password: '',
    board: '',
    paymentMethod: '',
  });

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
      const response = await axios.post('/api/register', formData);
      console.log(response.data); // You can handle the response from the server here
      alert('Registration successful');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed');
    }
  };

  const gradeOptions = Array.from({ length: 12 }, (_, index) => index + 1);


  return (
    <div>
    <h2>Student Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="studentstName">Student Name:</label>
        <input
          type="text"
          id="studentstName"
          name="studentstName"
        
          value={formData.studentstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="students_number">Student Number:</label>
        <input
          type="text"
          id="students_number"
          name="students_number"
          value={formData.students_number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="students_emailId">Student Email:</label>
        <input
          type="email"
          id="students_emailId"
          name="students_emailId"
          value={formData.students_emailId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="parentsName">Parents Name:</label>
        <input
          type="text"
          id="parentsName"
          name="parentsName"
          value={formData.parentsName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="parents_number">Parents Number:</label>
        <input
          type="text"
          id="parents_number"
          name="parents_number"
          value={formData.parents_number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="parents_emailId">Parents Email:</label>
        <input
          type="email"
          id="parents_emailId"
          name="parents_emailId"
          value={formData.parents_emailId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
          <label htmlFor="grade">Grade:</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            {gradeOptions.map((grade) => (
              <option key={grade} value={grade}>
                {grade}th Std
              </option>
            ))}
          </select>
        </div>
      <div>
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
      <div>
          <label htmlFor="board">Board:</label>
          <select
            id="board"
            name="board"
            value={formData.board}
            onChange={handleChange}
            required
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="IB">IB</option>
          </select>
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
  
}

export default StudentRegistrationForm;

 {/* Render input fields similar to your entity properties */}
        {/* Use handleChange to handle input changes */}
        {/* Use gradeOptions to render the grade dropdown */}
        {/* Use submit button */}