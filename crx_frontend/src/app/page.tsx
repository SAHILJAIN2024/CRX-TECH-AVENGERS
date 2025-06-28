"use client";

import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.pageWrapper}>
      {/* Background Video */}
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className={styles.container}>
        <h1 className={styles.title}>🌱 Welcome to the CRX Platform</h1>
        <p className={styles.subtitle}>
          Create an account or sign in to access the dashboard.
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={() => router.push("/signup")} className={styles.button}>
            Sign Up
          </button>
          <button onClick={() => router.push("/login")} className={styles.button}>
            Login
          </button>
        </div>

        {/* Grid Card Section */}
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🧬</div>
            <h2 className={styles.cardTitle}>What is CRX?</h2>
            <p className={styles.cardText}>
              CRX is a futuristic carbon credit token platform designed to promote sustainability.
              It allows individuals and businesses to tokenize their carbon offsets, making them
              tradable and transparent on the blockchain.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>⚙️</div>
            <h2 className={styles.cardTitle}>How It Works</h2>
            <p className={styles.cardText}>
              Our system verifies carbon offset projects and issues CRX tokens equivalent to the
              amount of CO₂ offset. These tokens can be stored, traded, or used to demonstrate
              environmental commitment in real-time.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔐</div>
            <h2 className={styles.cardTitle}>Why CRX?</h2>
            <p className={styles.cardText}>
              CRX ensures top-tier security and reliability by leveraging smart contracts and
              decentralized storage. It offers a trusted system with minimal risk of fraud or
              manipulation.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔗</div>
            <h2 className={styles.cardTitle}>Why Blockchain Integration?</h2>
            <p className={styles.cardText}>
              Blockchain provides full transparency, traceability, and immutability—ensuring every
              carbon credit transaction is verifiable, auditable, and trustworthy across the globe.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <div className={styles.footerCard}>
            <div className={styles.cardIcon}>👥</div>
            <h2 className={styles.cardTitle}>About Us</h2>
            <p className={styles.cardText}>
              We are a team of climate-conscious developers and innovators working to bring
              transparency, trust, and accessibility to the carbon credit market through cutting-edge
              blockchain technology.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}