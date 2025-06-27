"use client"
import BurnToken from "../../components/BurnToken";
import CreateRequest from "../../components/CreateRequest"
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import WalletConnect from "../../components/ConnectWalletButton";
import styles from "../../../styles/Dashboarduser.module.css";


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
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h2 className={styles.logo}>CRX 🌱</h2>
        </div>
        <div className={styles.navRight}>
          {/* <button onClick={() => scrollToSection(requestRef)} className={styles.navButton}>
            Submit Request
          </button>
          <button onClick={() => scrollToSection(burnRef)} className={styles.navButton}>
            Burn Token
          </button> */}
          <button onClick={() => router.push("/user")} className={styles.navButton}>
            Dashboard
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

      <h1 className={styles.title}> NEW PROJECT</h1>
        <section ref={requestRef}>
          <CreateRequest />
        </section>
        {/* Burn Section */}
        <section ref = {burnRef} id="burn" className={styles.section}>
          <h2>Burn CRX Tokens</h2>
          <BurnToken />
        </section>
    </main>
  );
};

export default New_project;
