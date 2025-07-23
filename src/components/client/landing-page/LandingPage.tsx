"use client";
import React from "react";
import Image from "next/image";
import { SoltickExplanation } from "./SoltickExplanation";
import { MarketplaceExplanation } from "./MarketplaceExplanation";

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: 0.4,
          }}>
          <source src="/bg-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <SoltickExplanation />
      </div>

      <div style={{ display: "flex", width: "100%", position: "relative" }}>
        <div style={{ flex: 1 }}>
          <Image
            src="/Landing2-1.png"
            alt="Landing Image 1"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", opacity: 0.6 }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Image
            src="/Landing2-2.png"
            alt="Landing Image 2"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", opacity: 0.6 }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <MarketplaceExplanation />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
