"use client";
import React from "react";
import themeColor from "../../../constants/theme";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { menuItems } from "./menu-items";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingLeft: "20px",
  },
  groupedButtonContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
  },
  logo: {
    marginRight: "30px",
  },
  button: {
    marginRight: "20px",
    padding: "8px 16px",
    border: "none",
    background: "transparent",
    color: "black",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  active: {
    background: themeColor,
  },
};

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div style={styles.groupedButtonContainer}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          style={styles.logo}
        />
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            style={
              pathname === item.path
                ? { ...styles.button, ...styles.active }
                : styles.button
            }>
            {item.name}
          </button>
        ))}
      </div>
      <div style={styles.groupedButtonContainer}>
        <WalletMultiButton />
      </div>
    </div>
  );
};

export default TopBar;
