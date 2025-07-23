"use client";
import React from "react";
import { useRouter } from "next/navigation";
import themeColor from "@/constants/theme";

type Style = React.CSSProperties;

const styles: Record<string, Style> = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
    // backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "640px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: themeColor,
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#000000",
    marginBottom: "2rem",
    lineHeight: 1.6,
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: themeColor,
    color: "#000000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
};

export const DescribeContainer = () => {
  const router = useRouter();
  const handleCreateEvent = () => {
    router.push("/create");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Soltick</h1>
        <p style={styles.subtitle}>
          Soltick is a decentralized event ticketing platform on Solana. Create
          and manage events by specifying ticket quantities and prices, then let
          attendees purchase securely on-chain.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) =>
            Object.assign(
              (e.target as HTMLButtonElement).style,
              styles.buttonHover
            )
          }
          onMouseLeave={(e) =>
            Object.assign((e.target as HTMLButtonElement).style, styles.button)
          }
          onClick={handleCreateEvent}>
          Create an Event
        </button>
      </div>
    </div>
  );
};
