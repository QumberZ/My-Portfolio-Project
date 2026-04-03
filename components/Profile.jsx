import React from "react";
import { Box } from "@mui/material";
import Pic from "../src/assets/profilepic.png";
import WordFlicker from "./WordFlicker";

export default function Profile() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "28px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 210,
          height: 210,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-12px)" },
          },
        }}
      >
        {/* 🌈 Outer Glow Aura */}
        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(228,90,132,0.25) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)",
            filter: "blur(30px)",
            animation: "pulseAura 4s ease-in-out infinite",
            "@keyframes pulseAura": {
              "0%, 100%": { opacity: 0.6, transform: "scale(0.95)" },
              "50%": { opacity: 1, transform: "scale(1.05)" },
            },
          }}
        />

        {/* 🔁 Rotating Neon Ring */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            padding: "4px",
            background:
              "conic-gradient(from 0deg, #FFACAC, #E45A84, #7c3aed, #22d3ee, #FFACAC)",
            animation: "spinRing 8s linear infinite",
            filter: "blur(0.5px)",
            "@keyframes spinRing": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
          }}
        />

        {/* 🧊 Glass Inner Ring */}
        <Box
          sx={{
            position: "absolute",
            inset: 6,
            borderRadius: "50%",
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />

        {/* 🖼️ Profile Image */}
        <Box
          component="img"
          src={Pic}
          alt="Qumber Zaidi"
          sx={{
            position: "relative",
            zIndex: 2,
            width: 170,
            height: 170,
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid rgba(20,10,30,0.95)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
            transition: "all 0.4s ease",
            "&:hover": {
              transform: "scale(1.06)",
              boxShadow: "0 25px 60px rgba(228,90,132,0.45)",
            },
          }}
        />

        {/* ⚡ Subtle Light Sweep */}
        <Box
          sx={{
            position: "absolute",
            width: "120%",
            height: "120%",
            borderRadius: "50%",
            background:
              "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
            animation: "shine 5s linear infinite",
            opacity: 0.4,
            "@keyframes shine": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
          }}
        />
      </Box>

      {/* 🧠 Your flicker text */}
      <WordFlicker />
    </div>
  );
}