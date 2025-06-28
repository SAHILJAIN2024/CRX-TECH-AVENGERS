"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import WalletConnect from "../../components/ConnectWalletButton";
import BurnToken from "../../components/BurnToken";
import CreateRequest from "../../components/CreateRequest";
import styles from "../../styles/newproject.module.css"; // Adjust the path as necessary
const New_project: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const requestRef = useRef<HTMLDivElement>(null);
  const burnRef = useRef<HTMLDivElement>(null);

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

  return (
    <main className={styles.dashboardContainer}>
      {/* 🔲 Background Video */}
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>

      {/* 🔗 Navbar */}
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
            Community
          </button>
          <button onClick={() => router.push("/ai")} className={styles.navButton}>
            Ai Prediction
          </button>
          <div className={styles.walletButton}>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* 🔖 Page Title */}
      <h1 className={styles.title}>🚀 New Project</h1>

      {/* 🧾 Create Request Section */}
      <section ref={requestRef} className={styles.section}>
        
        <CreateRequest />
      </section>

      {/* 🔥 Burn CRX Section */}
      <section ref={burnRef} className={styles.section}>
        <strong color="red"><h2>Burn CRX Tokens</h2></strong>
        <BurnToken />
      </section>
    </main>
  );
};

export default New_project;