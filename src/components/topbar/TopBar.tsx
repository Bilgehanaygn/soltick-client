"use client";
import React from "react";
import themeColor from "../../constants/theme";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Create", path: "/create" },
    { name: "Sell Ticket", path: "/marketplace" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#FFFFFF",
      }}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={60}
        height={60}
        style={{ marginRight: "30px" }}
      />
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => router.push(item.path)}
          className={`topbar-button ${pathname === item.path ? "active" : ""}`}>
          {item.name}
        </button>
      ))}
      <style jsx>{`
        .topbar-button {
          margin-right: 20px;
          padding: 8px 16px;
          border: none;
          background: transparent;
          color: black;
          cursor: pointer;
          transition: background 0.3s;
        }
        .topbar-button:hover {
          background: rgba(255, 165, 0, 0.5);
        }
        .topbar-button.active {
          background: ${themeColor};
        }
      `}</style>
    </div>
  );
};
export default TopBar;
