import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data and navigate to account
    localStorage.setItem('popx_user', JSON.stringify({
      name: form.fullName || 'Marry Doe',
      email: form.email || 'Marry@Gmail.Com',
    }));
    navigate('/account');
  };

  return (
    <div className="screen form-screen">
      <h1 className="form-title">
        Create your<br />PopX account
      </h1>

      <form onSubmit={handleSubmit} style={{ marginTop: '28px' }}>
        <div className="input-group">
          <label>Full Name<span className="required">*</span></label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Phone */}
        <div className="input-group">
          <label>Phone number<span className="required">*</span></label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email address<span className="required">*</span></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password <span className="required">*</span></label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Company */}
        <div className="input-group">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Marry Doe"
          />
        </div>

        {/* Agency Radio */}
        <div className="radio-group">
          <label className="radio-title">
            Are you an Agency?<span className="required">*</span>
          </label>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
}