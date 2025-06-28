"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "../../components/WalletContext";
import styles from "../../styles/login.module.css";

export default function LoginPage() {
  const { address, connectWallet } = useWallet();
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!address) return alert("Please connect your wallet first!");
    if (!email) return alert("Please enter your email!");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, wallet: address }),
      });

      const data = await response.json();
      console.log("Login API response:", data);

      if (!response.ok || !data.role) throw new Error(data.message || "Login failed");

      localStorage.setItem("crx_token", data.token);

      if (data.role === "authority") {
        router.push("/dashboard/authority");
      } else if (data.role === "user") {
        router.push("/dashboard/user");
      } else {
        throw new Error("Unknown role returned from server.");
      }
    } catch (err: any) {
      alert(`\u274C Login error: ${err.message}`);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <video autoPlay muted loop playsInline className={styles.videoBackground}>
        <source src="/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.title}>🔐 Login</h1>

          {!address ? (
            <button onClick={connectWallet} className={styles.button}>
              Connect Wallet
            </button>
          ) : (
            <>
            <strong style={{ color: "#FFFFFF" }}>
            <p className={styles.connectedWallet}>
              Connected Wallet:{" "}
                {address.slice(0, 6)}...{address.slice(-4)}
            </p>
            </strong>
            </>
          )}

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <button onClick={handleLogin} className={styles.button}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
