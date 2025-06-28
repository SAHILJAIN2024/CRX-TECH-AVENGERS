"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import TransferToken from "../../components/TransferToken";
import WalletConnect from "../../components/ConnectWalletButton";
import styles from "../../styles/Dashboard.module.css";
import TransactionHistory from "../../components/TransactionHistory";
import BalanceChecker from "../../components/BalanceChecker";

const WalletFunctions: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const transferRef = useRef<HTMLDivElement>(null);
  const balanceRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);  

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
      {/* Video Background */}
      <video className={styles.videoBackground} autoPlay loop muted playsInline>
        <source src="/Background.mp4" type="video/mp4" />
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
          <div className={styles.walletButton}>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <h1 className={styles.title}>WALLET FUNCTIONS</h1>

      {/* Transfer Section */}
      <section ref={transferRef} id="transfer" className={styles.section}>
        <h2 style={{ textAlign: "center" }}></h2>
        <TransferToken />
      </section>
       <section ref={balanceRef}>
        <BalanceChecker />
      </section>
      <section ref={historyRef}>
        <TransactionHistory />
      </section>
    </main>
  );
};

export default WalletFunctions;