import React from "react";
import { Box } from "@mui/material";
import Pic from '../src/assets/profilepic.png'
import WordFlicker from "./WordFlicker";

export default function Profile() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <Box
        component="img"
        src={Pic}
        alt="Qumber Zaidi"
        sx={{
          width: 170,
          height: 170,
          objectFit: "cover",
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.15)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 18px 40px rgba(228,90,132,0.35)",
          },
        }}
      />

      <WordFlicker />
    </div>
  );
}