"use client"

import { Button } from "@/components/button"
import { ToggleButtonsProps } from "@/types/types"

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
                marginBottom: "24px"
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
        </div>
        </div>
    )
}