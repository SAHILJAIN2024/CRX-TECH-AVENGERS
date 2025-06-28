"use client"
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import TransferToken from "../../components/TransferToken";
import WalletConnect from "../../components/ConnectWalletButton";
import styles from "../../styles/Dashboard.module.css";


const walletfunctions: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
 const transferRef = useRef<HTMLDivElement>(null);

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
            wallet functions
          </button>
          <button onClick={() => router.push("/community")} className={styles.navButton}>
            Community Page
          </button>
          <button onClick={() => router.push("/ai")} className={styles.navButton}>
            AI prediction
          </button>
          <div className={styles.walletButton}>
            <WalletConnect />
          </div>
        </div>
      </nav>

      <h1 className={styles.title}> WALLET FUNCTIONS</h1>
        
        <section ref = {transferRef} id="burn" className={styles.section}>
          <h2></h2>
          <TransferToken/>
        </section>
    </main>
  );
};

export default walletfunctions;