"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Profile from "../../../components/Profile";
import WalletConnect from "../../../components/ConnectWalletButton";
import TransactionHistory from "../../../components/TransactionHistory";
import BalanceChecker from "../../../components/BalanceChecker";
import styles from "../../../styles/Dashboarduser.module.css";

const UserDashboard: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const profileRef = useRef<HTMLDivElement>(null);
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
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h2 className={styles.logo}>CRX 🌱</h2>
        </div>
        <div className={styles.navRight}>
          {/* <button onClick={() => scrollToSection(profileRef)} className={styles.navButton}>
            Profile
          </button>
          <button onClick={() => scrollToSection(balanceRef)} className={styles.navButton}>
            Balance
          </button>
          <button onClick={() => scrollToSection(historyRef)} className={styles.navButton}>
            History
          </button> */}
          <button onClick={() => router.push("/community")} className={styles.navButton}>
            Community Page
          </button>
          <button onClick={() => router.push("/ai")} className={styles.navButton}>
            AI prediction
          </button>
          <button onClick={handleLogout} className={styles.navButton}>
            Logout
          </button>
          <div className={styles.walletButton}>
            <WalletConnect />
          </div>
        </div>
      </nav>
      <h1 className={styles.title}>User Dashboard</h1>
      <section ref={profileRef}>
        <Profile />
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

export default UserDashboard;
