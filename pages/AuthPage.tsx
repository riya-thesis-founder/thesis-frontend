/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../src/services/api";
const [otp, setOtp] = useState("");
const [showOTP, setShowOTP] = useState(false);

const AuthPage = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState<"researcher" | "participant" | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!role) {
    alert("Please select Researcher or Participant");
    return;
  }

  try {
*/
    /* ================= LOGIN ================= 
    if (isLogin) {

      const res = await api.post("/auth/login", {
        email,
        password,
        role
      });

      const token =
        res.data?.data?.token ||
        res.data?.token;

      if (!token) {
        alert("Login succeeded but token missing");
        return;
      }

      localStorage.setItem("token", token);

      const backendRole =
        res.data?.data?.user?.role ||
        res.data?.user?.role ||
        role;

      localStorage.setItem("role", backendRole);

      window.location.href = `/dashboard/${backendRole}`;
      return;
    }

    /* ================= REGISTER ================= 
    else {

      if (!showOTP) {
        // STEP 1 → SEND OTP

        await api.post("/auth/register/send-otp", {
          name,
          email,
          phone,
          password,
          role
        });

        alert("OTP sent to your email");
        setShowOTP(true);

      } else {
        // STEP 2 → VERIFY OTP

        await api.post("/auth/register/verify-otp", {
          name,
          email,
          phone,
          password,
          role,
          otp
        });

        alert("Registration successful. Please login.");
        setIsLogin(true);
        setShowOTP(false);
        setOtp("");
      }
    }

  } catch (err: any) {

    console.log("AUTH ERROR →", err?.response?.data);

    alert(
      err?.response?.data?.message ||
      err?.response?.data ||
      "Server error during authentication"
    );
  }
};


  /* ================= UI ================= 

  const page = {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f6f8fb",
  };

  const card = {
    width: 420,
    background: "white",
    padding: 40,
    borderRadius: 14,
    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginTop: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 15,
  };

  const button = {
    width: "100%",
    marginTop: 20,
    padding: 14,
    borderRadius: 8,
    border: "none",
    background: "#0f172a",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 16,
  };

  const roleBtn = (r: "researcher" | "participant") => ({
    flex: 1,
    padding: 12,
    borderRadius: 8,
    border: role === r ? "2px solid #0f172a" : "1px solid #ccc",
    background: role === r ? "#eef2ff" : "white",
    cursor: "pointer",
    fontWeight: 600,
  });

  return (
    <div style={page}>
      <div style={card}>

        <h2 style={{ marginBottom: 10 }}>
          {isLogin ? "Login to Thesis" : "Create Account"}
        </h2>

        {/* ROLE SELECTOR }

        <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
          <button type="button" style={roleBtn("researcher")} onClick={() => setRole("researcher")}>
            Researcher
          </button>

          <button type="button" style={roleBtn("participant")} onClick={() => setRole("participant")}>
            Participant
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <input style={input} placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />

              <input style={input} placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </>
          )}

          <input style={input} type="email" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input style={input} type="password" placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button style={button}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            cursor: "pointer",
            color: "#2563eb",
            fontWeight: 500
          }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "New user? Register here" : "Already registered? Login"}
        </p>

      </div>
    </div>
  );
};

export default AuthPage;
*/
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import api from "../src/services/api";

const AuthPage = () => {

  const navigate = useNavigate();
  const { role: roleParam } = useParams();



  const [role, setRole] = useState<"researcher" | "participant" | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // OTP Register
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  // Forgot Password
  const [forgotMode, setForgotMode] = useState(false);
  const [resetStep, setResetStep] = useState(1); // 1 = send otp, 2 = verify
  const [resetOTP, setResetOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  useEffect(() => {
  if (roleParam === "participant" || roleParam === "researcher") {
    setRole(roleParam);
    setIsLogin(false); // open register mode by default
  }
}, [roleParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      /* ================= FORGOT PASSWORD ================= */
      if (forgotMode) {

        if (resetStep === 1) {

          await api.post("/auth/forgot/send-otp", { email });

          alert("OTP sent to your email");
          setResetStep(2);
          return;

        } else {

          await api.post("/auth/forgot/reset-password", {
            email,
            newPassword,
            otp: resetOTP
          });

          alert("Password reset successful. Please login.");

          setForgotMode(false);
          setResetStep(1);
          setResetOTP("");
          setNewPassword("");
          return;
        }
      }

      /* ================= LOGIN ================= */
      if (isLogin) {

        if (!role) {
          alert("Please select Researcher or Participant");
          return;
        }

        const res = await api.post("/auth/login", {
          email,
          password
        });

        const token = res.data?.data?.token || res.data?.token;

        if (!token) {
          alert("Login succeeded but token missing");
          return;
        }

        localStorage.setItem("token", token);

        const backendRole =
          res.data?.data?.user?.role ||
          role;

        localStorage.setItem("role", backendRole);

        window.location.href = `/dashboard/${backendRole}`;
        return;
      }

      /* ================= REGISTER ================= */
      else {

        if (!role) {
          alert("Please select Researcher or Participant");
          return;
        }

        if (!showOTP) {

          await api.post("/auth/register/send-otp", {
            name,
            email,
            phone,
            password,
            role
          });

          alert("OTP sent to your email");
          setShowOTP(true);

        } else {

          await api.post("/auth/register/verify-otp", {
            name,
            email,
            phone,
            password,
            role,
            otp
          });

          alert("Registration successful. Please login.");

          setIsLogin(true);
          setShowOTP(false);
          setOtp("");
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
        }
      }

    } catch (err: any) {

      console.log("AUTH ERROR →", err?.response?.data);

      alert(
        err?.response?.data?.message ||
        err?.response?.data ||
        "Server error during authentication"
      );
    }
  };

  /* ================= UI ================= */

  const page = {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f6f8fb",
  };

  const card = {
    width: 420,
    background: "white",
    padding: 40,
    borderRadius: 14,
    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginTop: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 15,
  };

  const button = {
    width: "100%",
    marginTop: 20,
    padding: 14,
    borderRadius: 8,
    border: "none",
    background: "#0f172a",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 16,
  };

  const roleBtn = (r: "researcher" | "participant") => ({
    flex: 1,
    padding: 12,
    borderRadius: 8,
    border: role === r ? "2px solid #0f172a" : "1px solid #ccc",
    background: role === r ? "#eef2ff" : "white",
    cursor: "pointer",
    fontWeight: 600,
  });

  return (
    <div style={page}>
      <div style={card}>

        <h2>{forgotMode
          ? "Reset Password"
          : isLogin
            ? "Login to Thesis"
            : "Create Account"}</h2>

        {/* ROLE SELECTOR */}
        {!forgotMode && (
          <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
            <button type="button" style={roleBtn("researcher")} onClick={() => setRole("researcher")}>
              Researcher
            </button>
            <button type="button" style={roleBtn("participant")} onClick={() => setRole("participant")}>
              Participant
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* REGISTER FIELDS */}
          {!isLogin && !forgotMode && (
            <>
              <input style={input} placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />

              <input style={input} placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </>
          )}

          {/* EMAIL */}
          <input style={input} type="email" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          {/* LOGIN / REGISTER PASSWORD */}
          {!forgotMode && (
            <input style={input} type="password" placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          )}

          {/* REGISTER OTP */}
          {!isLogin && showOTP && (
            <input
              style={input}
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
          )}

          {/* FORGOT MODE STEP 2 */}
          {forgotMode && resetStep === 2 && (
            <>
              <input
                style={input}
                placeholder="Enter OTP"
                value={resetOTP}
                onChange={e => setResetOTP(e.target.value)}
                required
              />
              <input
                style={input}
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
            </>
          )}

          <button style={button}>
            {forgotMode
              ? resetStep === 1
                ? "Send OTP"
                : "Reset Password"
              : isLogin
                ? "Login"
                : showOTP
                  ? "Verify OTP"
                  : "Send OTP"}
          </button>
        </form>

        {/* TOGGLE LOGIN / REGISTER */}
        {!forgotMode && (
          <p
            style={{
              textAlign: "center",
              marginTop: 20,
              cursor: "pointer",
              color: "#2563eb",
              fontWeight: 500
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "New user? Register here" : "Already registered? Login"}
          </p>
        )}

        {/* FORGOT PASSWORD BUTTON */}
        {isLogin && !forgotMode && (
          <p
            style={{
              textAlign: "center",
              marginTop: 10,
              cursor: "pointer",
              color: "#2563eb",
              fontWeight: 500
            }}
            onClick={() => setForgotMode(true)}
          >
            Forgot Password?
          </p>
        )}

        {/* BACK BUTTON IN FORGOT MODE */}
        {forgotMode && (
          <p
            style={{
              textAlign: "center",
              marginTop: 15,
              cursor: "pointer",
              color: "#2563eb"
            }}
            onClick={() => {
              setForgotMode(false);
              setResetStep(1);
            }}
          >
            Back to Login
          </p>
        )}

      </div>
    </div>
  );
};

export default AuthPage;