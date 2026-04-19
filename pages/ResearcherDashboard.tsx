import React, { useEffect, useState } from "react";
import api from "../src/services/api";

const ResearcherDashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMe();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome, {user.name} 👋</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default ResearcherDashboard;
