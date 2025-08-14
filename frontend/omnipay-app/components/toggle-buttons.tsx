"use client"

import { useState } from "react"
import { ToggleButtonsProps } from "../types/types";

export function ToggleButtons({ activeTab, onTabChange }: ToggleButtonsProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "300px",
        height: "80px",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
          gap: "6px",
          width: "200px",
          height: "55px",
          background: "rgba(15, 23, 42, 0.5)",
          border: "1px solid rgba(96, 165, 250, 0.2)",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "90px",
            height: "45px",
            background: "#34D399",
            borderRadius: "10px",
            transform: activeTab === "buyer" ? "translateX(-47.5px)" : "translateX(47.5px)",
            transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />

        <button
          onClick={() => onTabChange("buyer")}
          style={{
            position: "relative",
            zIndex: 10,
            width: "90px",
            height: "45px",
            background: "transparent",
            border: "none",
            borderRadius: "10px",
            color: activeTab === "buyer" ? "#1e293b" : "#cbd5e1",
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "0.12em",
            cursor: "pointer",
            transition: "all 0.3s ease-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          BUYER
        </button>

        <button
          onClick={() => onTabChange("seller")}
          style={{
            position: "relative",
            zIndex: 10,
            width: "90px",
            height: "45px",
            background: "transparent",
            border: "none",
            borderRadius: "10px",
            color: activeTab === "seller" ? "#1e293b" : "#cbd5e1",
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "0.12em",
            cursor: "pointer",
            transition: "all 0.3s ease-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          SELLER
        </button>
      </div>
    </div>
  )
}