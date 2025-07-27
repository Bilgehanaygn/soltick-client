"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

type Style = React.CSSProperties;

const staticStyles: Record<string, Style> = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
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
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    textTransform: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
};

const SoltickExplanation: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const themeColor = theme.palette.primary.main;

  const handleCreateEvent = () => {
    router.push("/create");
  };

  return (
    <div style={staticStyles.container}>
      <div style={staticStyles.content}>
        <h1 style={{ ...staticStyles.title, color: themeColor }}>Soltick</h1>
        <p style={staticStyles.subtitle}>
          Soltick is a decentralized event ticketing platform on Solana. Create
          and manage events by specifying ticket quantities and prices, then let
          attendees purchase securely on-chain.
        </p>
        <button
          style={{
            ...staticStyles.button,
            backgroundColor: themeColor,
            color: theme.palette.getContrastText(themeColor),
          }}
          onMouseEnter={(e) =>
            Object.assign(
              (e.target as HTMLButtonElement).style,
              staticStyles.buttonHover
            )
          }
          onMouseLeave={(e) => {
            const style = (e.target as HTMLButtonElement).style;
            style.transform = "none";
            style.boxShadow = "none";
          }}
          onClick={handleCreateEvent}>
          Create an Event
        </button>
      </div>
    </div>
  );
};

export default SoltickExplanation;
