export interface ToggleButtonsProps {
  activeTab: "buyer" | "seller"
  onTabChange: (tab: "buyer" | "seller") => void
}

export interface CTAButtonProps {
  activeTab: "buyer" | "seller"
}
