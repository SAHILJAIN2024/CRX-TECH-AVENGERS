"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Profile from "../../../components/Profile";
import WalletConnect from "../../../components/ConnectWalletButton";
import styles from "../../../styles/Dashboard.module.css";

const UserDashboard: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("crx_token");
      if (!token) {
        alert("🚫 Unauthorized: Please login first.");
        router.push("/login");
      } else {
        setLoading(false);
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("crx_token");
    router.push("/login");
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.title}>Loading your dashboard...</div>
      </div>
    );
  }

  return (
    <main className={styles.dashboardContainer}>
      {/* Background Video */}
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h2 className={styles.logo}>CRX 🌱</h2>
        </div>
        <div className={styles.navRight}>
          <button onClick={() => router.push("/dashboard/user")} className={styles.navButton}>
            Profile
          </button>
          <button onClick={() => router.push("/new_project")} className={styles.navButton}>
            New Project
          </button>
          <button onClick={() => router.push("/walletfunction")} className={styles.navButton}>
            Wallet Functions
          </button>
          <button onClick={() => router.push("/community")} className={styles.navButton}>
            Community Page
          </button>
          <button onClick={() => router.push("/ai")} className={styles.navButton}>
            AI Prediction
          </button>
          <button onClick={handleLogout} className={styles.navButton}>
            Logout
          </button>
          <div className={styles.walletButton}>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <h1 className={styles.title}>User Dashboard</h1>

      <section ref={profileRef}>
        <Profile />
      </section>
     
    </main>
  );
};

export default UserDashboard;