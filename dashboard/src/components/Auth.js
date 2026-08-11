import React, { useState } from "react";
import axios from "axios";

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const endpoint = isLogin ? "/login" : "/signup";
    const payload = isLogin ? { username, password } : { username, email, password };

    try {
      const res = await axios.post(`${API_URL}${endpoint}`, payload);
      onLogin(res.data.user);
    } catch (err) {
      setError(err.response?.data?.error || "Authentication failed. Check credentials.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f5f5f5' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '300px' }}>
        <h2 style={{ marginBottom: '20px', color: '#4184f3' }}>{isLogin ? "Login" : "Sign Up"}</h2>
        
        {error && <p style={{ color: 'red', fontSize: '0.8rem', marginBottom: '10px' }}>{error}</p>}
        
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          style={{ width: '92%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        
        {!isLogin && (
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '92%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        )}
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ width: '92%', padding: '10px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        
        <button type="submit" className="btn btn-blue" style={{ width: '100%' }}>
          {isLogin ? "Login" : "Create Account"}
        </button>
        
        <p style={{ marginTop: '15px', fontSize: '0.8rem', textAlign: 'center', cursor: 'pointer', color: '#4184f3' }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default Auth;