import React, { useState } from 'react';
import './App.css';
import App1 from './App1'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apps = [ <App1 />]

  const [ activeApp, setActiveApp ] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email} Password: ${password}`);
  };

  return (
    
    <div className="parent-grid">
      <div className="left-half">
        <p className="title">Portfoliography</p>
      </div>
      <div className="right-half">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <p className="label">Login</p>
          </div>
          <div className="row">
            <p className="label">Name:</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="row">
            <p className="label">Email:</p>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="row">
            <p className="label">Password:</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="row">
            <button type="submit" onClick = {() => {setActiveApp(0)}}>
            Login
            </button>
          </div>
          <div>{apps[activeApp]}</div>
        </form>
        
      </div>
      
    </div>
  );
};

export default App;
