import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Auth from "./Auth"; 

axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

  useEffect(() => {
    axios
      .get(`${API_URL}/getUser`)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setUser(null);
        setLoading(false);
      });
  }, [API_URL]);

  const handleLogout = async () => {
    try {
      await axios.get(`${API_URL}/logout`);
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "20%" }}>Loading...</div>;
  }

  if (!user) {
    return <Auth onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <>
      <TopBar user={user} onLogout={handleLogout} />
      <Dashboard />
    </>
  );
};

export default Home;