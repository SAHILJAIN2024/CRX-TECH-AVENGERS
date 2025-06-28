"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import styles from "../styles/TransactionHistory.module.css";

interface Transaction {
  _id: string;
  from: string;
  to: string;
  amount: number;
  createdAt: string;
}

export default function TransactionHistory() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWalletAddress = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        return accounts[0].toLowerCase();
      }
    } catch (err) {
      console.error("Wallet fetch error:", err);
      setError("Unable to connect wallet.");
    }
  };

  const fetchTransactions = async (wallet: string) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/transactions/${wallet}`);
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      setError("❌ Failed to fetch transactions.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      const address = await fetchWalletAddress();
      if (address) {
        setWalletAddress(address);
        fetchTransactions(address);
      }
    };
    init();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📄 Transaction History</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul className={styles.list}>
          {transactions.map((tx) => (
            <li key={tx._id} className={styles.item}>
              <div>
                <p className={styles.type}><strong>From:</strong> {tx.from}</p>
                <p className={styles.type}><strong>To:</strong> {tx.to}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p className={styles.amount}><strong>Amount:</strong> {tx.amount} CRX</p>
                <p className={styles.date}><strong>Date:</strong> {new Date(tx.createdAt).toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
