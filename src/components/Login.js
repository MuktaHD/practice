
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const payload = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      setIsLoggedIn(true);
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Please fill out both fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container bg-light">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
      <div>
        <h2>Payload:</h2>
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
      {isLoggedIn ? <p>Login successful!</p> : <p>Login failed</p>}
      <ToastContainer />
    </div>
  );
}

export default Login;










// import React, { useState } from 'react'


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     // const [isLoggedIn,setIsLoggedIn]=useState(false)
//     console.log(email);
//     const payload = { email, password };
//     console.log(payload);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
          
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//                placeholder="Enter password"
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>

//         </form>
//       </div>
//     );
//   };
  
//   export default Login;


