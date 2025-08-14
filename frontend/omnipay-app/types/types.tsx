export interface ToggleButtonsProps {
  activeTab: "buyer" | "seller"
  onTabChange: (tab: "buyer" | "seller") => void
}