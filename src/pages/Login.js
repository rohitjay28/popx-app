// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '' });

//   const isReady = form.email.trim() !== '' && form.password.trim() !== '';

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isReady) return;
//     localStorage.setItem('popx_user', JSON.stringify({
//       name: 'Marry Doe',
//       email: form.email || 'Marry@Gmail.Com',
//     }));
//     navigate('/account');
//   };

//   return (
//     <div className="screen form-screen">
//       <h1 className="form-title">
//         Signin to your<br />PopX account
//       </h1>
//       <p className="form-subtitle">
//         Lorem ipsum dolor sit amet,<br />
//         consectetur adipiscing elit,
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Email */}
//         <div className="input-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter email address"
//           />
//         </div>

//         {/* Password */}
//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//           />
//         </div>

//         <button
//           type="submit"
//           className={`btn-primary ${!isReady ? 'disabled' : ''}`}
//           disabled={!isReady}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('popx_user', JSON.stringify({
      name: 'Marry Doe',
      email: form.email || 'Marry@Gmail.Com',
    }));
    navigate('/account');
  };

  return (
    <div className="screen form-screen">
      <h1 className="form-title">Signin to your<br />PopX account</h1>
      <p className="form-subtitle">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}